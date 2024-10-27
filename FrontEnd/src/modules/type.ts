export interface Isignin
{
    username: string;
    password: string;
}

export interface Isignup
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
    batwing: number;
    pumpkin: number;
    snake: number;
    spider: number;
    toad: number;
}

export interface IGame {
    ingredient: IingredientRecepie;
}