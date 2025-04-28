//1)
let car = {
    company : "mercedes",
    model : "cls63",
    milage : 40,
    year: 2021,
    condition: "good",
    func1(){
        console.log(`car is in ${this.condition} condition`)
    }
}
car.func1()

//2)
car.color = "black"
car.price = "22k"
delete car.milage

console.log(car)

//3)
let user = {
    name : "gio",
    lastName : "maxara",
    age : 16,
}

for (let i in user){
    console.log(i)
}

//4)
let student = {
    fullName : 'gio maxara',
    scores : [100,95, 90],
    averageScore(){
        let sum = 0
        for(let i =0; i<this.scores.length;i++){
            sum += this.scores[i]
        }
        let avg = sum / this.scores.length
        console.log(avg)
    },
    checkStudent(){
        let avg = this.averageScore
        if (avg >= 90) {
            console.log("best student")
        } else if (avg < 90 && avg >= 60) {
            console.log("good student")
        }else {
            console.log("bad student")

        }
    }
}

student.averageScore()
student.checkStudent()

console.log(Object)






