// 載入動畫消失
const open = document.querySelector('.open-animation');
setTimeout(() => {
  open.style.display = 'none';
}, 3500);

//header 圖片輪轉動畫 大4秒
const titleBox = document.querySelectorAll('.product__title');
const pic = document.querySelectorAll('.pic');
let picLeft = ['150%', '100%', '50%', '0%', '-50%'];
let titleLeft = ['180%', '-80%', '-80%', '50%', '180%'];
function positionChange() {
  let first = picLeft.shift();
  picLeft.push(first);
  let end = titleLeft.pop();
  titleLeft.unshift(end);
  for (let i = 0; i < pic.length; i++) {
    pic[i].style.left = picLeft[i];
    titleBox[i].style.left = titleLeft[i];
    if (picLeft[i] == '50%') {
      pic[i].style.transform = 'translateX(-50%) scale(1.1)';
      pic[i].style.zIndex = '50';
    } else {
      pic[i].style.transform = 'translateX(-50%) scale(0.7)';
      pic[i].style.zIndex = '10';
    }
    picLeft[i] == '150%'
      ? (pic[i].style.transition = 'none')
      : (pic[i].style.transition = 'all 2s ease-in-out');
    titleLeft[i] == '180%'
      ? (titleBox[i].style.transition = 'none')
      : (titleBox[i].style.transition = 'all 2s ease-in-out');
  }
  setTimeout(positionChange, 4000);
}
positionChange();

//header 色塊進場動畫 小2秒

const bgc = document.querySelectorAll('.moveBox');
let bgcScale = ['scale(0)', 'scale(2.7)'];
function headerBlockFade() {
  let first = bgcScale.shift();
  bgcScale.push(first);
  bgc[0].style.transform = bgcScale[0];
  bgc[1].style.transform = bgcScale[0];
  setTimeout(headerBlockFade, 2000);
}
headerBlockFade();

//header 色票換色 大4秒

const Up = ['#cebbde', '#b23e3f', '#f0d5b8', '#423f3f', '#d1b292'];
const Down = ['#432c54', '#78333d', '#ffad3a', '#7f736f', '#c08e65'];

function headerColorChange() {
  let first1 = Up.shift();
  Up.push(first1);
  let first2 = Down.shift();
  Down.push(first2);
  setTimeout(headerColorChange, 4000);
}

headerColorChange();

//header 色塊漸變順序 小4秒

const changeBox = document.querySelectorAll('.changeBox');
let i = 0;
function colorChange() {
  i == 4 ? (i = 1) : i++;
  if (i == 1) {
    changeBox[1].style.backgroundColor = Up[0];
    changeBox[3].style.backgroundColor = Down[0];
  }
  if (i == 2) {
    changeBox[0].style.backgroundColor = Up[0];
    changeBox[2].style.backgroundColor = Down[0];
  }
  if (i == 3) {
    changeBox[1].style.backgroundColor = Up[0];
    changeBox[3].style.backgroundColor = Down[0];
  }
  if (i == 4) {
    changeBox[0].style.backgroundColor = Up[0];
    changeBox[2].style.backgroundColor = Down[0];
  }
  setTimeout(colorChange, 1000);
}
colorChange();

// header 文字跳動

let text = document.querySelectorAll('.header__h1');

function textUp() {
  for (let i = 13; i >= 0; i--) {
    let x = 14 - i;
    setTimeout(() => {
      text[i].classList.toggle('scale');
    }, 50 * x);
  }
  setTimeout(textUp, 2000);
}

textUp();

//navbar menu 彈出視窗

const navbar = document.querySelector('.navbar');
const navbarNone = document.querySelector('.navbar__button');
const navbarBlock = document.querySelector('.menuBtn');
const navbarBgc = document.querySelector('.navbar--bgc');
const menu = document.querySelector('.header__menu');

navbarBlock.addEventListener('click', () => {
  navbar.style.display = 'flex';
  navbarBgc.style.display = 'block';
  menu.style.right = '-7%';
});

navbarNone.addEventListener('click', () => {
  navbar.style.display = 'none';
  navbarBgc.style.display = 'none';
  menu.style.right = '0%';
});

// 跑馬燈

const scroll = document.querySelectorAll('.scroll--p');

let scrollPosition = ['190%', '120%', '50%', '-20%', '-90%'];

function scrollChange() {
  let first = scrollPosition.shift();
  scrollPosition.push(first);
  for (let i = 0; i < scrollPosition.length; i++) {
    scroll[i].style.left = scrollPosition[i];
    scrollPosition[i] == '190%'
      ? (scroll[i].style.transition = 'none')
      : (scroll[i].style.transition = 'all 4s linear');
  }
  setTimeout(scrollChange, 3000);
}

scrollChange();

// 換圖輪播底下燈條

const light = document.querySelectorAll('.light');
console.log(light);

function lightChange() {
  for (let i = 0; i < light.length; i++) {
    setTimeout(() => {
      light[i].classList.add('lightRight');
    }, 4000 * i);
    setTimeout(() => {
      light[i].classList.remove('lightRight');
    }, 4000 * (i + 1));
    setTimeout(lightChange, 20000);
  }
}
lightChange();
