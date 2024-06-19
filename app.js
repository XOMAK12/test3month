// 1

const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

// 2

let sec = ''

setInterval(() => {
    sec++
    console.log('Прошла секунда', sec)
}, 1000)

// 3

const counter = () => {
    let i = 1;
    setInterval(() =>{
        if (i<=10){
            console.log(i)
            i++
        }
    }, 1000);
}

counter()

// 4

const container = document.querySelector('#container')

container.onclick = () => {
    if (container.classList.contains('color')){
        container.classList.remove('color')
    }else {
        container.classList.add('color')
    }
}

// 5

const request = new XMLHttpRequest()
request.open('GET', 'data.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()
request.onload = () => {
    const data = JSON.parse(request.responseText)
    console.log(data)
}