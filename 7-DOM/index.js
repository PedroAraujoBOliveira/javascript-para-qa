let button = document.getElementById('button')
let text = document.getElementById('text')
let title = document.getElementsByClassName('title')

console.log(title)

button.addEventListener('click', function(){
    for (let index = 0; index < title.length; index++) {
        title[index].textContent = "Titulo " + index
    }
})