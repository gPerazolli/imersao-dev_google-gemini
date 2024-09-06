const section = document.getElementById("resultados-pesquisa");
const botao = document.getElementById("botao");
const input = document.getElementById("input")

for(let dado of dados){
    section.innerHTML += exibeDados(dado);
};

botao.addEventListener("click", () => {
    const pesquisa = input.value.toLowerCase();

    let resultados = "";

    if(pesquisa == ""){  
        resultados = '<p class="erro">!! Nada Encontrado !!</p>';
        
    }else{
        for(let dado of dados){
            const nome = dado.nome.toLowerCase();
            const classe = dado.classe.toLowerCase();
    
            if(nome.includes(pesquisa) || classe.includes(pesquisa)){
                resultados += exibeDados(dado); 
            };
        };
    };

    if(!resultados){
        resultados = `<p class="erro">Nome <i>${pesquisa}</i>, não foi encontrado</p>`;
    };

    section.innerHTML = resultados;
});

function exibeDados(dado){
    return `
        <div class="container">
            <img src="${dado.imagem}" alt="${dado.nome}">
            <div class="item-resultado">
                <h2 class="titulo">
                    <a href="#">${dado.nome}</a>
                </h2>
                <p class="descricao">${dado.descricao}</p>
                <p class="classe"><b>Classe:</b> ${dado.classe}</p>
                <a class="link" href="${dado.informaçoes}" target="_blank">Saiba Mais</a>
            </div>
        </div>
    `;
};