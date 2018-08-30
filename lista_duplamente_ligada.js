class Node {
    constructor(nome) {
        this.nome = nome;
        this.prox = null;
        this.ant = null;
    }
}

class ListaDuplamenteLigada {
    constructor() {
        this.tamanho = 0;
        // cab == cabecalho (indica o primeiro elemento)
        this.cab = null;
        this.ultimo = null;
    }


    // insere novo elemento no inicio
    append(nome) {
        // novo obj Node (nome, prox e ant)
        var novo = new Node(nome);

        // verifica se existe algum cadastro
        // caso nao exista atribui o novo a primeiro e ultimo elemento
        if (this.cab == null) {
            this.cab = novo;
            this.ultimo = novo;
        }
        // Se ja existir algum cadastro... 
        else {
            // atual é o ponteiro que aponta para algum lugar
            // nesse caso no primeiro elemento
            var atual = this.cab;

            // indica que o novo elemento é o anterior a este que ERA o primeiro
            atual.ant = novo;
            // indica que o atual é o proximo do novo
            novo.prox = atual;
            // Indica o nome como primeiro da lista
            this.cab = novo;
        }
        this.tamanho++;
    }

    //-----------------------------------------------------------------------------------------------------------

    // insere novo elemento no final da lista
    appendFinal(nome) {
        // novo obj Node (nome, prox e ant)
        var novo = new Node(nome);

        // verifica se há algum elemento na lista
        // Se nao houver coloca o novo como primeiro e ultimo elemento
        if (this.cab == null) {
            this.ultimo = novo;
            this.cab = novo;
        }

        // Se ja existir algum cadastro... 
        else {
            // atual é o ponteiro que aponta para algum lugar
            // nesse caso no primeiro elemento
            var atual = this.cab;

            // enquanto existir um elemento anterior...
            while (atual.prox) {
                atual = atual.prox;
            }

            // apos indicar o ultimo existente
            // indica o novo como ultimo
            atual.prox = novo;
            // indica o ultimo elemento da lista
            this.ultimo = novo;
            // indica o elemento anterior ao último
            novo.ant = atual;
        }
        this.tamanho++;
    }

    //------------------------------------------------------------------------------------------------------------

    // Printa na tela
    display() {
        var lista = "";

        var atual = this.cab;
        var num = 0;

        // enquanto for diferente de null
        while (atual) {
            num++;
            lista = lista + num + ". " + atual.nome + "\n";
            atual = atual.prox;
        }
        return lista;
    }

    // -----------------------------------------------------------------------------------------

    search(pesq) {

        var atual = this.cab;
        var num = 0;

        var posicao = 0;

        // enquanto for diferente de null
        while (atual) {
            num++;
            if (atual.nome.toUpperCase() == pesq.toUpperCase()) {
                posicao = num;
                // se encontrar nao precisa continuar o array
                break;
            }
            atual = atual.prox;
        }
        return posicao;
    }

    //-----------------------------------------------------------------------------------------
    
    // Remove primeiro elemento
    remove() {
        // Se nao existir algum elemento na lista
        if (this.cab == null) {
            return false;
        } else {
            // Se existir a variavel atual sera a primeira
            var atual = this.cab;

            // o cabeçalho sera o proximo elemento
            this.cab = atual.prox;
            this.tamanho--;
            return true;
        }
    }

    //-----------------------------------------------------------------------------------------
    
    // Remove ultimo elemento
    removeU() {
        // Se não houver elementos na lista
        if (this.cab == null) {
            return false;
        }
        // Se houver apenas um elemento
        if (this.tamanho == 1) {
            this.cab = null;
            this.ultimo = null;
            this.tamanho--;
            return true;
        } else {
            // Se houver mais de um elemento
            // atual sera o primeiro elemento
            var atual = this.cab;

            // Percorrera enquanto existir o proximo
            while (atual.prox) {

                // Se o proximo for o ultimo
                if (atual.prox == this.ultimo) {
                    // Entao o atual sera dito como ultimo
                    this.ultimo = atual;
                    // O proximo nao existira
                    atual.prox = null;
                    //Diminui o tamanho da lista
                    this.tamanho--;
                    return true;
                }
                // Atualiza com o proximo elemento caso nao tenha chegado no fim dito no if acima
                atual = atual.prox;
            }
        }
    }
}