var nasc= 2010
let nome= "yasmim";
const viva = true;

function calcIdade(ano=2026){
   let idade = ano - nasc;
   let menor;
   if (idade<18)
     {
       menor = true;
       var podebeber=false;

     } else{
       menor = false;
       var podebeber = true
     }
     alert(`${nome} é  menor de idade? ${menor}\nidade: ${idade}\npode beber: ${podebeber}`)
     return idade;
}

calcIdade();
// alert (`fora de função - idade ${idade}`); erro pois a variavel let nao existe fora do escopo dela
 alert (`fora de função : chamando caucIdade ${calcIdade(2027)}`);
