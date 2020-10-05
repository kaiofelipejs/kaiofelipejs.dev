---
title: Conhecendo boas práticas do RSpec
description: Porque isso importa e como essas práticas podem ajudar no dia a dia.
date: 2020-10-05 11:05:43
image: /assets/img/praticas-rspec.png
category: backend
background: "#B31917"
---
Recentemente numa tech talk interna da squad conversamos sobre algumas boas práticas de escrita de testes automatizados com RSpec. Nesse post gostaria de levar esse conhecimento para outras pessoas também.

## Porque usar boas práticas importa?

* Documentação: ao escrever testes semânticos, que testam de verdade o comportamento que o usuário tem com o sistema, indiretamente você acaba criando uma documentação do que aquela parte do código faz e fica muito mais fácil de compreender a responsabilidade daquilo.
* Ajuda no debug: muito relacionado com o tópico anterior, ao debuggar nós lemos **muito** código e se eles (tanto o código em si, como o teste) estiverem bem escritos facilitará bastante a busca para achar a causa raiz de um determinado problema.
* Facilita o onboarding de novas pessoas no time: se você usa um padrão que foi definido pela comunidade, não serão apenas as pessoas do seu time que conhecerão a forma ideal de escrever os testes, logo, aquela pessoa que acabou de entrar no time e que também conhece as boas práticas se sente muito mais contextualizada.
* Padroniza a forma de escrever: o que reforça o tópico anterior e também tira subjetividades na hora do code review evitando comentários como "faltou espaços aqui e ali" 🙄
* “Design your code to be easier to understand, not easier to write”: esse é um dos príncipios de engenharia na Resultados Digitais e acho que ele fala por si só.

> ### *Bora pro código!*

#### 1# described_class

Refira-se a classe testada como \`described_class\` e não chamando-a diretamente, assim se alterar o nome da classe, não altera o spec.

```ruby
#  ❌ 
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

#### 2# contexts

Organiza e separa seus testes de acordo com o cenário/contexto. Para saber quando usar pense que haverá pelo menos 2 cenários (positivo e negativo). No exemplo abaixo existe o cenário de *logado* e *não logado*.

```ruby
#  ❌ 
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

#### 3# describe

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

Para o método \`admin?\` os specs ficariam: 

```ruby
#  ❌ 
describe 'if the user is an admin ' do
  #...
end

# ✅
describe '#admin?' do
  #...
end
```

E para o método estático \`authenticate\`:

```ruby
#  ❌ 
describe 'the authenticate method for User' do
  #...
end

# ✅
describe '.authenticate' do
  #...
end
```

4#