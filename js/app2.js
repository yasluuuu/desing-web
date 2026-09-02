let dia = prompt("escolha um dia da semana \n sendo 1:domingo - 7:sábado ");
dia = Number(dia);

if (dia<=0 || dia >8){
    alert("dia invalido")

}else if (dia == 1){
    alert("vc escolheu domingo")
}
else if (dia == 2){
    alert("vc escolheu segundo")
}else if (dia == 3){
    alert("vc escolheu terça")
}else if (dia == 4){
    alert("vc escolheu quarta")
}else if (dia == 5){
    alert("vc escolheu quinta")
}else if (dia == 6){
    alert("vc escolheu sexta")
}else {
    alert("vc escolheu dsabado")
}