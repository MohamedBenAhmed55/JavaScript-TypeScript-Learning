let name = "mohamed"
console.log(name)
console.log("output in console")

function printConsole(text) {
    console.log(text)
}

function printText() {
    let text = document.getElementById("mytext")
    let content = text.value
    console.log(content)
    console.log("hello")
}

function reverseString() {
    let textToRev = document.getElementById("textrev").value
    let newText = ""
    for (let i = textToRev.length - 1; i >= 0; i--) {
        newText += textToRev.charAt(i)
    }
    console.log(newText)
}

function checkPalindrome() {
    let text = document.getElementById("textpalindrome").value
    let newText = ""
    for (let i = text.length - 1; i >= 0; i--) {
        newText += text.charAt(i)
    }
    (newText === text) ? console.log("palindrome") : console.log("not palindrome")

}

function factorial() {
    let number = document.getElementById("fact").value
    let fact = number

    while (number - 1 > 0) {
        fact = fact * (--number)
    }
    console.log(fact)
}

function factorialRecursive(number) {
    if (number == 1) return 1
    if (number == 0) return 1

    return (number * factorialRecursive(number - 1))
}

function factResult() {
    let number = document.getElementById("factrev").value
    let result = factorialRecursive(number)

    console.log(result)
}

function fibonacci(n) {
    if (n == 1 || n == 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

function handleFibonacci() {
    let n = document.getElementById()
    let result = fibonacci(n)

    console.log(result)
}

function isPrime() {
    let x = document.getElementById("prime")
    let i = 2
    let prime = true
    while (i < (x / 2 + 1) && prime) {
        if (x % i == 0) {
            prime = false
        }
    }

    prime ? console.log("prime") : console.log("not prime")
}

function findMax() {
    let Numbers = [2, 5, 1, 4, 8, 6, 8]
    let max = Numbers[0]
    for (let x of Numbers) {
        if (x > max) max = x
    }
    console.log(max)
}

function findMin() {
    let numbers = [2, 5, 1, 4, 8, 6, 8]
    let min = numbers[0]
    for (let x of numbers) {
        if (x < min) min = x
    }
    console.log(min)
}

function sortArray() {
    let numbers = [2, 5, 1, 4, 8, 6, 8]
    for (let i = 0; i < numbers.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex === i) continue
        else {
            let aux = numbers[i]
            numbers[i] = numbers[minIndex]
            numbers[minIndex] = aux
        }
    }

    console.log(numbers)
}

function reverseWordsSentence() {
    let sentence = document.getElementById('sentence').value
    let wordsArray = sentence.split(" ")
    let newSentence = ""
    for (let i = wordsArray.length - 1; i >= 0; i--) {
        newSentence += wordsArray[i] + " "
    }

    console.log(newSentence)
}

function improvedReverseWordsSentence() {
    let sentence = document.getElementById('sentence').value
    let wordsArray = sentence.split(" ")
    let reversedWordsArray = wordsArray.reverse()
    let newSentence = reversedWordsArray.join(" ")
    console.log(newSentence)
}

function capitalizeFirstLetter() {
    let sentence = document.getElementById('sentence').value
    let wordsArray = sentence.split(" ")
    wordsArray = wordsArray.map((word) => word[0] = word[0].toUpperCase() + word.slice(1))
    console.log(wordsArray.join(" "))
}

function improvedCapitalizeFirstLetter() {
    let sentence = document.getElementById('sentence').value
    let capitalizeSentence = sentence.replace(/\b\w/g, char => char.toUpperCase())
    console.log(capitalizeSentence)

}


