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



