import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CartsService } from 'src/carts/carts.service';
import { UsersService } from 'src/users/users.service';
import { Command, CommandDocument } from './command.schema';
import { CreateCommandDto } from './dto/createCommandDto';
const stripe = require('stripe')('sk_test_51IXWRdEwEvnp4vKjnwnqgkPLeUO8VdxVoflYOT7Wzs15PkOV0cZVei3neoMOO83hBwUbijP6C20bxc8mOWSEBeNf00d2VTILmA');

@Injectable()
export class CommandService {

    constructor(
        @InjectModel(Command.name) private commandModel: Model<CommandDocument>,
        private cartService: CartsService,
        private userService: UsersService,
    ){}

    async createNewCommand(createCommand: CreateCommandDto){
        let totalPrice = createCommand.products.reduce(
            (previousValue, item) => previousValue + item.quantity*item.product.price,
            0
        );
        createCommand['totalPrice'] = totalPrice
        const paymentMethod = await stripe.paymentMethods.create({
            type: 'card',
            card: createCommand.card,
        });
        try{
            const newCommand = new this.commandModel(createCommand)
            await newCommand.save();
            this.cartService.removeAllProductCart(createCommand.user_id);
            return {message: 'Bravo!!! votre commande a été validée'};
        }catch{
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "Verifiez votre adresse de livraison ainsi que d'autre information",
            }, HttpStatus.FORBIDDEN)
        }

    }

    async getCommandUser(user_id: ObjectId){
        const res = await  this.commandModel.find({user_id}).populate({path: 'products', populate: {path: 'product'}})
        console.log("res", res[0].products)
        return res
        
    }

    getCommandProduct(user_id: ObjectId, product_id: ObjectId){
        try{
            let fields = {"products.product": product_id}
            return this.commandModel
            .find(
                {user_id},
                {products: { 
                    $elemMatch: { 
                        $expr: {
                            $eq: [
                                "quantity",
                                1
                            ]
                        } 
                    } 
                }
            })
        }catch{
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "Verifier l'idenfiant de votre produit",
            }, HttpStatus.FORBIDDEN)
        }
    }

}
