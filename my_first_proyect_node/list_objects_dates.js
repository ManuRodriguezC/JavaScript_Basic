// List, objects and dates

// List, arrays or arreglos
const list = [1, 2, "hola", true, null, undefined]
console.log(list)
const list2 = new Array(10, 222, "hola", true, null, undefined)
console.log(list2)
const list3 = new Array(5)
list3[2] = "Hola"
list3[3] = new Array(1, 2, 3)
console.log(list3)

// Objets
const movil = {
    mark: "Porshe",
    age: 1995,
    speed: 200,
    win: true,
    doors: "two",
    models: ["911", "macan", "Boxter"]
}

movil.color = "Red"
console.log(movil.models[2])
console.log(movil.color)

// Dates

const today = new Date()
console.log(today)

const date_milis = new Date(10)
console.log(date_milis)

const date_string = new Date("march 25 2019")
console.log(date_string)

const date_number = new Date(1995, 1, 09)

const day = now.getDate()
