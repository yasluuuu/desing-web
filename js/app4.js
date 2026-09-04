let vezes = Number(prompt("digite o numero de vezes"));
for (let i = 1; i<=vezes; i ++){
    if(vezes > 100){
        alert("valor invalido");
        break
    }
    alert(`contei ${i}vez`);
    if (i%2!==0){
        continue;

    }
   alert(`${i} é par`);

}