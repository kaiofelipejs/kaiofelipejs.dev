---
title: "React Custom Hooks e Compound Components: abstraindo as regras da sua
  aplicação"
description: Como podemos isolar algumas regras e compartilhar entre diferentes
  componentes sem precisar duplicar código.
date: 2021-07-15 09:43:34
image: /assets/img/og-image.jpg
category: frontend
background: "#AB660D"
---
Apesar dos nomes bonitos que estão no título, o que quero falar (na real, escrever) hoje é sobre algo comum em aplicações do nosso dia a dia: mesmas regras que se aplicam para diferentes cenários sem precisar duplicar código por toda parte.

Falando de frontend e mais especificamente React, uma solução para isso (que é o que vou trazer hoje) é usar uma combinação de custom hooks com compound components. Caso você não esteja por dentro do que são esses dois temas, vou introduzí-los rapidamente: 

## Custom Hooks

Acredito que você já esteja familiarizado com o conceito de Hooks no React, tais como: `useState`, `useEffect`, `useCallback` e outros. Um Custom Hook, nada mais é que a extração de uma lógica para poder compartilhar em diferentes lugares da aplicação. Antes dos Hooks, você tinha apenas duas formas compartilhar lógica entre componentes: *props* e High Order Components (HOC). Agora temos mais uma forma de fazer isso e que pode ser mais elegante em alguns casos.

Se quiser se aprofundar nesse tema, eu sugiro fortemente a leitura da [documentação do React](https://pt-br.reactjs.org/docs/hooks-custom.html). Ela é bastante completa, com perguntas comuns respondidas, exemplos reais e boas práticas.

> Mais a frente vamos criar o nosso próprio custom hook, segura aí :)

## Compound Components

De forma resumida, um compound component é um componente que compartilha uma mesma regra ou estados com seus filhos, mas te dá a flexibilidade de *compor* ele da forma que chamar melhor.

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
<List items={['Item 1', 'Item 2', 'Item 3']} />
```

Mas, e se a gente precisar de uma lista ordenada agora? Teriamos que receber um prop, criar uma validação e então decidir qual renderizar. Vamos pensar um pouco, isso é de responsabilidade do componente List ou de quem está usando esse componente? Me parece ser a segunda opção. 

Com um compound component, nós poderiamos resolver dessa forma: 

```js
const List = ({ children }) => {
  return <div className="list-wrapper">{children}</div>
}
```

> Ué, Kaio?! Você apagou quase tudo!

Pois é! Agora, nosso componente List só se importa em aplicar as regras de estilo e o que vai como filhos dele, ele apenas renderiza. 

E para usá-lo há diversas formas:

Com uma lista não ordenada:

```js
<List>
  <ul>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
  </ul>
</List>
```

Com uma lista ordenada:

```js
<List>
  <ol>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
  </ol>
</List>
```

Pode fazer um loop dentro da lista: 

```js
<List>
  <ol>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ol>
</List>
```

E várias outras coisas. 

Eu sei que esse é um exemplo simples, mas acho que é suficiente para *introduzir* o assunto e pensar em outras N possibilidades que temos. Vamos pular para um cenário real e escrever mais códigos.

## Aplicando num cenário real

O nosso caso é: o plano da conta do nosso usuário tem acesso a uma lista de funcionalidades. Por conta disso, só podemos exibir a funcionalidade X para ele se ela existir nessa lista. Caso não tenha, o botão de acesso deve estar desabilitado, deve haver uma mensagem informando que não tem acesso e deve existir um [CTA](https://resultadosdigitais.com.br/blog/tudo-sobre-call-to-action/) para que ele adquira a funcionalidade. É a mesma ideia de [feature flag/toggles](https://martinfowler.com/articles/feature-toggles.html).

### Solução *feia* e repetitiva

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
          {availableFeatures.includes('feature_two') ? (
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

`Text`, `Card`, `ButtonGroup` e `LinkButton`: componentes que fazem parte do Tangram (design system da RD Station)

O que temos agora então é uma condição usando [operador ternário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) que valida se a `feature_two` está presente na lista de features disponíveis para esse usuário. 

Como a condição é verdadeira, o resultado final é esse: 

![Um titulo "Funcionalidades" e abaixo dois cards um respectivos titulos "Funcionalidade 1" e "Funcionalidade 2", ambos com botões para acessar](/assets/img/with-access.png "Resultado final do código acima na condição verdadeira.")

E para o cenário onde a feature não está disponível na lista, nós temos o seguinte resultado: 

![Um titulo "Funcionalidades" e abaixo dois cards um respectivos titulos "Funcionalidade 1" e "Você ainda não tem acesso a Funcionalidade 2", ambos com botões para acessar, porém o segundo está desabilitado.](/assets/img/without-access.png "Resultado final do código acima na condição falsa.")

Bom, funcionou como deveria, certo?! Agora, imagine que essa validação acontece em diferentes locais da aplicação, por exemplo, na barra de navegação, dentro de um modal, numa outra listagem qualquer, você teria que repetir essa mesma lógica por todo o produto e isso seria um caos indo contra ao conceito [DRY (Don't Repeat Yourself)](https://pt.wikipedia.org/wiki/Don%27t_repeat_yourself).

### Solução *elegante* e escalável

Agora que entra em ação os temas que falamos lá no começo: Custom Hooks e Compound Components. 

Vamos começar pelo hook: 

```js
export const useAccountFeatures = () => {
  const availableFeatures = ['feature_one', 'feature_two', 'feature_three']

  const hasAccess = feature => availableFeatures.includes(feature)

  const HaveAccess = ({ children, feature }) => {
    return hasAccess(feature) ? children : null
  }

  const DontHaveAccess = ({ children, feature }) => {
    return !hasAccess(feature) ? children : null
  }

  return { HaveAccess, DontHaveAccess }
}
```

> Novamente, lembre que o `availableFeatures` poderia vir de qualquer outro lugar, apenas no exemplo ele é estático.

Basicamente, nosso custom hook retorna dois compound components que tem a regra de validação se tem acesso ou não a funcionalidade e, por sua vez, esses componentes no cenário verdadeiro da validação retornam os seus filhos (`children`) e no cenário falso retorna \`null\`. Vamos ver como usá-lo refatorando o nosso `MyComponent`:

```js
const MyComponent = () => {
  const { HaveAccess, DontHaveAccess } = useAccountFeatures()

  return (
    <Grid>
      <Text token={Text.tokens.TEXT_XL_BOLD}>Funcionalidades: </Text>

      <Wrapper>
        <Card>
          <Text>Funcionalidade 1</Text>
          <LinkButton href="https://example.org">Acessar</LinkButton>
        </Card>

        <HaveAccess feature="feature_two">
          <Card>
            <Text>Funcionalidade 2</Text>
            <LinkButton href="https://example.org">Acessar</LinkButton>
          </Card>
        </HaveAccess>

        <DontHaveAccess feature="feature_two">
          <Card>
            <Text>Você ainda não tem acesso a Funcionalidade 2</Text>
            <ButtonGroup>
              <LinkButton href="https://example.org" disabled>
                Acessar
              </LinkButton>

              <LinkButton href="https://www.google.com/">Adquirir</LinkButton>
            </ButtonGroup>
          </Card>
        </DontHaveAccess>
      </Wrapper>
    </Grid>
  )
}
```

Repare que agora nosso componente não sabe quais são as funcionalidades disponíveis, não é mais o papel dele ter que buscar aquela lista `availableFeatures`. Agora ele tem a chamada para o nosso custom hook `useAccountFeatures` e, desestruturando-o, ele tem acesso aos dois compound components retornados por ele. 

Ao invés de toda a lógica de validação ficar dentro do `MyComponent`, ele agora só precisa informar via props qual funcionalidade está sendo validada e isso é abstraído completamente pelos componentes `HaveAccess` e `DontHaveAccess` ✨️

E o resultado final na tela é o mesmo do anterior:

Com acesso

![Um titulo "Funcionalidades" e abaixo dois cards um respectivos titulos "Funcionalidade 1" e "Funcionalidade 2", ambos com botões para acessar](/assets/img/with-access.png "Resultado final do código acima na condição verdadeira.")

Sem acesso

![Um titulo "Funcionalidades" e abaixo dois cards um respectivos titulos "Funcionalidade 1" e "Você ainda não tem acesso a Funcionalidade 2", ambos com botões para acessar, porém o segundo está desabilitado.](/assets/img/without-access.png "Resultado final do código acima na condição falsa.")

Agora qualquer outro lugar da aplicação que precisar validar o acesso a uma funcionalidade X basta seguir o mesmo exemplo e se em algum momento outra validação for necessária é só alterar diretamente o hook `useAccountFeatures` e tudo continuará funcionando :)

Aí alguém pode pensar: *"Mas dessa forma eu tenho que escrever muito mais código 😠️"*

E, sim, é verdade, mas comparado ao ganho que você tem ao desacoplar as regras e poder testá-la unitariamente e aplicá-la em diferentes cenários, escrever mais códigos acaba valendo a pena.

Com certeza, existem várias formas de resolver esse mesmo problema, inclusive não usando custom hooks e nem compound components. Minha ideia era te apresentar esses conceitos e como podemos resolver um problema real com eles.

Espero que você tenha curtido e se tiver algum comentário para fazer, fique a vontade para lançar a braba! 

Até a próxima! 👋🏽