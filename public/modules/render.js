import { acessarMeusRepositorios } from "./api.js";


async function main(){
    const repos = await acessarMeusRepositorios()
    
    const reposFiltrados = repos.filter(repo => 
    !repo.fork &&
    !repo.private &&
    repo.description !== null
);
    const projetosContainer = document.querySelector(".projetos-container")
    console.log("* to aqui!!")
    
    reposFiltrados.forEach(element => {
        const projetoCard = document.createElement("div")
        projetoCard.setAttribute("href", element.html_url)
        console.log(element.name, element.fork)
        projetoCard.classList.add("card")
        projetoCard.addEventListener("click", () => {
            window.open(element.html_url, "_blank");
        });
        projetoCard.innerHTML = `
                        <h3> ${element.name} </h3>
                        <p> ${element.description} </p>`
        projetosContainer.appendChild(projetoCard)
    });

    // Carousel functionality
    const container = document.querySelector('.projetos-container');
    const cards = document.querySelectorAll('.card');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    
    // Start centering on the second card (index 1), but no active class until button click
    let currentIndex = Math.min(1, cards.length - 1);
    
    function scrollToCurrent(smooth = true, activate = false) {
        const target = cards[currentIndex];
        if (!target) return 2;

        target.scrollIntoView({
            behavior: smooth ? 'smooth' : 'auto',
            inline: 'center',
            block: 'nearest'
        });

        if (activate) {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            cards.forEach((card, idx) => {
                if (!isMobile) {
                    card.classList.toggle('active', idx === currentIndex);
                }
            });
        }
    }

    function updateButtons() {
        leftBtn.disabled = currentIndex <= 0;
        rightBtn.disabled = currentIndex >= cards.length - 1;
    }

    rightBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            scrollToCurrent(true, true);
            updateButtons();
        }
    });

    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            scrollToCurrent(true, true);
            updateButtons();
        }
    });

    // Initial setup: mantenha o visual sem nenhum card ativo e sem scroll automático
    updateButtons();
}
main()