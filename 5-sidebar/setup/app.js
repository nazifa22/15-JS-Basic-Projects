const sidebarBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

sidebarBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar')
    console.log(sidebarBtn.classList)
})

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
})