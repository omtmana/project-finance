const countrySymbol = document.querySelector('.country-symbol')
const cryptoRate = document.querySelector('.crypto-rate')
const cryptoDescription = document.querySelector('.crypto-description');
let currentAmount;
let total;
let fundsAvailable;

// function to fetch json file
const cryptoData = async () => {
    let req = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    let res = await req.json()
    let container = res.bpi
    console.log(container)
    showBPI(container)
}
cryptoData()

// function to individual arrays in json file 
let showBPI = (container) => {
    let usdData = container.USD
    let gbpData = container.GBP
    let eurData = container.EUR
    usdShowData(usdData)
    gbpShowData(gbpData)
    eurShowData(eurData)
}

// function to show USD data on page 
// function to be able to buy USD crypto
let usdShowData = (usdData) => {
    const usdBtn = document.querySelector('.usa-country-code')
    usdBtn.addEventListener('click' , () => {
        let countrySymbol = document.querySelector('.country-symbol')
        let cryptoRate = document.querySelector('.crypto-rate')
        let cryptoDescription = document.querySelector('.crypto-description')
        countrySymbol.textContent = '$'
        cryptoRate.textContent = usdData.rate
        currentAmount = usdData.rate;
        cryptoDescription.textContent = usdData.description
        // let buyBtn = document.querySelector('#buy-btn')
        // buyBtn.addEventListener = ('submit' , (e) => {
        //     e.preventDefault()
        //     let buyStocks = document.querySelector('#buy-stocks').value
        //     let totalBuy = buyStocks * cryptoRate
        //     console.log(cryptoRate)
            // console.log(totalBuy)
            // let fundsContainer = document.querySelector('.funds-container')
            // let deductFunds = (transferFundsValue) => {
            //     transferFundsValue = document.querySelector('#transfer-funds').value
                // for ()
            // }
        // })
    })
}

// function to show GBP data on page 
// function to be able to buy GBP crypto
let gbpShowData = (gbpData) => {
    const gbpBtn = document.querySelector('.gbp-country-code')
    gbpBtn.addEventListener('click' , () => {
        let countrySymbol = document.querySelector('.country-symbol')
        let cryptoRate = document.querySelector('.crypto-rate')
        let cryptoDescription = document.querySelector('.crypto-description')
        countrySymbol.textContent = '£'
        cryptoRate.textContent = gbpData.rate
        currentAmount = gbpData.rate
        cryptoDescription.textContent = gbpData.description
    })
}

// function to show EUR data on the page 
// function to be able to buy GBP crypto
let eurShowData = (eurData) => {
    const eurBtn = document.querySelector('.eur-country-code')
    eurBtn.addEventListener('click' , () => {
        let countrySymbol = document.querySelector('.country-symbol')
        let cryptoRate = document.querySelector('.crypto-rate')
        let cryptoDescription = document.querySelector('.crypto-description')
        countrySymbol.textContent = '€'
        cryptoRate.textContent = eurData.rate
        currentAmount = eurData.rate
        cryptoDescription.textContent = eurData.description
    })
}

// function to activate 'add funds' btn
// with aditional feature of adding input values to the page
const fundsBtn = document.querySelector('.fundsBtn')
const transferFunds = document.querySelector('#transfer-funds')
fundsBtn.addEventListener('submit' , (e) => {
    e.preventDefault()
    let fundsContainer = document.querySelector('.funds-container')
    let p = document.createElement('p')
    p.textContent = transferFunds.value
    fundsContainer.appendChild(p)
    fundsAvailable = transferFunds.value
    // let transferFundsValue = transferFunds.value
    // function to be able to use the value when buying
    // deductFunds(transferFundsValue)
})

// function to activate 'buy' btn
// with aditional feature of adding input values to the page
const buyBtn = document.querySelector('.buyBtn')
let buyStocks = document.querySelector('#buy-stocks')
let buyQuantity = document.querySelector('#buy-quantity')
buyBtn.addEventListener('submit' , (e) => {
    e.preventDefault()
    let buyContainer = document.querySelector('.buy-container')
    let p = document.createElement('p')
    let buyStocks = document.querySelector('#buy-stocks').value
    let buyQuantity = document.querySelector('#buy-quantity').value
    buyStocks = parseFloat(buyStocks)
    buyQuantity = parseFloat(buyQuantity)
    console.log(buyStocks)
    console.log(buyQuantity) 
    p.textContent = ((buyStocks) * (buyQuantity))
    total = (buyStocks * buyQuantity)
    buyContainer.appendChild(p)
    calculation()
})

// function with all the calculations
let calculation = () => {
    while (fundsAvailable > total) {
        let diff = (fundsAvailable - total)
        console.log(diff)
        fundsAvailable - total
    }
}

// function to copy what was selected in option to the input field
let cryptoCurrency = () => {
    let cryptoList = document.querySelector('#crypto-list')
    let buyStocks = document.querySelector('#buy-stocks')
    buyStocks.value = cryptoList.options[cryptoList.selectedIndex].value
}

// function to put an event on sell button
// const sellBtn = document.querySelector('.sellBtn')
// const sellStocks = document.querySelector('#sell-stocks')
// sellBtn.addEventListener('submit' , (e) => {
//     e.preventDefault()
//     let sellContainer = document.querySelector('.sell-container')
//     let p = document.createElement('p')
//     p.textContent = sellStocks.value
//     sellContainer.appendChild(p)
// })


