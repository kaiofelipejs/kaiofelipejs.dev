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

## Compound Components

De forma resumida, um Coumpond Component é um componente que compartilha uma mesma regra ou estados com seus filhos, mas te dá a flexibilidade de *compor* ele da forma que chamar melhor.

Por exemplo, suponha que você tenha um componente List que tem alguns estilos pré definidos através de uma classe CSS. Num cenário "comum", dentro desse componente estaria declarado diretamente seus filhos, algo como: 

```js
const List = ({ items }) => {
  return (
    <div className="list-wrapper">
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
```

E seu uso seria: 

```js
<List items={['Item 1', 'Item 2', 'Item 3']}/>
```

Mas, e se a gente precisar de uma lista ordenada agora? Teriamos que receber um prop, criar uma validação e então decidir qual renderizar. Vamos pensar um pouco, isso é de responsabilidade do componente ter que lidar com isso, ou de quem está usando esse componente? Me parece ser a segunda opção. 

Com um Compound Component, nós poderiamos resolver dessa forma: 

```js
const List = ({ children }) => {
  return <div className="list-wrapper">{children}</div>
}
```

Agora para usar ele, há diversas formas:

Você pode usar uma lista não ordenada.

```js
<List>
  <ul>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
  </ul>
</List>
```

Pode usar uma lista ordenada.

```js
<List>
  <ol>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
  </ol>
</List>
```

Pode fazer um loop dentro da lista.

```js
<List>
  <ol>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ol>
</List>
```

> Ué, Kaio?! Você apagou quase tudo!

Pois é! Agora, nosso componente List só se importa em aplicar as regras de estilo e o que vai como filho dele, ele apenas renderiza. 

Eu sei que esse é um exemplo simples, mas acho que é suficiente para introduzir o assunto e pensar em outras N possibilidades que temos. Já já veremos um problema mais bacana. 

## Um cenário real

O nosso caso é: o plano da conta do nosso usuário tem acesso a uma lista de funcionalidades. Por conta disso, só podemos exibir a funcionalidade X para ele se ela existir nessa lista. Caso não tenha, ela deve aparecer com o botão de acesso desabilitado, uma mensagem informando que não tem acesso e um [CTA](https://resultadosdigitais.com.br/blog/tudo-sobre-call-to-action/) para adquirir. É a mesma ideia de [feature flag/toggles](https://martinfowler.com/articles/feature-toggles.html).

Uma solução para isso é: 

```js
const MyComponent = () => {
  const availableFeatures = ['feature_one', 'feature_two', 'feature_three']

  return (
    <Grid>
      <Text token={Text.tokens.TEXT_XL_BOLD}>Funcionalidades:</Text>

      <Wrapper>
        <Card>
          <Text>Funcionalidade 1</Text>
          <LinkButton href="https://example.org">Acessar</LinkButton>
        </Card>

        <Card>
          {availableFeatures.includes('unavailable_feature') ? (
            <>
              <Text>Funcionalidade 2</Text>
              <LinkButton href="https://example.org">Acessar</LinkButton>
            </>
          ) : (
            <>
              <Text>Você ainda não tem acesso a Funcionalidade 2</Text>
              <ButtonGroup>
                <LinkButton href="https://example.org" disabled>
                  Acessar
                </LinkButton>

                <LinkButton href="https://www.google.com/">Adquirir</LinkButton>
              </ButtonGroup>
            </>
          )}
        </Card>
      </Wrapper>
    </Grid>
  )
}
```

Vamos por partes:

`availableFeatures`: coloquei estaticamente essa lista, imagine que ela pode vir de qualquer lugar como uma API externa, um contexto, etc...

`Grid` e `Wrapper`: Apenas [styled components](https://styled-components.com/) que criei para deixar o resultado final mais organizado. 

`Text`, `Card` e `LinkButton`: componentes que fazem parte do Tangram (design system da RD Station)

O que temos agora então é uma condição usando [operador ternário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) que valida se a `feature_one` está presente na lista de features disponíveis para esse usuário. 

Como a condição é verdadeira, o resultado final é esse: 

![Um titulo "Funcionalidades" e abaixo dois cards um respectivos titulos "Funcionalidade 1" e "Funcionalidade 2", ambos com botões para acessar](/assets/img/with-access.png "Resultado final do código acima na condição verdadeira.")

E para o cenário onde a feature não está disponível na lista, nós temos o seguinte resultado: 

![Um titulo "Funcionalidades" e abaixo dois cards um respectivos titulos "Funcionalidade 1" e "Você ainda não tem acesso a Funcionalidade 2", ambos com botões para acessar, porém o segundo está desabilitado.](/assets/img/without-access.png "Resultado final do código acima na condição falsa.")

Bom, funcionou como deveria, certo?! Agora, imagine que essa validação acontece em diferentes locais da aplicação, por exemplo, na barra de navegação, dentro de um modal, numa outra listagem qualquer, você teria que repetir essa mesma lógica por todo o produto e isso seria um caos indo contra ao conceito [DRY (Don't Repeat Yourself)](https://pt.wikipedia.org/wiki/Don%27t_repeat_yourself).

Mostrar uma solução mais escalável