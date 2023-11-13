// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.


export function calcularMedia (nota01:number, nota02:number):Object {
 const media: number= (nota01 + nota02) /2
 return {media, aprovado: media >=6}
 }