function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")
   
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada //
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nada Foi Encontrado </p>" 
        return  
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa)

// Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ";"
    
    // Itera sobre cada objeto de dado na lista
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        // se titulo includes campoPesquisa //
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            
            //cria um novo elemento//
            resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a> 
                </h2>
                <p class="descriçao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
        `;
        }
        
    }
   
   if (!resultados) {
        resultados= "<p> Não foi encontrado nada relacionado !!</p>"

   }
   
    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
} 
