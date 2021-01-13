const resultElement = document.getElementById('result')
const lengthElement = document.getElementById('length')
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')
const generateElement = document.getElementById('generate')
const clipboardElement = document.getElementById('clipboard')



const chooseRandomFunction = {
    upper: getRandomUppercase,
    lower: getRandomLowercase,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardElement.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultElement.innerText

    if(!password) { return }

    // Copies result to clipboard:
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to your clipboard')
})

generateElement.addEventListener('click', () => {
    const length = +lengthElement.value
    const hasLower = lowercaseElement.checked
    const hasUpper = uppercaseElement.checked
    const hasNumber = numbersElement.checked
    const hasSymbol = symbolsElement.checked

    resultElement.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = upper + lower + number + symbol
    const typesArray = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0) {
        return ''
    } 

    for(let i = 0; i < length; i+= typesCount) {
        typesArray.forEach(type => {
            const functionName = Object.keys(type)[0]
            generatedPassword += chooseRandomFunction[functionName]()
        })
    }

    const finalPassword = generatedPassword.slice(0,length)
    return finalPassword
}

function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()+=<>,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

