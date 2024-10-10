/*### Prova de Lógica de Programação em JavaScript

**Instruções:** Crie um programa em JavaScript que atenda aos requisitos descritos abaixo. 
O código deve ser bem organizado, com comentários explicando cada parte.

#### Problema: Sistema de Gestão de Estudantes

Você deve criar um programa para um sistema de gestão de estudantes de uma escola.
 O sistema deve permitir ao usuário gerenciar uma lista de estudantes, incluindo adicionar novos estudantes, 
 remover estudantes e exibir informações sobre eles.

O sistema deve conter as seguintes funcionalidades:

1. **Menu de Opções**: O programa deve exibir um menu com opções para o usuário escolher o que deseja fazer. 
Utilize uma estrutura de repetição para permitir que o usuário continue escolhendo opções até decidir sair.

2. **Adicionar Estudante**: O usuário deve ser capaz de adicionar um novo estudante à lista. 
Cada estudante deve ter um nome, idade e uma lista de notas (por exemplo, `[7.5, 8.0, 6.5]`). 
Utilize uma função para adicionar um novo estudante.

3. **Remover Estudante**: O usuário deve poder remover um estudante da lista pelo nome. 
Utilize uma função para essa operação. Se o estudante não for encontrado, exiba uma mensagem apropriada.

4. **Listar Estudantes**: O usuário deve poder listar todos os estudantes cadastrados, 
xibindo o nome, idade e a média das notas de cada um. 
Utilize uma estrutura de repetição e métodos de array (como `map`, `forEach` ou `filter`) para calcular a média das notas.

5. **Exibir Detalhes de um Estudante**: 
O usuário deve poder digitar o nome de um estudante para exibir suas informações detalhadas (nome, idade e notas).
 Utilize uma estrutura de decisão (como `if...else` ou `switch`) para verificar se o estudante existe na lista. 
 Se o estudante não for encontrado, exiba uma mensagem apropriada.

6. **Calcular Média Geral da Turma**:
 O sistema deve ser capaz de calcular e exibir a média geral da turma com base nas médias individuais de cada estudante. 
 Use métodos de array como `reduce` para realizar o cálculo.

7. **Sair do Programa**: O usuário deve poder escolher sair do programa, encerrando o loop de repetição.

---

### Exemplo de Output Esperado:

```plaintext
Bem-vindo ao Sistema de Gestão de Estudantes!

Escolha uma opção:
1. Adicionar Estudante
2. Remover Estudante
3. Listar Estudantes
4. Exibir Detalhes de um Estudante
5. Calcular Média Geral da Turma
6. Sair

Digite sua escolha:
```

### Considerações:
Certifique-se de que o código esteja devidamente indentado.
Utilize comentários para explicar o que cada parte do código faz.
Demonstre o uso de estruturas de decisão, de repetição, funções e métodos de arrays.
Certifique-se de que o programa lida com entradas inválidas de maneira apropriada.
Boa sorte!*/
const prompt = require('prompt-sync')();


function Estudante(nome, sobrenome, idade, listaDeNotas, genero, matricula) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.listaDeNotas = listaDeNotas
    this.genero = genero
    this.matricula = matricula
    this.descreverDetalhesDoAluno = function () {
        return `O Aluno ${this.nome} ${this.sobrenome}, de gênero ${this.genero}, tem ${this.idade} anos, suas notas são ${this.listaDeNotas}, sua matrícula é ${this.matricula} e sua média é ${this.calcularMedia()}.`;
    }

    this.calcularMedia = function () {
        const soma = this.listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);
        return (soma / this.listaDeNotas.length);
    }

}

//Nessa parte criei uma função constructor para o objeto Estudante

const estudantes = [];

//Nessa parte criei um objeto constante que irá reunir todos os Estudantes

function criarNovoEstudante() {
    let nomeNovoEstudantePrompt = prompt("Insira o nome do novo Estudante");
    let sobrenomeNovoEstudantePrompt = prompt("Insira o sobrenome do novo Estudante");
    let idadeNovoEstudantePrompt = parseInt(prompt("Insira a idade do novo Estudante"));
    let listaDeNotasNovoEstudantePrompt = prompt("Insira as notas do novo Estudante separado por vírgula")
        .split(",")
        .map(nota => parseFloat(nota.trim()));;
    let generoNovoEstudante = prompt("Insira o Gênero do novo estudante");
    let matriculaNovoEstudantePrompt = prompt("Insira a matrícula do Estudante");

    return new Estudante(nomeNovoEstudantePrompt, sobrenomeNovoEstudantePrompt, idadeNovoEstudantePrompt, listaDeNotasNovoEstudantePrompt, generoNovoEstudante, matriculaNovoEstudantePrompt);
}
//Acima eu criei uma pergunta para colher os dados do usuário via Prompt e criar um novo estudante
function inserirNovoEstudante() {
    let pergunta;

    do {
        estudantes.push(criarNovoEstudante());
        pergunta = prompt("Você quer adicionar outro Estudante? Se não digite 0");
    } while (pergunta != "0");

}

//Aqui eu criei uma estrutura de repetição para adicionar o estudante novo na lista de estudantes, além disso o usuário pode adicionar quantas vezes quiser


//Aqui eu criei uma função para exibir a lista completa de Estudantes e os detalhes, iterando sobre as propriedades do objeto

function removerEstudante() {
    let matriculaDoEstudanteRemovido = '';
    do {
        matriculaDoEstudanteRemovido = prompt('Digite a matrícula do estudante que você quer remover, Caso queira voltar ao menu digite 0');
        const index = estudantes.findIndex(estudante => estudante.matricula == matriculaDoEstudanteRemovido)
        if (index != -1) {
            estudantes.splice(index, 1);
            console.log(`O estudante com a matrícula ${matriculaDoEstudanteRemovido} foi removido com sucesso!`)
        } else {
            console.log('O estudante não foi encontrado, por favor digite novamente');
        }
    } while (matriculaDoEstudanteRemovido != 0);
    return;

}

function listarEstudantes() {
    estudantes.forEach(Estudante => console.log(Estudante.descreverDetalhesDoAluno()));
}
function exibirDetalhesEstudante() {
    let matriculaDoEstudanteDetalhado = prompt('Digite a matrícula do estudante que você deseja saber os detalhes,  Caso queira voltar ao menu digite 0');
    do {
        console.log(matriculaDoEstudanteDetalhado);
        const index = estudantes.findIndex(estudante => estudante.matricula == matriculaDoEstudanteDetalhado);
        if (index != -1) {
            console.log(estudantes[index].descreverDetalhesDoAluno());
            break;
        }
        else {
            console.log('O estudante não foi encontrado, por favor digite novamente')
            break;
        }
    } while (matriculaDoEstudanteDetalhado != '0');
    return;
}


function calcularMediaGeral() {
    const somaDasMedias = estudantes.reduce((acumulador, estudante) => acumulador + estudante.calcularMedia(), 0);
    const mediaGeral = somaDasMedias / estudantes.length;
    console.log(`A média geral dos estudantes é: ${mediaGeral}`);

}

function iniciarMenu() {
    let perguntaInicial = '';
    do {
        console.log('\nEscolha uma opção: \n1. Adicionar Estudante \n2. Remover Estudante \n3. Listar Estudantes \n4. Exibir Detalhes de um Estudante \n5. Calcular Média Geral da Turma \n6. Sair')
        perguntaInicial = prompt('Digite sua escolha:')
        switch (perguntaInicial) {
            case '1':
            inserirNovoEstudante()
                break;
            case '2':
            removerEstudante()
                break;
            case '3':
            listarEstudantes()
                break;
            case '4':
            exibirDetalhesEstudante()
                break;
            case '5':
            calcularMediaGeral()
                break;

            default: 
            console.log('Desculpe, essa opção é inválida') 
                break;
        }
    } while (perguntaInicial != '6');
}

iniciarMenu();



