//get element by Id shortcut
const getId = (x) => {return document.getElementById(x)};



//HAMBURGER MENU
// Show drop down menu
function showMenu (a,b) {
    a.classList.add('show');    
    b.classList.add('show');
};

// Hide drop down menu
function hideMenu (a,b) {
    a.classList.remove('show');    
    b.classList.remove('show');
};

// Event Listener to trigger drop down menu
getId('hamburger-icon').addEventListener('click', function () {
    showMenu(getId('hamburger-menu'),getId('hamburger-overlay'));

});

// Event Listener to hide drop down menu
getId('hamburger-overlay').addEventListener('click',function () {
    hideMenu(getId('hamburger-menu'),getId('hamburger-overlay'));
})
getId('quitMenu').addEventListener('click',function () {
    hideMenu(getId('hamburger-menu'),getId('hamburger-overlay'));
});




// SERVICES TOGGLE
const serviceInfo = document.querySelectorAll('.service-segment-closed');
const expandService = document.querySelectorAll('.expand-service');

toggle = (e,toggledClass) => {e.classList.toggle(toggledClass)};

serviceInfo.forEach(function(serviceInfo,index){
    let i = index;
    serviceInfo.addEventListener('click',function(){
        toggle(serviceInfo,'service-segment-open');
        if(expandService[i].innerHTML == '+'){
            expandService[i].innerHTML = '-'
        }
        else{
            expandService[i].innerHTML = '+'
        }
    });
});







