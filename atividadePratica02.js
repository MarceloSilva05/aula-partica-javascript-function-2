

//1
let notas=function(){
    let n1=5,n2=5,media;
    media=(n1+n2)/2;
    if (media>=7) {
        console.log("Aprovado!");
    } else if(media>=5&&media<7){
      console.log("Recuperação!"); 
    }else{
        console.log("Reprovado!");
    }

}
notas();

//2
let tabuada=function(){
    let numero=3;
    
    for(let n=3;n<=12;n++){
      console.log(n + " - " + numero + " = " + (n-numero));
    }
    console.log("-------X---------");
    for(let n=1;n<=10;n++){
        console.log(n + " + " + numero + " = " + (n+numero));
      }
      console.log("-------X---------");
    for(let n=1;n<=10;n++){
        console.log(n + " * " + numero + " = " + (n*numero));
      }
      console.log("-------X---------");
    for(let n=3;n<=30;n++){
        if (n%3===0) {
            console.log(n + " / " + numero + " = " + (n/numero));
        }
      }
  }
  tabuada();

  /*
Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.

a)       Chamar a função e exibir no console o resultado.
*/
//3
let anoNascimento=()=>{
    let idade=24;
    idade=idade>=18?"Maior de idade":"Menor de idade";
    console.log(idade);
}
anoNascimento();