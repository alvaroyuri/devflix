var filmes = [["https://i.pinimg.com/originals/61/bc/08/61bc08610beb8befd7c8fb42da180933.jpg"], ["gladiador"]]; //lista de filmes, uma matriz de duas linhas e N colunas


function addfilme() {
   
    var posvet = 0; //percorrer o vetor
    var found = 0; //achou

    /*sempre criar a variavel que recebe o input do valor, dentro da funcao!!! Se caracteriza como uma variavel local */

    var input = document.getElementById("filme").value; //recebe o link do filme
    var nomeinput = document.getElementById("nomefilme").value;

    if (input == "" || nomeinput == "") {
        //checa se os campos estao preenchidos

        console.log("Verifique se os campos estao preenchidos");
        alert("Verifique se os campos estao preenchidos")
    } else {
        while ((found == 0) & (posvet < filmes[0].length)) {
            //verificar se o filme ja esta no catalogo

            if (input == filmes[0][posvet]) {
                found++;
            } else posvet++;
        }

        if (found > 0) {
            console.log("Este item ja esta cadastrado");
            alert("Este item ja esta cadastrado")
        } else {
            filmes[0].push(input); //cadastra o link no vetor 0
            filmes[1].push(nomeinput); //cadastra o nome no vetor 1

            //o trecho comentado abaixo adiciona o filme no html sem utilizar arrays. 
            /*var listaFilmes = document.getElementById("listaFilmes"); //criado, para que a proxima linha nn fique extensa/confusa
            listaFilmes.innerHTML =
                listaFilmes.innerHTML +
                "<a id= " +
                input +
                " href='https://alura.com.br/' target='_blank'> <img src=" +
                input +
                " title=" +
                nomeinput +
                "> </a>";*/
            
            console.table(filmes);
            console.log("Cadastrado com sucesso");
            loadArray(); //chama a funcao que carrega o html com base na array
        }

        document.getElementById("filme").value = ""; //limpa o campo para proxima entrada
        document.getElementById("nomefilme").value = ""; //limpa o campo para proxima entrada
    }
}




function remfilme() {
    var reminput = document.getElementById("filme").value; //dado inserido no html
    var localizar = filmes[0].indexOf(reminput); //procura o index do filme na array

    var remover = document.getElementById(reminput); /*localiza no html*/

    if (localizar == -1) {
        //checa se o filme esta na lista
        console.log("Filme nao cadastrado");
        alert("Filme nao cadastrado")
    } else {
        filmes[0].splice(localizar, 1); //remove da array
        filmes[1].splice(localizar, 1); //remove da array
        remover.parentNode.removeChild(remover); //remove no html
        console.table(filmes);
    }

    document.getElementById("filme").value = ""; //limpa o campo para proxima entrada
    document.getElementById("nomefilme").value = ""; //limpa o campo para proxima entrada
}




function loadArray () {
    
    var listaFilmes = document.getElementById("listaFilmes"); //selecionar a div
    listaFilmes.innerHTML = '' //clear na lista atual

    for (var i=0;i < filmes[0].length;i++) {
    
    listaFilmes.innerHTML =
        listaFilmes.innerHTML +
        "<a id= " +
        filmes[0][i] +
        " href='https://google.com.br/' target='_blank'> <img src=" +
        filmes[0][i] +
        " title=" +
        filmes[1][i] +
        "> </a>";

    }
       
}

/*
/*metodo para criar a lista via console com o filmes.push para adicionar novos dados na array e o doument.write para escrever diretamente na pagina html, e possivel manipular a formatacao com o classe filmes no CSS.

filmes.push(
  "https://i0.wp.com/overinside.com.br/wp-content/uploads/2021/10/residentevilbemvindo_3.jpg?resize=800%2C1000&ssl=1"
);

filmes.push(
  "https://www.centralcomics.com/wp-content/uploads/2022/03/44222668-EFB4-4F3E-A483-21808367EFE3.jpeg"
);

filmes.push(
  "https://i.pinimg.com/originals/61/bc/08/61bc08610beb8befd7c8fb42da180933.jpg"
);



/*lista os filmes na pagina html. interessante observar o funcionamento da aspas ` e " nas linhas abaixo, aspas dentro de aspas, conceito de hierarquia. Manipulacao de array com .length para verificar o tamanho da lista

for (i = 0; i < filmes.length; i++) {
  document.write("<img src=" + filmes[i] + " class='filmes'>");*/
