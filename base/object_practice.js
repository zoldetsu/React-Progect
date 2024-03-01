

const firstPerson = {
    firstName: "Jack",
    lastName: "White",
    weight: 79,
    height: 1.70,
    methodBMI: function () {
        return this.weight / (this.height * this.height)
    }
}

const secondPerson = {
    firstName: "Mike",
    lastName: "Black",
    weight: 91,
    height: 1.93,
    methodBMI: function () {
        return this.weight / (this.height * this.height)
    }

}


if ( firstPerson.methodBMI() > secondPerson.methodBMI()) {
    console.log(`${firstPerson.firstName} ${firstPerson.lastName} BMI (${firstPerson.methodBMI()}) is higher than ${secondPerson.firstName} ${secondPerson.lastName} (${secondPerson.methodBMI()})`)
} else {
    console.log(`${secondPerson.firstName} ${secondPerson.lastName} BMI (${secondPerson.methodBMI()}) is higher than ${firstPerson.firstName} ${firstPerson.lastName} (${firstPerson.methodBMI()})`)
}