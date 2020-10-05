---
title: Conhecendo boas práticas do RSpec
description: Porque isso importa e como essas práticas podem ajudar no dia a dia.
date: 2020-10-05 11:05:43
image: /assets/img/praticas-rspec.png
category: backend
background: "#B31917"
---
Recentemente numa tech talk interna da squad conversamos sobre algumas boas práticas de escrita de testes automatizados com RSpec. Nesse post gostaria de levar esse conhecimento para outras pessoas também.

Antes gostaria de fazer dois disclaimers: 

* Não sou especialista em testes e nem em Ruby/RSpec, apenas alguém que estudou algumas coisas e quer compartilhar com outras pessoas. Caso você não concorde com algo aqui, tudo bem! Vou ficar bem contente se você comentar logo abaixo sobre e eu poder aprender com você :)
* Esse conteúdo é um 'compilado' de várias fontes diferentes, vou deixar todas elas (e outras referências) listadas lá no final. 

Disclamer feito, bora lá: 

## Porque usar boas práticas importa?

* Documentação: ao escrever testes semânticos, que testam de verdade o comportamento que o usuário tem com o sistema, indiretamente você acaba criando uma documentação do que aquela parte do código faz e fica muito mais fácil de compreender a responsabilidade daquilo. Eu mesmo, ao pegar um código que nunca vi antes, a primeira coisa é ler os outputs dos testes para tentar entender o que ele faz.
* Ajuda no debug: muito relacionado com o tópico anterior, ao debuggar nós lemos **muito** código e se eles (tanto o código em si, como o teste) estiverem bem escritos facilitará bastante a busca para achar a causa raiz de um determinado problema.
* Facilita o onboarding de novas pessoas no time: se você usa um padrão que foi definido pela comunidade, não serão apenas as pessoas do seu time que conhecerão a forma ideal de escrever os testes, logo, aquela pessoa que acabou de entrar no time e que também conhece as boas práticas se sente muito mais contextualizada.
* Padroniza a forma de escrever: o que reforça o tópico anterior e também tira subjetividades na hora do *code review* evitando comentários como "faltou espaços aqui e ali" 🙄
* “Design your code to be easier to understand, not easier to write”: esse é um dos príncipios de engenharia na Resultados Digitais (empresa que trabalho atualmente) e acho que ele fala por si só.

> #### *Bora pro código!*

### 1# described_class

Refira-se a classe testada como `described_class` e não chamando-a diretamente, assim se alterar o nome da classe, não altera o spec.

```ruby
# ❌ 
RSpec.describe MyClass do
  it 'test something' do 
    # test here...

    MyClass.my_method
  end
end

# ✅
RSpec.describe MyClass do
  it 'test something' do 
    # test here...

    described_class.my_method
  end
end
```

### 2# contexts

Organiza e separa seus testes de acordo com o cenário/contexto. Para saber quando usar pense que haverá pelo menos 2 cenários (positivo e negativo). No exemplo abaixo existe o cenário de *logado* e *não logado*.

```ruby
# ❌ 
it 'has 200 status code if logged in' do
  response.should respond_with 200
end
it 'has 401 status code if not logged in' do
  response.should respond_with 401
end

# ✅
context 'when logged in' do
  it { is_expected.to respond_with 200 }
end
context 'when logged out' do
  it { is_expected.to respond_with 401 }
end
```

Uma dica extra aqui é, após escrever seus specs rode `rspec -f d` e o output deve ter uma leitura fluída, como se fosse uma documentação realmente. Caso não esteja assim, seja legal e reveja a descrição dos seus `contexts` e `its` :)

### 3# describe

Use describes para deixar claro qual método da classe você está testando. Use `.` ou `::` (particularmente, prefiro a primeira opção) para métodos de classe/estáticos e use `#` para métodos de instância. 
Imagine que tenhamos a classe `User` com dois métodos: `admin?` e `authenticate` sendo que o segundo método é estático.

```ruby
class User
  def admin?
    #...
  end
  
  def self.authenticate
    #...
  end
end
```

Para o método `admin?` os specs ficariam: 

```ruby
# ❌ 
describe 'if the user is an admin ' do
  #...
end

# ✅
describe '#admin?' do
  #...
end
```

E para o método estático `authenticate`:

```ruby
# ❌ 
describe 'the authenticate method for User' do
  #...
end

# ✅
describe '.authenticate' do
  #...
end
```

### 4# let

Use o `let` ao invés de usar usar variáveis de instância. O `let` faz cache dos resultados e ele é preguiçoso, ou seja, só vai ser declarado se realmente for chamado. Já as variáveis de instância são declaradas sempre, mesmo que não usadas.

```ruby
# ❌ 
before do 
  @name = 'Marcinho'
end

it 'reverses a name' do 
  expect(reverser.reverse @name).to eq('ohnicraM')
end
  
# ✅
let(:name) { 'Marcinho' }

it 'reverses a name' do 
  expect(reverser.reverse name).to eq('ohnicraM')
end
```

Ainda sobre variáveis `let` é interessante compartilha-lás entre grupos de testes para evitar ter que declarar a mesma coisa duas vezes, por exemplo: 

```ruby
# ❌
context 'when the user has many points' do 
  let(:user) { create(:user, points: 1000) }

  it 'returns ok' do
    # ...
  end
end

context 'when the user has no points' do 
  let(:user) { create(:user, points: 0) }

  it 'does not return ok' do
      # ...
  end
end

# ✅
let(:user) { create(:user, points: points) }

context 'when the user has many points' do 
  let(:points) { 1000 }
  
  it 'returns ok' do
    # ...
  end
end

context 'when the user has no points' do 
  let(:points) { 0 }
  
  it 'does not return ok' do
    # ...
  end
end
```

*Obs: Esse `create` é um método do Factory Bot, vamos falar sobre ele já já.* 

Por fim, você também pode usar o bang (`let!`) para tirar a preguiça dele, ou seja, a variável será declarada assim que o teste for executado. Esse cenário pode ser útil quando você precisa ter garantia que algo foi escrito no banco antes de executar o assert.

### 5# subject

Se você tiver vários testes relacionados ao mesmo assunto, use o `subject` e não se repita várias vezes.

```ruby
# ❌
context 'when payload is nil' do
  it { expect(described_class.create(nil).to be_nil } }
end

context 'when payload is 100' do
  it { expect(described_class.create(100).to eq(100) } }
end

# ✅
subject { described_class.create(payload) }

context 'when payload is nil' do
  let(:payload) { nil }
  
  it { expect(subject).to be_nil }
end

context 'when payload is 100' do
  let(:payload) { 100 }
  
  it { expect(subject).to eq(100) }
end
```

Para ficar mais legal ainda você pode criar *named subjects.* Vamos melhorar um pouquinho esse código acima: 

```ruby
subject(:created_payload) { described_class.create(payload) }

context 'when payload is nil' do
  let(:payload) { nil }
  
  it { expect(created_payload).to be_nil }
end

context 'when payload is 100' do
  let(:payload) { 100 }
  
  it { expect(created_payload).to eq(100) }
end
```

#### 7# shared_examples

Quando você repara que está ficando com muito código duplicado no seu teste, você pode recorrer ao `shared_examples`. Se você tiver um arquivo de teste muito grande, particularmente, te sugiro aplicá-lo dentro de um mesmo contexto para você não se perder com vários exemplos compartilhados no arquivo.

```ruby
describe 'GET .some_route' do
  subject(:action) do
    get :some_route, params: params
  end

  shared_examples 'response success' do
    it 'returns status 200' do
      action

      expect(response.status).to eq 200
    end

    it 'returns response body' do
      action

      expect(JSON.parse(response.body)).to eq expected_json
    end
  end

  context 'when all things works are correctly' do
    let(:params) do
      { 'id' => 1 }
    end

    let(:expected_json) do 
      {
        hello: 'world of 1'
      }
    end

    it_behaves_like 'response success'
  end
end
```

Se ligou que aqui usei várias coisas que ja comentamos aqui antes? 😉

#### 8# FactoryBot

O Factory Bot cria *fixtures* de teste que são objetos de teste falsos que podem ser reutilizados durante o teste. Imagine que em N lugares dos testes da sua aplicação você precisa ter um objeto do usuário. Ao invés de você declarar ele "na mão" em cada lugar desse, você apenas chama a Factory que faz isso pra você. 

```ruby
# ❌
let(:user) do 
  User.create(
    id: 1,
    name: 'Fulano',
    last_name: 'Silva',
    city: 'Florianópolis',
    address: 'Rua Logo Ali, 123',
    active: true
  )
end

# ✅ 
let(:user) { FactoryBot.create :default_user }
```

Caso você precise mudar algum valor que está definido lá na Factory, basta passar junto após chamar a criação: 

```ruby
let(:user) { FactoryBot.create :user, city: 'São Paulo', active: false }
```

### 9# **build_stubbed**

É um método do FactoryBot que não persiste o dado no banco, apenas te dá um objeto do que foi solicitado. Isso traz pequenas melhorias de performance, então, se você tiver uma pipeline de testes muito grande, isso pode te salvar alguns segundos :)

```ruby
# ❌
let(:user) { FactoryBoy.create :default_user }

# ✅ 
let(:user) { FactoryBot.build_stubbed :default_user }
```

### 10# SimpleCov

É um analisador de coverage para Ruby. Acho ele bem interessante porque te mostra exatamente qual parte do código não está coberto e você pode ir lá e consertar isso. Saiba mais sobre ele [aqui](https://github.com/simplecov-ruby/simplecov).

![Report de cobertura de teste do SimpleCov](/assets/img/simple-cov.png "Report de cobertura de teste do SimpleCov")

Bom, eras isso! Não é nada muito complexo, mas com certeza pode te ajudar no dia a dia lidando com Ruby e RSpec. 

Caso tenha encontrado algum erro, [esse blog é open source](https://github.com/kaiofelipejs/kaiofelipejs.dev), basta editar o arquivo de texto desse post lá no github e mandar um PR, simples assim! :)

#### Fontes e referências

* [The RSpec Style Guide](https://rspec.rubystyle.guide/)
* [Better Specs { rspec guidelines with ruby }](http://www.betterspecs.org/br/)
* [RuboCop RSpec - Docs](https://docs.rubocop.org/rubocop-rspec/cops_rspec.html)
* [Escrevendo testes melhores com Rspec - Ruby - Por Heitor Miranda - 30º GURU-CE](https://www.youtube.com/watch?reload=9&v=cHAnlE3kwBM)