const navBTN = document.getElementById('navBTN');
const sideNav = document.getElementById('sideNav');

navBTN.onclick = function slideSideNav(){
    if(sideNav.style.transform == 'translateX(100%)') {
        sideNav.style.transform = 'translateX(0)';
    }else {
        sideNav.style.transform = 'translateX(100%)'
    }
}