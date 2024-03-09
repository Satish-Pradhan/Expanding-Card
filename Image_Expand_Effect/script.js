const pannels = document.querySelectorAll('.pannel')

pannels.forEach((e)=>{
    e.addEventListener('click',()=>{
        removeActiveClasses()
        e.classList.add('active')
    },false)
}) 

function removeActiveClasses() {
    pannels.forEach((e)=>{
        e.classList.remove('active')
    })
}