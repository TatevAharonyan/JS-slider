
let imgStyle = document.getElementById("img_carusel");
let info = document.getElementsByClassName("info");
let left_animation_div = document.getElementsByClassName("left_animation_div");
let mini_img = document.getElementsByClassName("mini_img");
let solid_line = document.getElementsByClassName("solid_line");
let empty_circle_border = document.getElementsByClassName("empty_circle_div");
let circle_div_color = document.getElementsByClassName("circle_div");
let containerClass =  document.getElementsByClassName("container");

let sliderTimeout;
let nextSlider = true;


for (i = 0; i < 4; i++) {
    containerClass[i].addEventListener('click', onClickSlider);
};


// stop auto carusel
function hendelClick() {
    nextSlider = false;
    clearTimeout(sliderTimeout);
}

function loading() {
    if (window.innerWidth < 992) {
        removeEvent()
    } else {
        setTimeout(() => loadingSlider(3, 0), 0);
    }
}

// The function is called when the screen is resized. Depending on the size, add or remove sabitias.
window.onresize = function (e) {
    if (e.target.window.innerWidth <= 992) {
        removeEvent()
    }
    else {
        for (i = 0; i < 4; i++) {
            containerClass[i].addEventListener('click', onClickSlider);
        };
    }
}

// During the click, a function is called, using the id it is decided which of the sliders should be active.
function onClickSlider(e, sec = .2) {
    let id = e.target.id;
    for (let i = 0; i < 4; i++) {
        if (("slider" + `${i}`) === id) {
            let index = i;
            choiceOfStyles(sec, index)
        }
    }
}
// During the call of the function, all event Click is removed.
function removeEvent() {
    for (i = 0; i < 4; i++) {
        containerClass[i].removeEventListener('click', onClickSlider);
        info[i].style.display = "block";
        containerClass[i].style.backgroundColor = " #eceefa";
    };
}

// The function is called 1 time when the window is loaded and stops progress on the Click event.
function loadingSlider(sec, index) {
    let secondTimeout;
    choiceOfStyles(sec, index)
    if (index + 1 === 0 || index + 1 > 4) {
        index = -1;
        secondTimeout = 0;
    } else {
        secondTimeout = 3000;
    }
    if (nextSlider) { sliderTimeout = setTimeout(() => loadingSlider(3, index + 1), secondTimeout); }
}


// index dependency picks styles
function choiceOfStyles(sec, index) {
    for (let i = 0; i < 4; i++) {
        if (i === index) {
            imgStyle.style.marginLeft = `-${i * 40}vw`;
            imgStyle.style.width = `${(i + 1) * 40}vw`;
            info[i].style.display = "block";
            solid_line[i].style.display = "block";
            solid_line[i].style.animationDuration = `${sec}s`;
            left_animation_div[i].style.display = " block";
            left_animation_div[i].style.animationDuration = `${sec}s`;
            mini_img[i].style.backgroundColor = " #eceefa";
            empty_circle_border[i].style.border = "solid 3px #8bb2f3";
            circle_div_color[i].style.backgroundColor = "#8bb2f3";
            empty_circle_border[i].style.backgroundColor = "white";
        } else if (i < index) {
            info[i].style.display = "none";
            solid_line[i].style.display = "block";
            mini_img[i].style.backgroundColor = "white";
            left_animation_div[i].style.display = "none";
            empty_circle_border[i].style.border = "";
            circle_div_color[i].style.backgroundColor = "#8bb2f3";
            empty_circle_border[i].style.backgroundColor = "transparent";
        } else {
            info[i].style.display = "none";
            solid_line[i].style.display = "none";
            left_animation_div[i].style.display = "none";
            mini_img[i].style.backgroundColor = "white";
            empty_circle_border[i].style.border = "";
            circle_div_color[i].style.backgroundColor = "rgb(209, 207, 207)";
            empty_circle_border[i].style.backgroundColor = "transparent";
        }
    }
}
