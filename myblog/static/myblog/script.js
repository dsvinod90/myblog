function showTime() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    document.querySelector('.today').textContent = today.toLocaleDateString("en-US", options)
}
setInterval(showTime(), 60000)

document.querySelector('.menu-options').addEventListener('click', (event) => {
    currentActiveTab = event.target
    localStorage.setItem('currentActiveTab', currentActiveTab.id)
    localStorage.setItem('previousActiveTab', document.querySelector('.nav-link.active').id)
})

document.addEventListener('DOMContentLoaded', function() {
    let currentActiveTab = localStorage.getItem('currentActiveTab')
    let previousActiveTab = localStorage.getItem('previousActiveTab')
    if (currentActiveTab != null && previousActiveTab != null) {
        document.getElementById(previousActiveTab).classList.remove('active')
        document.getElementById(currentActiveTab).classList.add('active')
    }
})