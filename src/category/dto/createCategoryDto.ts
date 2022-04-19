import { IsDefined, IsNotEmpty } from "class-validator";

class CreateCategoryDto{

    @IsDefined()
    @IsNotEmpty()
    name: string

    description: string

}

export default CreateCategoryDto