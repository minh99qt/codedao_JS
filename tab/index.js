const tabContent = document.querySelectorAll('.tab-content_item')
const btnTab = document.querySelectorAll('.btn-tab_item')
btnTab.forEach(btn =>{
    btn.addEventListener('click', event =>{
        tabContent.forEach(btn2 =>{
            btn2.classList.remove('active')
        })
        document.querySelector(`.tab-content_item[data-tab='${event.target.id}']`).classList.add('active')
     })
})