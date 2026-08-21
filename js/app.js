var nasc= 2010
let nome= "yasmim";
const viva = true;

function calcIdade(ano){
   let idade = ano - nasc;
   alert (`dentro de função - idade ${idade}`);
   return idade;
}

calcIdade();
// alert (`fora de função - idade ${idade}`);
 alert (`fora de função : chamando caucIdade ${calcIdade(2027)}`);
