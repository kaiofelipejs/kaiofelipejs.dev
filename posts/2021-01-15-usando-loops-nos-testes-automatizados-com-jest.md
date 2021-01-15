---
title: "Teste automatizado: Testando cenários sem duplicar código com Jest"
description: Nesse post quero mostrar como podemos evitar a duplicação de código
  e mantê-lo legível usando a função .each do Jest para testar cenários
  semelhantes.
date: 2021-01-14 07:54:19
image: /assets/img/tests-loops-jest.png
category: frontend
background: "#AB660D"
---
Algumas vezes já precisei escrever testes automatizados que eram muito semelhantes, pois só mudavam o argumento/retorno e eu acabava duplicando código escrevendo cada cenário de teste "na mão". Não quero que você sofra com isso também, então, neste post pretendo mostrar como podemos escrever nossos cenários de testes de forma mais dinâmica com Jest usando a função `.each`.

> Vamos criar aqui uma situação simples para focarmos apenas no problema, que é a duplicação de código nos cenários de testes.

Temos aqui o arquivo `bestThing.js` com a seguinte estrutura: 

```jsx
const bests = {
  team: 'palmeiras',
  fruit: 'banana',
  band: 'projeto sola',
  movie: 'tarzan (1999)',
}

const getBestThing = thing => bests[thing]

export { getBestThing, bests }
```

Nada demais. Apenas um objeto com 4 itens e uma função que recebe uma chave e retorna o valor correspondente a essa chave do objeto. De boa.

Agora, será preciso criar o arquivo de teste desse cara e construiremos três caminhos para testar essa função `getBestThing`. Bora lá: 

## Pior caminho, duplicando código:

```jsx
import { getBestThing } from 'bestThing'

describe('the worst', () => {
  test('when given thing is "team" should return "palmeiras"', () => {
    expect(getBestThing('team')).toEqual('palmeiras')
  })

  test('when given thing is "fruit" should return "banana"', () => {
    expect(getBestThing('fruit')).toEqual('banana')
  })

  test('when given thing is "band" should return "projeto sola"', () => {
    expect(getBestThing('band')).toEqual('projeto sola')
  })

  test('when given thing is "movie" should return "tarzan (1999)"', () => {
    expect(getBestThing('movie')).toEqual('tarzan (1999)')
  })
})
```

Sim, funciona. Mas consegue reparar como isso pode ser improdutivo se precisar alterar algo dessa expectativa final? Para evitar esse retrabalho no futuro, vamos refatorá-lo e criar um loop "na mão": 

## O caminho mais ou menos, criando loop "na mão"

```jsx
import { getBestThing, bests } from 'bestThing'

describe('the so-so', () => {
  Object.entries(bests).forEach(thing => {
    test(`when given thing is "${thing[0]}" should return "${thing[1]}`, () => {
      expect(getBestThing(`${thing[0]}`)).toEqual(`${thing[1]}`)
    })
  })
})
```

Repare que agora tivemos que importar também o objeto `bests` para construir o teste dessa forma. É verdade que essa solução já é melhor que a anterior, mas você não acha um tanto ilegível? Pois é, eu também.

Vamos, então, para a solução que eu considero mais elegante usando a função `.each` do próprio Jest que foi criada especialmente para esses cenários:

## Caminho feliz, usando .each

```jsx
import { getBestThing } from 'bestThing'

describe('the good', () => {
  test.each([
    ['team', 'palmeiras'],
    ['fruit', 'banana'],
    ['band', 'projeto sola'],
    ['movie', 'tarzan (1999)'],
  ])('when given thing is "%s" should return "%s"', (thing, value) => {
    expect(getBestThing(thing)).toEqual(value)
  })
})
```

Para entendermos melhor o que está rolando aqui, removeremos os valores e olharemos para a estrutura da função que fica assim:

```jsx
test.each(table)(name, fn)
```

`table`: é um Array de Arrays (uma Lista de Listas) que possui os argumentos que serão passados para a `fn` (função). 

`name`: é uma String, o nome do seu bloco de teste. Aqui tem algo que acho muito bacana que é possível gerar nomes únicos para cada bloco injetando paramêtros neles. Reparou que ali no nome existem dois `%s`?! O `%s` retorna como String o conteúdo que está no indice atual. Ou seja, quando estiver na primeira linha da tabela, o nome do bloco do teste será *'when given thing is "team" should return "palmeiras"'* e assim para todos os demais alterando apenas esses valores. Existem outros parâmetros que podem ser usados e estão [listados na documentação](https://jestjs.io/docs/en/api#1-testeachtablename-fn-timeout).

`fn`: é o teste a ser executado. É a função que receberá por argumento o que está em cada linha da tabela.

Fazendo dessa forma, evitamos duplicar código e o mantemos limpo! 🎉

No fim, o output final do teste será o mesmo, mas pode ter certeza que o seu "eu do futuro" agradecerá por encontrar um lugar mais organizado.

![Output dos testes nos três caminhos](/assets/img/output-tests-loop.png "Output dos testes nos três caminhos")

> \##...

O exemplo para ilustrar o uso dos loops foi simples, mas imagine que isso poderia ser algo mais complexo como fazer requisição para uma API, mostrar uma quantidade X de itens na tela quando algo Y estiver acontecendo e por aí vai...

Espero que essa dica tenha sido útil e fique super a vontade para compartilhar outras coisas aqui nos comentários. Bora aprender juntos! 😄

Até a próxima!

### Referências

* [Documentação do Jest](https://jestjs.io/docs/en/api)
* [Curso React Profissional - Nardiny Academy](https://www.udemy.com/course/react-redux-profissional/)