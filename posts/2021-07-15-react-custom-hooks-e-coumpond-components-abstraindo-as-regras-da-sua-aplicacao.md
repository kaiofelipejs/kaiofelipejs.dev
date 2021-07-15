---
title: "React custom hooks e coumpond components: abstraindo as regras da sua
  aplicação"
description: Como podemos isolar algumas regras e compartilhar entre diferentes
  componentes sem precisar duplicar código.
date: 2021-07-15 09:43:34
image: /assets/img/og-image.jpg
category: frontend
background: "#AB660D"
---
Apesar dos nomes bonitos que está no título, o que quero falar hoje é sobre algo comum em aplicações do nosso dia a dia: mesmas regras que se aplicam para diferentes cenários sem precisar duplicar código por toda parte. Falando de frontend e mais especificamente React, uma solução para isso (que é o que vou trazer hoje) é usar uma combinação de custom hooks com coumpond components. Caso você não esteja por dentro do que são esses dois temas, vou introduzí-los rapidamente: 

## Custom Hooks

Acredito que você já esteja familiarizado com o conceito de Hooks no React, tais como: `useState`, `useEffect`, `useCallback` e outros. Um Custom Hook, nada mais é que a extração de uma lógica para poder compartilhar em diferentes lugares da aplicação. Antes dos Hooks, você tinha apenas duas formas compartilhar lógica entre componentes: `props` e High Order Components (HOC). Os Hooks e Custom Hooks é mais uma forma de fazer isso e de uma forma mais elegante em alguns casos.

Se quiser se aprofundar mais nesse tema, eu sugiro fortemente leia a [documentação do React sobre](https://pt-br.reactjs.org/docs/hooks-custom.html). Ela é bastante completa, com perguntas comuns respondidas, exemplos reais e boas práticas.

> Mais a frente vamos criar o nosso custom hook, segura aí :)

## Coumpond Components




Introduzir o cenário 

Mostrar uma solução "feia"

Falar sobre DRY

Mostrar uma solução mais escalável