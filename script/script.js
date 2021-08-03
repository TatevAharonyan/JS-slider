
let info = document.getElementsByClassName("info");
let left_animation_div = document.getElementsByClassName("left_animation_div");
let mini_img = document.getElementsByClassName("mini_img");
let solid_line = document.getElementsByClassName("solid_line");
let empty_circle_border = document.getElementsByClassName("empty_circle_div");
let circle_div_color = document.getElementsByClassName("circle_div");
let containerClass = document.getElementsByClassName("container");
const imgSrcArr = ["../img/Insights_and_Reports.png", "../img/Manage_Leads_and_Deals.png", "../img/Track_Communications.png", "../img/Automate_and_Grow.png"];
const imgAltArr = [" img Insights and Reports", " img Manage Leads and Deals", " img Track Communications", "img Automate and Grow"]
const H3InfoArr = ["Insights and Reports", "Manage Leads and Deals", "Track Communications", "Automate and Grow"]
const PInfoArr = ["Insights and Reports: Deep dive into metrics customized for your business and measure goals.",
    "Get more hot leads fed straight into your sales pipelines around the clock.",
    "Track Communications: Track calls, emails and contact history exactly where you need.",
    "Automate and Grow: Eliminate busywork by automating repetitive administrative tasks."
]
const H1InnerText = "More sales. Less legwork."
const PInnerText = "Get more leads, sort sales in one place and eliminate admin, because your day belongs to you."


let sliderTimeout;
let nextSlider = true;

function createTextTag(tag, append, classIndividual = null ,idIndividual = null,  textInfo = null) {
    let textTagUniversal = document.createElement(`${tag}`);
    classIndividual !== null && (textTagUniversal.className = classIndividual);
    idIndividual !== null && (textTagUniversal.id = idIndividual);
    textInfo !== null && (textTagUniversal.innerText = textInfo);
    return append.appendChild(textTagUniversal);
}

function createDiv(classIndividual, append, idIndividual = null) {
    let divUniversal = document.createElement("div");
     classIndividual !== null && (divUniversal.className = classIndividual);
     idIndividual !== null && (divUniversal.id = idIndividual);
    return append.appendChild(divUniversal)
}

function createImg(append, i, classIndividual) {
    let imgUniversal = document.createElement("img");
    imgUniversal.src = imgSrcArr[i];
    imgUniversal.alt = imgAltArr[i];
    imgUniversal.className = classIndividual;
    return append.appendChild(imgUniversal)
}

function createA(append, i) {
    let aUniversal = document.createElement("a");
    aUniversal.href = imgSrcArr[i];
    aUniversal.setAttribute("data-lity", "");
    createImg(aUniversal, i, "img_slider")
    
    return append.appendChild(aUniversal)
}

// HTML content

let divIdWrapper = createDiv(null,  document.body, "wrapper");
let divClassWrapper = createDiv("wrapper", divIdWrapper);
// create title
let divWrapperTitle = createDiv("wrapper_title", divClassWrapper);
 createTextTag( "h1", divWrapperTitle , null, null, H1InnerText);
createTextTag( "p", divWrapperTitle, null ,null, PInnerText);

let divWrapperCarusel = createDiv("wrapper_carusel", divClassWrapper);

// wrapper  button text img
let divWrapperButtonTextImg = createDiv("wrapper_button_text_img", divWrapperCarusel);

//  sliders 

//  Photo section, which changes when you click on the left texts.
let DivImgCaruselBackground = createDiv("img_carusel-background", divWrapperCarusel);
let divImgContainerMiniImg = createDiv("img_container_mini_img", DivImgCaruselBackground);

// mini img

// add img_container class, elements "a" will be added to the directory
let divImgContainer = createDiv("img_container", DivImgCaruselBackground);
let divIdImgCarusel =  createDiv(null, divImgContainer, "img_carusel");

// Background img and "a" element

for (i = 0; i < imgSrcArr.length; i++) {

    // sliders
        let divContainerAniationDivTextInfo = createDiv("container_aniation_div_text_info", divWrapperButtonTextImg);
        let divContainerAniation = createDiv("container_aniation", divContainerAniationDivTextInfo);
        createDiv("background_dashed_line", divContainerAniation);
        createDiv("solid_line", divContainerAniation);
        var emptyCircleDiv = createDiv("empty_circle_div", divContainerAniation);
        createDiv("circle_div", emptyCircleDiv);
        let divContainer = createDiv("container", divContainerAniationDivTextInfo);
        divContainer.addEventListener('mousedown', hendelClick);
         createTextTag( "h3", divContainer, null ,`slider${[i]}`,H3InfoArr[i]);
         createTextTag( "p", divContainer, "info" , null, PInfoArr[i]);
    
       
        createImg(divContainer, i)

    // mini img
    var divMiniImg = createDiv("mini_img", divImgContainerMiniImg);
    createDiv("left_animation_div", divMiniImg);
    createTextTag( "span", divMiniImg, "mini_img_number", null, [i + 1]);
    createImg(divMiniImg, i)

    // Background img and "a" element
    createA(divIdImgCarusel, i);

    // add a click event listener to the class container
    containerClass[i].addEventListener('click', onClickSlider);
}

// stop auto carusel
function hendelClick() {
    nextSlider = false;
    clearTimeout(sliderTimeout);
}

// the function will be called one time during file loading
function loading() {
    if (window.innerWidth < 992) {
        removeEvent()
    } else {
        setTimeout(() => loadingSlider(3, 0), 0);
    }
}

// The function is called when the screen is resized. Depending on the size, add or remove events.
window.onresize = function (e) {
    if (e.target.window.innerWidth <= 992) {
        removeEvent()
    }
    else {
        for (i = 0; i < imgSrcArr.length; i++) {
            containerClass[i].addEventListener('click', onClickSlider);
        };
    }
}

// During the click, a function is called, using the id it is decided which of the sliders should be active.
function onClickSlider(e, sec = .2) {
    let id = e.target.id;
    for (let i = 0; i < imgSrcArr.length; i++) {
        if (("slider" + `${i}`) === id) {
            let index = i;
            choiceOfStyles(sec, index)
        }
    }
}
// During the call of the function, all event Click is removed.
function removeEvent() {
    for (i = 0; i < imgSrcArr.length; i++) {
        containerClass[i].removeEventListener('click', onClickSlider);
        info[i].style.display = "block";
        containerClass[i].style.backgroundColor = " #eceefa";
    };
}

// The function decides which slide should be next. Thanks to the carousel stops function.
function loadingSlider(sec, index) {
    let secondTimeout;
    choiceOfStyles(sec, index)
    if (index + 1 === 0 || index + 1 > imgSrcArr.length) {
        index = -1;
        secondTimeout = 0;
    } else {
        secondTimeout = 3000;
    }
    if (nextSlider) { sliderTimeout = setTimeout(() => loadingSlider(3, index + 1), secondTimeout); }
}

// index dependency picks styles
function choiceOfStyles(sec, index) {
    for (let i = 0; i < imgSrcArr.length; i++) {
        if (i === index) {
            divIdImgCarusel.style.marginLeft = `-${i * 40}vw`;
            divIdImgCarusel.style.width = `${(i + 1) * 40}vw`;
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




