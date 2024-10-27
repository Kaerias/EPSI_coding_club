import fetch from "@/services/FetchService";

const typerFileReponse = (resp: any) => ({ data: resp as any })


export const signup = (param: string) => fetch.post(`/signup`, param).then(typerFileReponse);
export const signin = (param: string) => fetch.post(`/signin`, param).then(typerFileReponse);

export const batOne = (param: string) => fetch.patch(`/batOne`, param).then(typerFileReponse);
export const batFive = (param: string) => fetch.patch(`/batFive`, param).then(typerFileReponse);

export const pumpkinOne = (param: string) => fetch.patch(`/pumpkinOne`, param).then(typerFileReponse);
export const pumpkinFive = (param: string) => fetch.patch(`/pumpkinFive`, param).then(typerFileReponse);

export const snakeOne = (param: string) => fetch.patch(`/snakeOne`, param).then(typerFileReponse);
export const snakeFive = (param: string) => fetch.patch(`/snakeFive`, param).then(typerFileReponse);

export const spiderOne = (param: string) => fetch.patch(`/spiderOne`, param).then(typerFileReponse);
export const spiderFive = (param: string) => fetch.patch(`/spiderFive`, param).then(typerFileReponse);

export const toadOne = (param: string) => fetch.patch(`/toadOne`, param).then(typerFileReponse);
export const toadFive = (param: string) => fetch.patch(`/toadFive`, param).then(typerFileReponse);

export const reset = (param: string) => fetch.patch(`/reset`, param).then(typerFileReponse);


