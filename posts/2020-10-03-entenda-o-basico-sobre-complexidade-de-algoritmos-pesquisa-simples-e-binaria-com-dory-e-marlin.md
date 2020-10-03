---
title: Entenda o básico sobre complexidade de algoritmos, pesquisa simples e
  binária com Dory e Marlin
description: Complexidade algorítmica, pesquisa simples e binária podem ser
  temas complexos. Nesse post, vamos entender o básico disso com a Dory e o
  Marlin!
date: 2020-02-28 01:39:15
image: /assets/img/dory-marlin.png
category: dev
background: "#637a91"
---


Recentemente na RD, empresa onde trabalho atualmente, apresentei uma talk para o nosso time de gestão de talentos sobre o que avaliamos no processo seletivo de pessoas desenvolvedoras de software. Eu aprendi tanto nesse período de preparo do conteúdo que resolvi escrever esse post sobre um dos temas que achei bastante interessante.

De antemão, quero deixar claro que *não* sou nenhum expert no assunto que vamos abordar aqui. A ideia é compartilhar o que aprendi (e achei valioso) com outras pessoas e de alguma forma contribuir no dia a dia de alguém.

Já quero deixar aqui um gigantesco agradecimento para o [Felipe Constantino](https://medium.com/u/ed204a87f617?source=post_page-----1d937f25e63a--------------------------------) que ajudou demais no meu entendimento sobre o tema e na construção desse post. Thanks, Consta! 💙

A ideia da talk não era simplesmente apresentar que aplicamos algoritmos usando uma ferramenta online, mas entrar nos principais pontos da avaliação de algoritmos que fazemos durante o processo seletivo, que são: **complexidade, performance e legibilidade.** Aqui são esses pontos que importam e não estamos interessados na tecnologia que a pessoa vai usar para resolver o problema.

Nesse processo de conhecer melhor esses 3 principais pontos, principalmente complexidade e performance, fui entender o famoso **Big O Notation** (ou Notação Grande-O, em português). Não vou entrar em detalhes aqui sobre o que ele é (até porque isso pode dar outro post), mas resumidamente a ideia do Big O Notation é descrever o comportamento geral — também chamado de assintótico — do algoritmo em termos de crescimento do número de operações conforme cresce o número de elementos processados. Vamos falar sobre ele mais a frente. Segue o baile…

Para exemplificar esse tema (que pode ser um tanto complexo), antes vamos precisar falar sobre pesquisa simples e pesquisa binária.

## Uma palhinha rápida sobre pesquisa simples e pesquisa binária

Vamos supor que você esteja procurando o nome de uma pessoa numa agenda telefônica (sim, eu sei que isso nem existe mais, mas é só um exemplo) e que ela esteja ordenada. O nome que você procura começa com a letra *K*. Você pode começar na primeira página e ir folheando até chegar aos *Ks*. Dessa forma, você estaria realizando uma **pesquisa simples**, eliminando uma alternativa a cada tentativa de encontrar o nome.

Agora, imaginando o mesmo caso, só que ao invés de você começar a busca pela primeira página, você começa a partir do meio, porque sabe que os nomes com a letra *K* estarão mais perto dali. Partindo do meio da agenda, você pode saber se passou, acertou ou ainda não chegou no *K,* certo?! Então, se você passou do *K*, basta olhar do meio da agenda para trás e se ainda não chegou nele, olhar para frente. Neste cenário, você estaria aplicando uma **pesquisa binária**.

> ...

Eu sei que esses exemplos foram rasos e talvez ainda não ficou claro onde o Big O entra nisso tudo e como que a pesquisa simples e binária trabalha. Então agora que entra a Dory e o Marlin para nos ajudar *(eu gosto muito de Procurando Nemo).*

Para quem já assistiu esse filme, sabe que em determinado momento Dory e Marlin encontram a viseira do nadador que levou Nemo para o barco e sabe também que a Dory sofre de perda de memória recente — não to “enchendo linguiça”, isso vai fazer sentido, eu juro). Nessa viseira há o endereço do local para onde eles levaram Nemo. O endereço é *“P. Sherman, 42, Wallaby Way, Sydney”*.

Pois bem, para o nosso exemplo fazer sentido, vamos imaginar que por algum motivo Marlin decide fazer uma brincadeira com Dory para ela acertar o número do endereço (já que ela vive esquecendo as coisas).\
Marlin avisa para Dory que o número do endereço está entre 1 e 100 e a ideia é chegar nele com o menor número de tentativas possível. A cada tentativa, Marlin diz se foi muito alto ou muito baixo.

![Dory e Marlin](/assets/img/dory-marlin.png "Dory e Marlin")

Dory, então, começa a chutar partindo do primeiro número. Ela erra. Chuta o segundo, erra novamente. Tenta o terceiro e… errou de novo. Nós ficaríamos nessa tentativa e erro até ela chegar no número esperado que é 42. Ou seja, 42 etapas foram necessárias para chegar no resultado da busca.\
Isso que a Dory fez até então, foi aplicar a pesquisa simples para encontrar o resultado esperado.

Dory viu que **isso não era nada otimizado e seria muito custoso***.* Agora ela vai resolver o mesmo problema, só que aplicando a pesquisa binária. Vamos lá!

![Dory diz "50" e Marlin diz "muito alto"](/assets/img/dory-marlin-try-1.png "Dory diz \"50\" e Marlin diz \"muito alto\"")

Agora o primeiro número que a Dory chuta é 50. Esse ainda não é o número ideal, mas ela acabou de eliminar **metade** das alternativas possíveis.

![Dory diz "25"e Marlin diz "muito baixo"](/assets/img/dory-marlin-try-2.png "Dory diz \"25\"e Marlin diz \"muito baixo\"")

Como segunda tentativa, Dory chuta o número 25. É um número ainda baixo, mas novamente ela consegue cortar a metade dos números que restaram da primeira tentativa. Ou seja, **com a pesquisa binária ela chuta o número médio e elimina metade dos que restaram.** Próximo é o 37.

37 ainda não é o nosso número. Seguindo a lógica, ela chuta o 43. Está quase lá, mas ainda não é. Agora ela chuta o 40 e foi baixo novamente. E por fim, ela chuta o 42 e chega no número que completa o endereço! 🎉

> ## Com a pesquisa binária, em apenas 6 etapas (leia-se operações) nós chegamos no mesmo resultado que com a pesquisa simples seria necessário 42 — uma grande diferença!

Agora imagine que a lista de Marlin não tenha apenas 100 números, mas sim 1.000.000.000 e que o número desejado seja o último dessa lista. Vamos assumir que leve 1 milissegundo para processar um elemento da lista. Com a pesquisa simples, levaríamos até **11 dias (!)** para chegar no resultado desejado. Já com a pesquisa binária, levaria apenas **32 milissegundos!**

Isso acontece porque o tempo de execução de cada uma **cresce em taxas diferentes**. Sendo assim, conforme o número de itens cresce, a pesquisa binária aumenta só um pouco o tempo de execução, já a pesquisa simples leva muito mais tempo. Dessa forma, conforme a lista de números cresce, a pesquisa binária se torna *muito* mais rápida do que a pesquisa simples.

Aqui que entra o Big O Notation. Ele informa o quão rápido é um algoritmo com base no número de operações e não em segundos. Ou seja, informa o quão rapidamente um algoritmo cresce/escala.

No primeiro cenário do nosso exemplo com a Dory (pesquisa simples) nós seguimos um crescimento linear. Ou seja, o número máximo de operações é igual ao tamanho da lista de elementos. Na notação Big O isso é expressado como **O(*n*)** *— leia como Ó de N.*\
Já no segundo cenário (pesquisa binária), temos um crescimento logaritmico, que na notação Big O é expressado assim: **O(log *n*)** *— leia como Ó log de N.*

![Resumo até aqui](/assets/img/resumo.png "Resumo até aqui")

> ...

O que vimos aqui é uma introdução com exemplo didáticos para compreendermos esses importantes temas da ciência da computação. Caso você queira se aprofundar mais, vou deixar algumas referências que me ajudaram nesse processo de estudo:

* Livro [“Entendendo Algoritmos — Um guia ilustrado para programadores e outros curiosos”](https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634) de Aditya Y. Bhargava. *Recomendo muito mesmo!*
* Post no dev.to: [Big-O Notation: Beginners Guide](https://dev.to/charlie117/big-o-notation-beginners-guide-1h38) — *aqui tem alguns exemplos práticos de código.*
* Stackoverflow: [Definição da notação “Big O”](https://pt.stackoverflow.com/questions/56836/defini%C3%A7%C3%A3o-da-nota%C3%A7%C3%A3o-big-o) — *excelente thread com explicações claras e mais links para estudo.*

Como comentei lá no começo, não sou nenhum expert no assunto, mas se você chegou até aqui espero que de alguma forma esse post tenha contríbuido com seu desenvolvimento :)

Até a próxima. Abraço!