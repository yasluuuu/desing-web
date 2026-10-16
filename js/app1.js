const lista = []

const formulario=document.getElementById("formulario");
const texto = formulario.texto;


const tags = document.getElementById("tags");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let t = texto.valeu;
    t=t.split("");
    for (let i = 0; i<lista.length; i++){
        let palavra = t[i];
        palavra =palavra.toUpercase();
        if(palavra.startswith("#")){
            lista.push(palavra);
        } else if (palavra.include("#")){
            let pos = palavra.indexof("#");
           palavra= palavra.slice(pos,palavra.length);
            lista.push(palavra);}

        
    }
    

    tags.innerHTML = lista ;
    formulario.reset();
})