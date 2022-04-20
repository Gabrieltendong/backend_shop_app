import { IsDefined, IsNotEmpty } from "class-validator"
import { ObjectId } from "mongoose"

class AddFavoriteDto{

    @IsNotEmpty()
    @IsDefined()
    user: ObjectId

    @IsNotEmpty()
    @IsDefined()
    product: ObjectId

}

export default AddFavoriteDto