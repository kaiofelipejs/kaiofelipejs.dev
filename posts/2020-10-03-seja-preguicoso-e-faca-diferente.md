---
title: Seja “preguiçoso” e faça diferente
description: "Calma, eu vou explicar esse título… "
date: 2020-06-01 02:07:59
image: /assets/img/preguica.jpeg
category: life
background: "#527310"
---

Por vezes já falei para algumas pessoas que me considero “preguiçoso” e a resposta geralmente é “como assim?”, então quero explorar um pouquinho sobre isso nesse texto e mostrar um exemplo do meu dia a dia.

“Ser preguiçoso” é a forma que eu gosto de me referir a algo conhecido no mercado como _Hacker Culture_ (ou _Cultura Hacker,_ em português*)* que, resumidamente, é encontrar/visualizar formas não convencionais para chegar num objetivo de forma ágil através de experimentos e alavancagens. Gosto de me referir assim porque geralmente causa esse susto nas pessoas, mas se você preferir utilizar Cultura Hacker (que é mais startupeiro), sem problemas.

> ### "Beleza, Kaio. Mas como ser preguiçoso vai me ajudar?"

Bom, não sou nenhum guru e muito menos coach para dizer o que vai realmente alavancar sua produtividade ou algo parecido. Aqui eu quero te provocar a pensar formas diferentes para atingir o mesmo resultado que você teria indo na forma convencional.

Normalmente quando tenho um problema para resolver, a primeira coisa que eu penso é **“o que eu posso fazer com menos esforço e vai me trazer um resultado significativo?”**. É um pouco daquela ideia do [Pareto de 80/20](https://pt.wikipedia.org/wiki/Princ%C3%ADpio_de_Pareto). Por várias vezes (em coisas mais simples, obviamente) eu consigo resolver o problema apenas respondendo essa pergunta. Isso me ajuda a evitar matar um mosca usando uma bazuca, por exemplo. Até existem dois termos no mercado que tem relação com esse tema que é BDUF (Big Design Up Front) e Over engineering, não vou entrar no conceito de cada um (até porque isso daria bastante pano pra manga), mas no final vou deixar referências sobre esses temas.

## O problema

Um dos papeis que eu exerço aqui no time de recrutamento é a parte de Sourcing — que, resumidamente, é a busca ativa por candidatas (os). A grande parte do meu tempo fica dedicado a isso, então eu devo ser o mais produtivo possível nessa tarefa.

Uma das formas de encontrar pessoas que _tendem_ a ter mais fit com a nossas tecnologias é buscar por pessoas que trabalham ou já trabalharam com as mesmas tecnologias que usamos (_avá!_ meio óbvio isso, mas beleza, só para constar). Aqui na RD trabalhamos com diferentes tecnologias, mas a principal é Ruby. Então, navegando por aí, eu encontrei um catálogo com mais de 80 empresas que possuem em sua stack principal o Ruby. Para um (a) Sourcer isso é um tesouro!

Minha ideia inicial foi criar uma pesquisa booleana com o nome dessas empresas como palavras chaves. E aqui que entra o problema: Como eu posso transformar essa lista em uma pesquisa booleana sem sofrer tanto?Basicamente, eu tinha três opções:

### **1. Fazer tudo na mão, copiando e colando.**

![Bob esponja encenando um arco iris com as mãos escrito “I wanna die”](/assets/img/spongebob.jpg "Bob esponja encenando um arco iris com as mãos escrito “I wanna die”")

Não preciso explicar muito, né?! O bob esponja resume meu sentimento.

### **2. Usar uma ferramenta pronta.**

![Mulher provando kombucha](/assets/img/kombucha.jpg "Mulher provando kombucha")

Essa é uma opção válida, já que existem várias ferramentas como [Recruit’Em](http://recruitin.net/), [Source Hub](https://source.socialtalent.com/) ou planilhas como essa [aqui](https://drive.google.com/file/d/1m6ovg33-ShU8JIOveVQAfJalfbF5V0e_/view), mas não optei por ela para resolver esse problema específico.

### **3. Hackerman (or girl)**

Eis a opção que eu escolhi.

![Uma montagem com meu rosto no personagem Elliot de Mr. Robot](/assets/img/kaiohackerman.jpg "Uma montagem com meu rosto no personagem Elliot de Mr. Robot")

A maiorias das pessoas que trabalham comigo sabe que eu gosto de me aventurar a escrever uns códigos e essa pareceu ser uma oportunidade de aplicar na prática e resolver um problema real codificando.

## A solução

A ideia é criar um algoritmo que receba uma lista contendo o nome de cada empresa e que ele me retorne todas elas dentro da formatação de uma pesquisa booleana — que é parecido com isso:

_(“Empresa 1” OR “Empresa 2” OR “Empresa 3”)_

O primeiro problema que tive foi que o catálogo não estava formatado como eu precisava para gerar essa lista. Então, eu usei o [VS Code](https://code.visualstudio.com/) (sim, editor de código mesmo) para me ajudar nessa formatação já que ele tem alguns atalhos a mais que um editor de texto normal e eu poderia ser mais produtivo.

Feito a formatação, bora pro código. Não vou entrar em detalhes técnicos (até porque não é a ideia desse post), mas esse foi o resultado final do algoritmo:

```javascript
const companies = ["Empresa 1", "Empresa 2", "Empresa 3"]

const createBooleanSearch = (companies, operator) => {
  operator += " "
  let booleanSearch = ""

  companies.forEach(company => {
    booleanSearch += `"${company}" ${operator}`
    return booleanSearch
  })

  console.log(formatBooleanSearch(booleanSearch))
}

const formatBooleanSearch = booleanSearch => {
  return `(${booleanSearch.slice(0, booleanSearch.length - 4)})`
}

createBooleanSearch(companies, "OR")
```

Você não precisa entender tudo que está rolando ali, existem outras N formas de se fazer isso (até mais otimizado), mas executando esse código, ele me retorna a pesquisa booleana formatada da forma como eu preciso. Ou seja, problema resolvido! :)

Se você quiser ver a “mágica” acontecendo, deixei disponível [nesse link](https://repl.it/@kaiofelipejs/booleanSearchBuilder), basta clicar em “Run”.

Esse é um exemplo de uma forma não convencional de resolver um problema que quem trabalha com sourcing já pode ter passado.

## Concluindo

A ideia desse post é provocar, principalmente quem trabalha nesse mundo de Recrutamento, a pensar em soluções diferentes para os problemas do dia a dia. Você pode aplicar isso para outros cenários também, um exemplo (e um apelo) é parar de exigir currículo se a pessoa já tiver um LinkedIn bem preenchido. Você otimiza o tempo da pessoa e melhora a sua produtividade ao analisar uma página que você já sabe onde cada informação fica.

Bom, se esse post fez você refletir, em qualquer grau que seja, para fazer coisas diferentes no seu dia a dia, eu já fico bastante contente :)\
Se tiver algum feedback ou situação para compartilhar, fique a vontade para mandar nos comentários.

Eras isso, até a próxima!

#### Referências

- [BDUF — Podcast Dev na Estrada](https://devnaestrada.com.br/2019/08/02/big-design-up-front-bduf.html)
- [Overengineering — Podcast Hipsters.Tech](https://hipsters.tech/overengineering-hipsters-142/)
