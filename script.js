const shareButtonDesktop = document.querySelector('.card__text__author__share');
const shareMenuDesktop = document.querySelector('.card__sharemenu__dt');
const shareButtonMobile1 = document.querySelector('.card__text__author__share__mobile');
const shareButtonMobile2 = document.querySelector('.card__sharemenu__mobile__box__share');
const shareMenuMobile = document.querySelector('.card__sharemenu__mobile');

function myFunctiondt(){
    shareMenuDesktop.classList.toggle('active');
    shareButtonDesktop.classList.toggle('active_share_button_dt');
    console.log('it worked');
}
function myFunctionmobile(){
    shareMenuMobile.classList.toggle('active');
    console.log('it worked');
}

shareButtonDesktop.addEventListener("click", myFunctiondt);
shareButtonMobile1.addEventListener("click", myFunctionmobile);
shareButtonMobile2.addEventListener("click", myFunctionmobile);