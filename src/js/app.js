
const social = document.querySelectorAll(".social-nav a");
const bottomfade = document.querySelector(".bottom-fade");
const navegacion = document.querySelectorAll('.navegacion a');
const navegacionMenu = document.querySelector('#menu-br').attributes.src;
const argP = document.querySelector('.arg-p');
const apLogo = document.querySelector('#apLogo').attributes.src;
console.log(navegacionMenu)


window.addEventListener('scroll', () => {
    // console.log('scrolling...');

    // Detectar el Scrolling vertical...

    // const pxScroll = window.scrollY;
    // console.log(pxScroll);



    // Detectar un elemento al dar scroll...

    

    const ubicacion = bottomfade.getBoundingClientRect(); // Este método te da el tamaño de un elemento y su ubicación respecto a la ubicación actual..
        // console.log(ubicacion);

    if(ubicacion.top < 10) {
        social.forEach(e => {
            e.classList.add('cl-white');
            e.classList.remove('cl-grey');
        })
        navegacion.forEach(e =>{
            e.classList.add('cl-white');
            e.classList.remove('cl-grey');
        }) 
        navegacionMenu.value = 'build/img/bar2.svg'
        argP.classList.add('cl-white');
        argP.classList.remove('cl-grey');
        apLogo.value = "build/img/APLogo-w.svg"

        
    } else {
        social.forEach(e => {
            e.classList.add('cl-grey');
            e.classList.remove('cl-white');
        })
        navegacion.forEach(e =>{
            e.classList.add('cl-grey');
            e.classList.remove('cl-white');
        })
        navegacionMenu.value = 'build/img/bar.svg'
        argP.classList.add('cl-grey');
        argP.classList.remove('cl-white');
        apLogo.value = "build/img/APLogo-20-20.svg"
    }


})