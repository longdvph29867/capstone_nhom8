
var toggleSwitch = document.getElementById("checkbox");
const currentTheme = localStorage.getItem('theme');

var iconSun = document.getElementById("icon-sun");
var iconMoon = document.getElementById("icon-moon");

function checkBtn(){
    iconSun.classList.toggle('display-block');
    iconMoon.classList.toggle('display-none'); 
    console.log(toggleSwitch.checked);
    switchTheme(toggleSwitch);
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        iconSun.classList.toggle('display-block');
        iconMoon.classList.toggle('display-none'); 
    }
}

function switchTheme(e) {
    if (e.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}


//  đổi icon btn menu navbar
function checkBtnMenu(){
    document.getElementById("icon-menu").classList.toggle('display-none');
    document.getElementById("icon-close").classList.toggle('display-block'); 
}

document.getElementById("btn-menu").addEventListener('click',function(){
    checkBtnMenu();
});