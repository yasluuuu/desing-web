
class Animal {
    constructor(n, c = "desconhecido", a = 0, p = 0, r = "vira-lata") {
        this.nome = n;
        this.cor = c;
        this.altura = a;
        this.peso = p;
        this.raca = r;
    }

    falar() {
        alert("oi");
    }

    comer(kg) {
        this.peso = this.peso + kg;
        alert("comi");
    }

    defecar(kg) {
        this.peso = this.peso - kg;
        alert("defequei");
    }

    saudar() {
        let msg = `Olá, meu nome é ${this.nome}\n`;
        msg = msg + `cor: ${this.cor} raça: ${this.raca}\n`;
        msg = msg + `peso: ${this.peso}\n`;
        msg = msg + `altura: ${this.altura}\n`;
        return msg;
    }
}

class Cachorro extends Animal {
    constructor(n, c = "desconhecido", a = 0, p = 0, r = "vira-lata") {
        super(n, c, a, p, r);
        this.patas = 4;
    }

    falar() {
        alert("au au");
    }

    saudar() {
        let msg = super.saudar();
        msg = msg + "Sou um cachorro";
        alert(msg);
    }
}

class Passaro extends Animal {
    constructor(n, c = "desconhecido", a = 0, p = 0, r = "desconhecido") {
        super(n, c, a, p, r);
    }

    falar() {
        alert("fiu fiu");
    }
}

const balu = new Cachorro("balu lucia");
const mel = new Cachorro("mel", "Amarelo", 1.10,45,"labrador");
const leleco = new Passaro("leleco lucio", r="papagaio");
