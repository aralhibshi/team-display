const groups = [
    {names: ['Ahmed', 'Rawan', 'Almira', 'Waleed']},
    {names: ['Sumaya', 'Zainab Mohamed', 'Sarah', 'Latifa']},
    {names: ['Hasan', 'Zainab AbdulJalil', 'Sayed', 'Fatima']},
    {names: ['Husain', 'Zainab Adel', 'Maryam Ismail', 'Khalid']},
    {names: ['Mariam Merza', 'Jawaher', 'Aysha', 'Heba']},
    {names: ['Ruqaya', 'Zainab Saeed', 'Maryam Alnajem']},
    {names: ['Salman Hamad', 'Saud', 'Ebrahim']},
    {names: ['Salman Murtaza', 'Ali', 'Manar']}
]
let count = 1
const body = $('body')

body.append('<div></div')
const div = $('div')

body.append('<button>Click Me</button>')
const button = $('button')

button.css({'height': '10vh', 'width': '10vw'})

button.on('click', () => {
    if (count <= 8) {
        div.html('')
        div.append(`<h1>Group ${count}</h1`)

        groups[count -1].names.forEach(name => {
            div.append(`<p>${name}</p>`)
        })
        return count++
    } else {
        return count = 1
    }
})