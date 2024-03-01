
youraObject = {
    name: "Nazar",
    lastName: "Nazarov",
    birthday: 2003,
    calcAge: (birthday) => 2024 - birthday //метод
}

console.log(youraObject.calcAge(2000));



youraObject1 = {
    name: "Nazar",
    lastName: "Nazarov",
    birthday: 2003,
    calcAge2: function () {
        return 2024 - this.birthday} //метод
}

console.log(youraObject1.calcAge2(1995));



youraObject2 = {
    name: "Nazar",
    lastName: "Nazarov",
    job: "doctor",
    birthday: 2003,
    calcAge2: function () {
        this.age = 2024 - this.birthday
        return 2024 - this.birthday}, //метод
    getSummiry: function () {
        return `${this.name} is a ${this.calcAge2()}-year old ${this.job}` 
    }
    }

// console.log(youraObject2.calcAge2(1990));
// console.log(youraObject2.age)


console.log(youraObject2.getSummiry())