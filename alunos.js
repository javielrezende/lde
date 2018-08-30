var btAdicionar = document.getElementById("btAdicionar");
var btAdicionarFim = document.getElementById("btAdicionarFim");
var inNome = document.getElementById("inNome");
var outLista = document.getElementById("outLista");
var outLista1 = document.getElementById("outLista1");
var outLista2 = document.getElementById("outLista2");
var btExcluir = document.getElementById("btExcluir");
var btExcluirU = document.getElementById("btExcluirU");
var btME = document.getElementById("btME");
var btMD = document.getElementById("btMD");
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

//--------------------------------------------------------------------

// Método para mostrar da esquerda para a direita
function mostraesquerda() {
    
    // printa na tela da esquerda para a direita
    outLista1.textContent = lista.esquerda();
}
btME.addEventListener("click", mostraesquerda);

//--------------------------------------------------------------------

// Método para mostrar da direita para a esquerda
function mostradireita() {
    
    // printa na tela da esquerda para a direita
    outLista2.textContent = lista.direita();
}
btMD.addEventListener("click", mostradireita);