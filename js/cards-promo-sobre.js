const cardPromo1 = () => {
    const btnSobre_1 = document.querySelectorAll(".js-card-btn-sobre-1");
    const sobreConteudo_1 = document.querySelectorAll(".js-sobre-conteudo-1");
    sobreConteudo_1[0].classList.add("ativo");

    console.log(btnSobre_1)
    console.log(sobreConteudo_1)
    
    function ativandoConteudo(index) {
    
        sobreConteudo_1.forEach((conteudo) => {
            conteudo.classList.remove("ativo")
        });
    
        sobreConteudo_1[index].classList.add("ativo");
    };
    
    btnSobre_1.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
            ativandoConteudo(index);
        });
    });
}

const cardPromo2 = () => {
    const btnSobre_2 = document.querySelectorAll(".js-card-btn-sobre-2");
    const sobreConteudo_2 = document.querySelectorAll(".js-sobre-conteudo-2");
    sobreConteudo_2[0].classList.add("ativo");
    
    function ativandoConteudo(index) {
    
        sobreConteudo_2.forEach((conteudo) => {
            conteudo.classList.remove("ativo")
        });
    
        sobreConteudo_2[index].classList.add("ativo");
    };
    
    btnSobre_2.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
            ativandoConteudo(index);
        });
    });
}


cardPromo1();
cardPromo2();