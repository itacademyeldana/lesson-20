const buttons = document.querySelectorAll('.button')
for (let i =0; i < buttons.length; i++){
    buttons [i].onclick = (e) =>{
        document.body.style.background = e.target.innerText
    }
}