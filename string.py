class Texto:

    def __init__(self, dado: list):
        self.__dado = dado

    def __add__(self, outroTexto):
        textoConcatenado = self.__dado + outroTexto.dado
        return Texto(textoConcatenado)

    def __getitem__(self, posicao):
        return self.__dado[posicao]

    def __len__(self):
        return len(self.__dado)

    def __str__(self):
        return ''.join(self.__dado)

    def __contains__(self, texto):
        tamanho_texto= len(texto)
        for indice in range(0, tamanho_texto):
            pedaco = self.__dado[indice: tamanho_texto + indice]
            
            if self._eh_igual(pedaco, texto):
                return True

        return False

    def _eh_igual(self, pedaco, texto):
        for indice, letra in enumerate(pedaco):
        
            if letra != texto[indice]:
                return False
        
        return True

    @property
    def dado(self):
        return self.__dado


if __name__ == '__main__':
    dado1 = list('Yuri')
    print(f'dado 1 -> {dado1}')

    nome = Texto(dado1)
    print(f'Nome -> {nome}')

    dado2 = list(' de Oliveira')
    print(f'dado 2 -> {dado2}')

    sobrenome = Texto(dado2)
    print(f'Sobrenome -> {sobrenome}')

    nomeCompleto = nome + sobrenome
    print(nomeCompleto)

    print(f'Caractere na posição 5 ->  {nomeCompleto[5]}')

    print(f'Tamanho do nomeCompleto -> {len(nomeCompleto)}')

    print(f'Tem Yuri? -> {nome in nomeCompleto}')

    matheus = list('Matheus')
    print(f'Tem Matheus? -> {matheus in nomeCompleto}')
