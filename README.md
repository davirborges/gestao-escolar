# gestao-escolar
### Prova de Lógica de Programação em JavaScript

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
Boa sorte!