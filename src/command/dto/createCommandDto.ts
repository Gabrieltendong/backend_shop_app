export class CreateCommandDto{

    user_id: string;

    address: string;

    card: {
        number: number,
        exp_month: number,
        exp_year: number,
        cvc: string
    };
}