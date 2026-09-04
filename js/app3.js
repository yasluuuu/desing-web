let n1 = Number(prompt("digite um numero:"))
let n2 = Number(prompt("digite outro numero"))

do{
    let msg = "escolha uma opcao \n";
    msg = msg + "1: somar\n";
    msg = msg + "2: somar\n";
    msg = msg + "3: somar\n";
    msg = msg + "4: somar\n";
    msg = msg + "5: somar\n";
    op = prompt(msg);
    switch(op){
        case "1": alert(`${n1}+${n2} = ${n1+n2}`); break;
        case "2": alert(`${n1}+${n2} = ${n1+n2}`); break;
        case "3": alert(`${n1}+${n2} = ${n1+n2}`); break;
        case "4": alert(`${n1}+${n2} = ${n1+n2}`); break;
        case "5": alert(`até logo!`); break;
        default:alert("opção inválida !"); break;

    }
}while(op != "5");