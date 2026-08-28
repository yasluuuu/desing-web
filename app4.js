let nasc = prompt("digite seu ano de nascimento ")
nasc = parseInt(nasc)

let fds = confirm(" se hoje for final de semana, clique em ok ")
let idade = 2026 - nasc;

alert(`vc é maior de idade ${idade >= 18}`)
alert(`hoje é final de semana ${fds}`);


if(idade >= 18 && fds ) {
    alert("vc pode beber")
}else{
    alert("vc n pode beber");
}