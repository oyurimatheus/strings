class Texto {

    constructor(dado) {
        this._dado = dado
    }

    concat(outroTexto) {
        const textoConcatenado = [].concat(this._dado, outroTexto.dado)
        return new Texto(textoConcatenado)
    }

    charAt(posicao) {
        return this._dado[posicao]
    }

    includes(texto) {
        for(let i = 0; i < this.tamanho(); i++) {
            const pedaco = this.dado.slice(i, texto.tamanho() + i)
            if(this._ehIgual(pedaco, texto)) {
                return true
            }
        }
        return false
    }


    tamanho() {
        return this._dado.length
    }

    _ehIgual(pedaco, texto) {
        for(let i = 0; i < pedaco.length; i++) {
            if(pedaco[i] !== texto.dado[i])
                return false
        }
        return true
    }

    toString() {
        return this._dado.join('')
    }
    get dado() {
       return this._dado
    }
}

const dado1 = 'Yuri'.split('')
console.log('dado 1 ->' + dado1)

const nome = new Texto(dado1)
console.log('Nome -> ' + nome.toString())

const dado2 = ' de Oliveira'.split('')
console.log('dado 2 ->' + dado2)

const sobrenome = new Texto(dado2)
console.log('Sobrenome ->' + sobrenome.toString())

const nomeCompleto = nome.concat(sobrenome)
console.log(nomeCompleto.toString())

console.log('Caractere na posição 5 -> ' + nomeCompleto.charAt(5))

console.log('Tamanho do nomeCompleto ->' + nomeCompleto.tamanho())

console.log('Tem Yuri? -> ' + nomeCompleto.includes(nome))

const matheus = new Texto('Matheus'.split(''))
console.log('Tem Matheus? -> ' + nomeCompleto.includes(matheus))

