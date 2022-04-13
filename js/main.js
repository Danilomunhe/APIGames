'use strict'

const pesquisarJogo = async (jogo) =>{
    const url =  `https://api.rawg.io/api/games?search=${jogo}&key=e52813d3e6aa4d1e863bb38e4bd57a6d`

    const response = await fetch(url)
    const data = await response.json()
    
    return data.results
}

const gerarPlataformas = (plataforma)=>{
    return " " + plataforma.platform.name
}

const gerarGeneros = (genero)=>{
   
    return " " + genero.name
}
const criarCardjogos = (jogo)=>{

    if (jogo.platforms != null) {
        const cardContent = document.createElement('div')
        cardContent.classList.add('card-content')
        cardContent.innerHTML =
        `   <div class="frente">
                <img src="${jogo.background_image}" alt="Esse Jogo não possui foto">
            </div>
            <div class="atras">
                <h2>${jogo.name}</h2>
            <div class="informacoes">
                <p>Data de Lançamento: ${jogo.released}</p>
                <p>Genêro: ${jogo.genres.map(gerarGeneros)}</p>
                <p>Nota no Metacritic: ${jogo.metacritic}</p>
                <p>Plataformas: ${jogo.platforms.map(gerarPlataformas)}</p>
                <p>Nota do público: ${jogo.rating}</p>
            </div>
            
        </div>
        </div>`
    
        return cardContent
}
}
const carregarJogos = async()=>{
    const container = document.getElementById('container-cards')
    const jogo = document.getElementById('jogo').value
    const jogos = await pesquisarJogo(jogo)

     const gerarJogos = jogos.map(criarCardjogos)

   await container.replaceChildren(...gerarJogos)
}

document.getElementById('pesquisar').addEventListener('click', carregarJogos)

// const pesquisarModalJogo = async(jogo)=>{
//     const url =  `https://api.rawg.io/api/games?search=${jogo}&key=e52813d3e6aa4d1e863bb38e4bd57a6d`

//     const response = await fetch(url)
//     const data = await response.json()
    
//     return data.results
// }
// const carregarModal = (jogo)=>{
//     const modal = document.createElement('div')
//     modal.classList.add('modal-container')
//     modal.innerHTML = `
//     <div class ="modal-content">
//                  <div class="imagens1">
//                     <div class="foto">
//                         <img src="${jogo.background_image}" alt="" id="foto1">
//                     </div>
//                     <div class="foto">
//                         <img src="img/banner.png" alt="" id="foto2">
//                     </div>
//                 </div>
//                 <div class="imagens2">
//                     <div class="foto">
//                         <img src="img/banner.png" alt="" id="foto3">
//                     </div>
//                     <div class="foto">
//                         <img src="img/banner.png" alt="" id="foto4">
//                     </div>
//                 </div>
//             </div>
//     `
// }
// const handleClick = async(evento)=>{
//     const nomeJogo = evento.target.dataset.jogotitle
//     const jogos = pesquisarModalJogo(nomeJogo)
//     carregarModal(jogos)
//     abrirModal()
// }

// const abrirModal =  ()=>{
//     const modal = document.querySelector('modal-container')
//     modal.classList.add('active')
// }

// const fecharModal = ()=>{
//     const modal = document.getElementById('modal')
//     modal.classList.remove('active')
// }

// document.querySelector('.container-cards').addEventListener('click', handleClick)