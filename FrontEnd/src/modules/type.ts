export interface IsignIn
{
    username: string;
    password: string;
}

export interface IsignUp
{
    username: string;
    password: string;
}

export interface Iingredient
{
    username: string;
}

export interface IingredientRecepie
{
    batWing: number;
    pumpkinJuice: number;
    snakeVenom: number;
    spiderLeg: number;
    toadSlime: number;
}

export interface IGame {
    ingredients: IingredientRecepie;
    username: string;
    isPotionFinished: false,
    secretIngredient: "",
}