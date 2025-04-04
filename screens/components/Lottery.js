export function gerarSorteio(){
    const numerosSorteados = [];

    while (numerosSorteados.length <6 ) {
        const numero = Math.floor(Math.random() * 60) + 1;
        if (!numerosSorteados.includes(numero)) {
          numerosSorteados.push(numero);
        }
    }
    return numerosSorteados;
}

export function verificarAcertos(numerosUsuario, numerosSorteados) {

    const acertos = numerosUsuario.filter(num => numerosSorteados.includes(num));
    const quantidadeAcertos = acertos.length;

    if (quantidadeAcertos === 6) {
        return 'Campeão! Você acertou os 6 números!';
      } else if (quantidadeAcertos === 5) {
        return 'Você acertou a Quina!';
      } else if (quantidadeAcertos === 4) {
        return 'Você acertou a Quadra!';
      } else {
        return `Você acertou ${quantidadeAcertos} número(s). Tente novamente!`;
      }
}