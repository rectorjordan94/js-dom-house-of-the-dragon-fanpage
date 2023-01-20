const rhaenyraCard = document.getElementById('rhaenyraCard')
const alicentCard = document.getElementById('alicentCard')
const viserysCard = document.getElementById('viserysCard')
const daemonCard = document.getElementById('daemonCard')
const corlysCard = document.getElementById('corlysCard')
const rhaenysCard = document.getElementById('rhaenysCard')
const rhaenyraBioButton = document.getElementById('rhaenyra-bio-button')
const rhaenyraAOD = document.getElementById('rhaenyraAOD')
const rhaenyraStatusButton = document.getElementById('rhaenyra-status-button')
const searchInput = document.getElementById('search-input')
const bioButtons = document.querySelectorAll('.bio')

const displayRhaenyraBio = () => {
    const bioContainer = document.createElement('div')
    bioContainer.classList.add('bioContainer')
    bioContainer.textContent = 'Queen Rhaenyra Targaryen is the daughter and only surviving child of King Viserys I Targaryen and his first wife, Queen Aemma Arryn. She disputes the claim of her younger half-brother Aegon II, using the style Queen of the Andals and the Rhoynar and the First Men, Lady of the Seven Kingdoms, and Protector of the Realm.'
    rhaenyraCard.appendChild(bioContainer)
}

const displayRhaenyraStatus = () => {
    const status = document.createElement('p')
    status.classList.add('AOD')
    status.textContent = 'alive'
    rhaenyraAOD.appendChild(status)
}

rhaenyraBioButton.addEventListener('click', displayRhaenyraBio , {once: true})

rhaenyraStatusButton.addEventListener('click', displayRhaenyraStatus, { once: true })

searchInput.addEventListener('keydown', (e) => {
    const cards = document.querySelectorAll('.card')
    if (e.code === 'Enter') {
        if (searchInput.value.toLowerCase() == 'rhaenyra') {
            cards.forEach(card => card.classList.add('hidden'))
            rhaenyraCard.classList.remove('hidden')
            rhaenyraCard.style.gridArea = 'alicent'
        } else if (searchInput.value.toLowerCase() == 'alicent') {
            cards.forEach(card => card.classList.add('hidden'))
            alicentCard.classList.remove('hidden')
        } else if (searchInput.value.toLowerCase() == 'viserys') {
            cards.forEach(card => card.classList.add('hidden'))
            viserysCard.classList.remove('hidden')
            viserysCard.style.gridArea = 'alicent'
        } else if (searchInput.value.toLowerCase() == 'daemon') {
            cards.forEach(card => card.classList.add('hidden'))
            daemonCard.classList.remove('hidden')
            daemonCard.style.gridArea = 'alicent'
        } else if (searchInput.value.toLowerCase() == 'corlys') {
            cards.forEach(card => card.classList.add('hidden'))
            corlysCard.classList.remove('hidden')
            corlysCard.style.gridArea = 'alicent'
        } else if (searchInput.value.toLowerCase() == 'rhaenys') {
            cards.forEach(card => card.classList.add('hidden'))
            rhaenysCard.classList.remove('hidden')
            rhaenysCard.style.gridArea = 'alicent'
        }
        // const returnButton = document.createElement('button')
        // corlysCard.appendChild(returnButton)
    }
    // } else if (searchInput.value = '') {
    //     cards.forEach(card => card.classList.remove('hidden'))
    //     rhaenyraCard.style.gridArea = 'rhaenyra'
    //     alicentCard.style.gridArea = 'alicent'
    //     viserysCard.style.gridArea = 'viserys'
    //     daemonCard.style.gridArea = 'daemon'
    //     corlysCard.style.gridArea = 'corlys'
    //     rhaenysCard.style.gridArea = 'rhaenys'
    // }
})