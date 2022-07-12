const countrySymbol = document.querySelector('.country-symbol')
const cryptoRate = document.querySelector('.crypto-rate')
const cryptoDescription = document.querySelector('.crypto-description');

const cryptoData = async () => {
    let req = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    let res = await req.json()
    let container = res.bpi
    console.log(container)
    showBPI(container)
}
cryptoData()

let showBPI = (container) => {
    let usdData = container.USD
    let gbpData = container.GBP
    let eurData = container.EUR
    usdShowData(usdData)
    gbpShowData(gbpData)
    eurShowData(eurData)
}
let usdShowData = (usdData) => {
    const usdBtn = document.querySelector('.usa-country-code')
    usdBtn.addEventListener('click' , () => {
        let countrySymbol = document.querySelector('.country-symbol')
        let cryptoRate = document.querySelector('.crypto-rate')
        let cryptoDescription = document.querySelector('.crypto-description')
        countrySymbol.textContent = '$'
        cryptoRate.textContent = usdData.rate
        cryptoDescription.textContent = usdData.description
    })
}

let gbpShowData = (gbpData) => {
    const gbpBtn = document.querySelector('.gbp-country-code')
    gbpBtn.addEventListener('click' , () => {
        let countrySymbol = document.querySelector('.country-symbol')
        let cryptoRate = document.querySelector('.crypto-rate')
        let cryptoDescription = document.querySelector('.crypto-description')
        countrySymbol.textContent = '£'
        cryptoRate.textContent = gbpData.rate
        cryptoDescription.textContent = gbpData.description
    })
}

let eurShowData = (eurData) => {
    const eurBtn = document.querySelector('.eur-country-code')
    eurBtn.addEventListener('click' , () => {
        let countrySymbol = document.querySelector('.country-symbol')
        let cryptoRate = document.querySelector('.crypto-rate')
        let cryptoDescription = document.querySelector('.crypto-description')
        countrySymbol.textContent = '€'
        cryptoRate.textContent = eurData.rate
        cryptoDescription.textContent = eurData.description
    })
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

let cryptoCurrency = () => {
    let cryptoList = document.querySelector('#crypto-list')
    let buyStocks = document.querySelector('#buy-stocks')
    buyStocks.value = cryptoList.options[cryptoList.selectedIndex].text
}

const sellBtn = document.querySelector('.sellBtn')
const sellStocks = document.querySelector('#sell-stocks')
sellBtn.addEventListener('submit' , (e) => {
    e.preventDefault()
    let sellContainer = document.querySelector('.sell-container')
    let p = document.createElement('p')
    p.textContent = sellStocks.value
    sellContainer.appendChild(p)
})

