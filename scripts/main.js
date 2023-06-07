const groups = [
    {names: ['Ahmed', 'Rawan', 'Almira', 'Waleed']},
    {names: ['Sumaya', 'Zainab Mohamed', 'Sarah', 'Latifa']},
    {names: ['Hasan', 'Zainab AbdulJalil', 'Sayed', 'Fatima']},
    {names: ['Husain', 'Zainab Adel', 'Maryam Ismail', 'Khalid']},
    {names: ['Mariam Merza', 'Jawaher', 'Aysha', 'Heba']},
    {names: ['Ruqaya', 'Zainab Saeed', 'Maryam Alnajem']},
    {names: ['Salman Hamad', 'Saud', 'Ebrahim']},
    {names: ['Salman Murtaza', 'Ali', 'Manar']},
    {names: ['Ahmed 😎', 'Haya 😎', 'Saad 😎', 'George 😎']}
]
let count = 1
const body = $('body')

body.append('<h1 class="start">Start</h1><div></div')
const div = $('div')

body.append('<button>Start</button>')
const button = $('button')
const audio = document.querySelector('audio')

button.css({'height': '10vh', 'width': '10.5vw'})

button.on('click', () => {
    audio.pause()
    audio.currentTime = 0

    if (count <= 9) {
        $('.start').remove()
        div.html('')
        button
        .html('Next')
        .css({'position': 'fixed', 'top': '76vh', 'left': '43vw'})
        div.append(`<h1>Group ${count}</h1`)

        groups[count -1].names.forEach(name => {
            div.append(`<p>${name}</p>`)
        })

        return count++
    } else {
        div.html('<h1>Done</h1><img src="./images/dance.gif" alt="Dance">')
        $('p').css('top', '20vh')
        audio.play()
        button.html('Start')
        return count = 1
    }
})