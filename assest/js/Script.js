// var nav_bar=document.querySelector(".navbar-top");

// function nav_fun(){
//     if(nav_bar=="block"){
//         nav_bar.style.display="none";
//     }
//     else{
//         nav_bar.style.display="block";
//     }
// }

var nav_bar = document.querySelector(".navbar");
var prevScrollPos = window.pageYOffset;
function nav_fun() {
    if (nav_bar.style.display === "block") {
        nav_bar.style.display = "none";
        nav_bar.style.opacity = "0";
        nav_bar.style.maxHeight = "0";
        nav_bar.style.transition = "all 0.5s ease-in-out";
    } else {
        nav_bar.style.display = "block";
        nav_bar.style.opacity = "1";
        nav_bar.style.transition = "all 0.5s ease-in-out";
        nav_bar.style.maxHeight = "max-content";
    }
}
// var header=document.querySelector("header");
// sub_header.style.position='fixed';
// function page_scroll(){
//       var currentScrollPos = window.pageYOffset;
    
//     if (prevScrollPos > currentScrollPos) {
//         // Scrolling up
//         header.style.top = "0";
//     } else {
//         // Scrolling down
//          sub_header.style.top = "-50px"; // You can adjust the value based on your needs
//     }
//     prevScrollPos = currentScrollPos;
// }
// window.addEventListener("scroll", page_scroll);





// var el_autohide = document.querySelector('header');
// if(el_autohide){
//     var last_scroll_top = 100;
//     window.addEventListener('scroll',function(){
//          let scroll_top = window.scrollY;
//             if (scroll_top <= 99) {
//                 el_autohide.classList.add('no-scroll');

//             } else {
//                 el_autohide.classList.remove('no-scroll');
//             }
//              if (scroll_top > 100) {
//                 el_autohide.classList.add('scrolled_down');
//                 el_autohide.classList.remove('no-scroll');
//                 el_autohide.classList.remove('scrolled_up');
                
//             }
//             else {
//                 el_autohide.classList.add('scrolled_up');
//                 el_autohide.classList.remove('scrolled_down');
             
//             }
//              last_scroll_top = scroll_top;
//     });
// }
var el_autohide = document.querySelector('header');

if (el_autohide) {
    var last_scroll_top = 0; // Initialize to 0 instead of 100

    window.addEventListener('scroll', function () {
        let scroll_top = window.scrollY;

        if (scroll_top <= 56) {
            el_autohide.classList.add('no-scroll');
        } else {
            el_autohide.classList.remove('no-scroll');
        }

        if (scroll_top > last_scroll_top) {
            el_autohide.classList.add('scrolled_down');
            el_autohide.classList.remove('scrolled_up');
        } else {
            el_autohide.classList.add('scrolled_up');
            el_autohide.classList.remove('scrolled_down');
        }

        last_scroll_top = scroll_top;
    });
}
