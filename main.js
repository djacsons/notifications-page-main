const noteDivs = document.getElementsByClassName('noteDivs')
const unreadNum = document.getElementById('unreadNum')
const redDots = document.getElementsByClassName('redDot')

for (let i = 0; i< noteDivs.length; i++){
    noteDivs[i].addEventListener('click', (event)=>{
        if (noteDivs[i].classList.contains('unreadDiv')){
            noteDivs[i].classList.remove('unreadDiv')
            noteDivs[i].children[1].children[0].lastChild.remove()
            unreadNum.innerHTML = `${Number(unreadNum.innerHTML)-1}`
        }
    })
}

const markReadFunc = ()=>{
    for (let i = 0; i< noteDivs.length; i++){
        noteDivs[i].click()
    }
}
