import { acessarMeusRepositorios } from "./api.js";


async function main(){
    const repos = await acessarMeusRepositorios()

    const reposFiltrados = repos.filter(repo => 
    !repo.private &&
    repo.description !== null
    
);

    const projetosContainer = document.querySelector(".glide__slides")
    const bulletsContainer = document.querySelector(".glide__bullets")
    let i = 0
    for (const element of reposFiltrados) { 
        const projetoCard = document.createElement("li")
        const bullet = document.createElement("button")
        bullet.dataset.glideDir = `=${i}`
        i += 1
        bullet.classList.add("glide__bullet")

        console.log(element.name, element.fork)
        projetoCard.classList.add("glide__slide")
        projetoCard.innerHTML = `
                    <div class="card">    
                        <h3> ${element.name} </h3>
                        <div class="tags">
                            <div class="tag">
                                <span>Concluido</span>
                                <div class="bola-pulsante">
                                </div>
                            </div>    
                            <div class="linguagem-tags"> 
                                <div class="linguagem-tag"> 
                                    ${element.language ?? "Sem Linguagem"} 
                                </div>    
                            </div>            
                        </div>
                        
                        <div >
                        </div>
                        <p> ${element.description} </p>
                        <button class="card-button"> <a class="projects-links" href="${element.html_url}">Clique para ver mais</a></button>
                    </div>    
                        `
        projetosContainer.appendChild(projetoCard)
        bulletsContainer.appendChild(bullet)
        
    };
    i = 0
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        gap: 300,
        autoplay: 3000,

        peek: {
            before: 100,
            after: 100
        },

        breakpoints: {
            1200: {
                perView: 2,
                gap: 30,
                peek: {
                    before: 50,
                    after: 50
                }
            },

            768: {
                perView: 1,
                gap: 20,
                peek: {
                    before: 30,
                    after: 30
                }
            }
        }
    }).mount()
}
main()