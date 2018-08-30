var btAdicionar = document.getElementById("btAdicionar");
var btAdicionarFim = document.getElementById("btAdicionarFim");
var inNome = document.getElementById("inNome");
var outLista = document.getElementById("outLista");
var btExcluir = document.getElementById("btExcluir");
var btExcluirU = document.getElementById("btExcluirU");
var btPesquisar = document.getElementById("btPesquisar");

// instancia um objeto da classe ListaLigada() que contem a estrutura de dados de listas 
//ligadas / encadeadas dinamicamente
var lista = new ListaDuplamenteLigada();

// Método para dicionar aluno
function adicionarAluno() {
    var nome = inNome.value;

    if (nome == "") {
        alert("Informe o nome do Aluno");
        inNome.focus();
        return;
    }

    // insere novo elemento
    lista.append(nome);

    // Reseta os valores dos campos html
    inNome.value = "";
    inNome.focus();

    // printa na tela
    outLista.textContent = lista.display();
}
btAdicionar.addEventListener("click", adicionarAluno);

//-------------------------------------------------------------------------

// Método para dicionar aluno no fim
function adicionarAlunoFim() {
    var nome = inNome.value;

    if (nome == "") {
        alert("Informe o nome do Aluno");
        inNome.focus();
        return;
    }

    // insere novo elemento
    lista.appendFinal(nome);

    // Reseta os valores dos campos html
    inNome.value = "";
    inNome.focus();

    // printa na tela
    outLista.textContent = lista.display();
}
btAdicionarFim.addEventListener("click", adicionarAlunoFim);

//---------------------------------------------------------------------------------------

//Funcao para exclusao do primeiro elemento da lista
function excluirAluno() {

    if (lista.remove()) {
        outLista.textContent = lista.display();
    } else {
        alert("Não há alunos na lista!");
    }
}
btExcluir.addEventListener("click", excluirAluno);

//----------------------------------------------------------------

// Funcao para exclusao do ultimo elemento da fila
function excluirAlunoU() {
    
    if (lista.removeU()) {
        outLista.textContent = lista.display();
    } else {
        alert("Não há alunos na lista!");
    }
}
btExcluirU.addEventListener("click", excluirAlunoU);

//------------------------------------------------------------------------

//Funcao para pesquisa de elementos da lista
function pesquisarAluno() {
    var nome = inNome.value;

    if (nome == "") {
        alert("Informe o nome do Aluno");
        inNome.focus();
        return;
    }

    var posicao = lista.search(nome);
    if (posicao == 0){
        alert("Aluno não encontrado");
    } else {
        alert("Encontrado na posição: " + posicao);
    }

    inNome.focus();
    inNome.value = "";

}
btPesquisar.addEventListener("click", pesquisarAluno); 