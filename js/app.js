let nasc = prompt("digite seu ano de nascimento:");
nasc = parseInt(nasc) /* pra dizer que uma variavel é inteira tem int float string e assim vai!*/

let viva =confirm("se vc esta viva, clique em ok ");

if (viva){
  alert(`vc tem ${2026-nasc}`);

} else{
  alert("vc morreu.");
}