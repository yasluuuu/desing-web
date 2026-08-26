var nasc= 2010
let nome= "yasmim";
const viva = true;

function calcIdade(ano){
   let idade = ano - nasc;
   
   if (idade<18)
     {
      let menor = true;
     } else{
      let menor = false;
     }
     alert(`${nome}é  menor de idade? ${menor}`)
     return idade;
}

calcIdade();
// alert (`fora de função - idade ${idade}`); erro pois a variavel let nao existe fora do escopo dela
 alert (`fora de função : chamando caucIdade ${calcIdade(2027)}`);
