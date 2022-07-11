const countrySymbol = document.querySelector('.country-symbol')
const cryptoRate = document.querySelector('.crypto-rate')
const cryptoDescription = document.querySelector('.crypto-description');

let cryptoLink = 'https://api.coindesk.com/v1/bpi/currentprice.json'
fetch(cryptoLink)
.then(res => res.json())
.then(data => data.forEach(data => {showBPI(data)}))

let showBPI = (data) => {
    countrySymbol.textContent = data.symbol
    cryptoRate.textContent = data.rate
    cryptoDescription.textContent = data.description
}

const fundsBtn = document.querySelector('.fundsBtn')
const transferFunds = document.querySelector('#transfer-funds')
fundsBtn.addEventListener('submit' , (e) => {
    e.preventDefault()
    let fundsContainer = document.querySelector('.funds-container')
    let p = document.createElement('p')
    p.textContent = transferFunds.value
    fundsContainer.appendChild(p)
})

const buyBtn = document.querySelector('.buyBtn')
const buyStocks = document.querySelector('#buy-stocks')
buyBtn.addEventListener('submit' , (e) => {
    e.preventDefault()
    let buyContainer = document.querySelector('.buy-container')
    let p = document.createElement('p')
    p.textContent = buyStocks.value
    buyContainer.appendChild(p)
})

const sellBtn = document.querySelector('.sellBtn')
const sellStocks = document.querySelector('#sell-stocks')
sellBtn.addEventListener('submit' , (e) => {
    e.preventDefault()
    let sellContainer = document.querySelector('.sell-container')
    let p = document.createElement('p')
    p.textContent = sellStocks.value
    sellContainer.appendChild(p)
})

