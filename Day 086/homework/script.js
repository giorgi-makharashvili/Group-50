// 1)

let lang1 = prompt("enter a language: ")
let word = "hello"

switch(lang1){
    case "french":
        console.log("Bonjour")
        break
    case "spanish":
        console.log("Hola")
        break
    case "georgian":
        console.log("gamarjoba")
        break
    case "chineese":
        console.log("你好")
        break
    case "japanese":
        console.log("こんにちは")
        break
    case "german":
        console.log("Hallo")
        break
    case "russian":
        console.log("привет")
        break
    case "arabic":
        console.log("mrhban")
        break
    case "portuguese":
        console.log("Olá")
        break
    default:
        console.log("wrong option!")
}

// 2)
let time = prompt("enter time in hours: ")

switch(time){
    case "08:00":
    case "09:00":
    case "10:00":
    case "11:00":
    case "12:00":
    case "13:00":
        console.log("morning")
        break
    case "14:00":
    case "15:00":
    case "16:00":
    case "17:00":
    case "18:00":
        console.log("afternoon")
        break
    case "19:00":
    case "20:00":
    case "21:00":
    case "22:00":
    case "23:00":
    case "24:00":
        console.log("evening")
        break
    case "01:00":
    case "02:00":
    case "03:00":
    case "04:00":
    case "05:00":
    case "06:00":
    case "07:00":
        console.log("night")
        break
        
}