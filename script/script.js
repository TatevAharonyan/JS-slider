
let imgStyle = document.getElementById("img_carusel");
let info = document.getElementsByClassName("info");
let container = document.getElementsByClassName("container");
let bottom_animation = document.getElementsByClassName("bottom_div");
let sliderTimeout;
let nextSlider = true;
let slide0 = document.getElementById("slider0");
let slide1 = document.getElementById("slider1");
let slide2 = document.getElementById("slider2");
let slide3 = document.getElementById("slider3");

slide0.addEventListener('click', slider0);
slide1.addEventListener('click', slider1);
slide2.addEventListener('click', slider2);
slide3.addEventListener('click', slider3);

// stop auto carusel
function hendelClick() {
    nextSlider = false;
    clearTimeout(sliderTimeout);
}

function loading() {
    if (window.innerWidth < 992) {
        slide0.removeEventListener("click", slider0);
        slide1.removeEventListener("click", slider1);
        slide2.removeEventListener("click", slider2);
        slide3.removeEventListener("click", slider3);
        for (i = 0; i < 4; i++) {
            info[i].style.display = "block";
            container[i].style.backgroundColor = " #eceefa";
        }
    } else {
        setTimeout(() => slider0(3), 0);
    }
}

// The function is called when the screen is resized. Depending on the size, add or remove sabitias.
window.onresize = function (e) {
    if (e.target.window.innerWidth <= 992) {
        console.log("poqr e");
        slide0.removeEventListener("click", slider0);
        slide1.removeEventListener("click", slider1);
        slide2.removeEventListener("click", slider2);
        slide3.removeEventListener("click", slider3);
        // nextSlider = false;
        for (i = 0; i < 4; i++) {
            info[i].style.display = "block";
            container[i].style.backgroundColor = " #eceefa";
        };       
    }
    else {
        console.log("mec e");
        slide0.addEventListener('click', slider0);
        slide1.addEventListener('click', slider1);
        slide2.addEventListener('click', slider2);
        slide3.addEventListener('click', slider3);
        slider0();
    }
}


// When the function is called, the info "Insights and Reports" opens and a photo is opened
function slider0(sec) {
    if (sec !== 3) {sec = 0.2}
    imgStyle.style.marginLeft = `0vw`;
    for (let i = 0; i < 4; i++) {
        if (i === 0) {
            info[i].style.display = "block";
            bottom_animation[i].style.display = " block";
            bottom_animation[i].style.animationDuration = `${sec}s`;
            container[i].style.backgroundColor = " #eceefa";
        } else {
            info[i].style.display = "none";
            bottom_animation[i].style.display = "none"
            container[i].style.backgroundColor = "white"
        }
    }
    if (nextSlider) { sliderTimeout = setTimeout(()=> slider1(3), 3000); }
}

// When the function is called, the info "Manage Leads and Deals" opens and a photo is opened
function slider1(sec) {
    if (sec !== 3) {sec = 0.2}
    imgStyle.style.marginLeft = `-${1 * 58}vw`;
    imgStyle.style.width = `${2 * 58}vw`;
    for (let i = 0; i < 4; i++) {
        if (i === 1) {
            info[i].style.display = "block";
            bottom_animation[i].style.display = " block";
            bottom_animation[i].style.animationDuration = `${sec}s`;
            container[i].style.backgroundColor = " #eceefa";
        } else {
            info[i].style.display = "none";
            bottom_animation[i].style.display = "none"
            container[i].style.backgroundColor = "white"
        }
    }
    if (nextSlider) { sliderTimeout = setTimeout( () => slider2(3), 3000); }
}

// When the function is called, the info "Track Communications" opens and a photo is opened
function slider2(sec ) {
    if (sec !== 3) {sec = 0.2}
    imgStyle.style.marginLeft = `-${2 * 58}vw`;
    imgStyle.style.width = `${3 * 58}vw`;
    for (let i = 0; i < 4; i++) {
        if (i === 2) {
            info[i].style.display = "block";
            bottom_animation[i].style.display = " block";
            bottom_animation[i].style.animationDuration = `${sec}s`;
            container[i].style.backgroundColor = " #eceefa";
        } else {
            info[i].style.display = "none";
            bottom_animation[i].style.display = "none"
            container[i].style.backgroundColor = "white"
        }
    }
    if (nextSlider) { sliderTimeout = setTimeout( () => slider3(3), 3000); }
}

// When the function is called, the info "Automate and Grow" opens and a photo is opened
function slider3(sec) {
    if (sec !== 3) {sec = 0.2}
    imgStyle.style.marginLeft = `-${3 * 58}vw`;
    imgStyle.style.width = `${4 * 58}vw`;
    for (let i = 0; i < 4; i++) {
        if (i === 3) {
            info[i].style.display = "block";
            bottom_animation[i].style.display = " block";
            bottom_animation[i].style.animationDuration = `${sec}s`;
            container[i].style.backgroundColor = " #eceefa";
        } else {
            info[i].style.display = "none";
            bottom_animation[i].style.display = "none"
            container[i].style.backgroundColor = "white"
        }
    }
    if (nextSlider) { sliderTimeout = setTimeout( () => slider0(3), 3000); }
}

