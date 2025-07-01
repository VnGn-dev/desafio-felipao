let nomeDoHeroi = "Felipe"
let QuantidadeDeXp = 30000
let nivelDoHeroi = ''

    if (QuantidadeDeXp <=1000) {
        nivelDoHeroi = "Ferro"   
    }else if (QuantidadeDeXp <= 2000) {
        nivelDoHeroi = "Bronze"
    }else if (QuantidadeDeXp <= 5000) {
        nivelDoHeroi = "Prata"
    }else if (QuantidadeDeXp <= 7000) {
        nivelDoHeroi = "Ouro"
    }else if (QuantidadeDeXp <= 8000) {
        nivelDoHeroi = "Platina"
    }else if (QuantidadeDeXp <= 9000) {
        nivelDoHeroi = "Ascendente"
    }else if (QuantidadeDeXp <= 10000) {
        nivelDoHeroi = "Imortal"
    }else {
        nivelDoHeroi = "Radiante"
    }
    console.log("O Heroi de nome " + nomeDoHeroi + " esta no nivel " + nivelDoHeroi)  