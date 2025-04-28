// 1)
const myInfo = {
    name1 : "gio",
    surName1 : "makharashvili",
    age1 : 16,
    hobby1 : "basketball"
}

//2)
console.log(myInfo.name1);
console.log(myInfo.surName1);
console.log(myInfo.age1);
console.log(myInfo.hobby1);

myInfo.group = "50";

//3)
const obj1 = {
    name : prompt("enter your name"),
    surname : prompt("enter your surname"),
    age : Number(prompt("enter your age")),
    hobby : prompt("enter your hobby"),
    welcome() {
        console.log("welcome", this.name )
    }


}
console.log(obj1)
obj1.welcome()

//4)
console.log(Object.keys(obj1))
console.log(Object.values(obj1))

//5)
for (let i in obj1) {
    console.log(i, "is", obj1[i])
}

//bonus cw
const carInfo = {
    brand : "mercedes",
    model : "cls63",
    year : 2021,
    color: "black",
    isElectric : false,
    carFullInfo(){
        console.log(this.brand + " " + this.model + " " + String(this.year) + " " + this.color + " " + String(this.isElectric))
    }

}
carInfo.carFullInfo()