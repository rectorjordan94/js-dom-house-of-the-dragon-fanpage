const rhaenyraCard = document.getElementById('rhaenyraCard')
const rhaenyraBioButton = document.getElementById('rhaenyra-bio-button')
const rhaenyraAOD = document.getElementById('rhaenyraAOD')
const rhaenyraStatusButton = document.getElementById('rhaenyra-status-button')

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

rhaenyraStatusButton.addEventListener('click', displayRhaenyraStatus, {once: true})