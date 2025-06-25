// მომხმარებელს შემოატანინეთ თვის სახელი მაგ:("იანვარი" , "თებერვალი") , თქვენი მიზანია დაადგინოთ მომხმარებლის შემოტანილი თვე სეზონის რომელი პერიოდია (ზაფხული,ზამთარი,შემოდგომა,თუ გაზაფხული)

let month = Number(prompt("enter a number 1-12: "))

switch(month){
    case 1:
        console.log("january")
        break
    case 2:
        console.log("february")
        break
    case 3:
        console.log("march")
        break
    case 4:
        console.log("april")
        break
    case 5:
        console.log("may")
        break
    case 6:
        console.log("june")
        break
    case 7:
        console.log("july")
        break
    case 8:
        console.log("august")
        break
    case 9:
        console.log("september")
        break
    case 10:
        console.log("october")
        break
    case 11:
        console.log("november")
        break
    case 12:
        console.log("december")
        break
    default:
        console.log("it does not exsist")
        
}


// 2)
let month2 = prompt("enter month: ")

switch(month2){
    case "march":
    case "april":
    case "may":
        console.log("spring")
        break
    case "june":
    case "july":
    case "august":
        console.log("summer")
        break
    case "september":
    case "october":
    case "november":
        console.log("autumn")
        break
    case "december":
    case "january":
    case "february":
        console.log("winter")
        break
    default:
        console.log("error ")
    

}