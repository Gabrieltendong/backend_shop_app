import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
        const user = await this.userService.findUserById(createCommand.user_id)
        const products = await this.cartService.findAllProductUser(createCommand.user_id);
        if(products.length == 0)
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Votre panier est vide',
            }, HttpStatus.FORBIDDEN)

        createCommand['products'] = products
        const paymentMethod = await stripe.paymentMethods.create({
            type: 'card',
            card: createCommand.card,
        });
        const newCommand = new this.commandModel(createCommand)
        await newCommand.save();
        this.cartService.removeAllProductCart(createCommand.user_id);
        return {message: 'Bravo!!! votre commande a été validé'};
    }

}
