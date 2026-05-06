// console.log("JS 연결됨");

// =========================
// GSAP Blur animation
// =========================
const randomX = random(-400, 400);
const randomY = random(-200, 200);
const randomTime = random(6, 12);
const randomTime2 = random(5, 6);
const randomAngle = random(-30, 150);

const blurs = gsap.utils.toArray(".blur");

blurs.forEach((blur) => {
  gsap.set(blur, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  });
  moveX(blur, 1);
  moveY(blur, -1);
  rotate(blur, 1);
});

function rotate(target, direction) {
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    ease: "sine.inOut",
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: "sine.inOut",
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: "sine.inOut",
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}


// =========================
// Hamberger menu
// =========================
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

// 메뉴 클릭 시 닫기
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  });
});

// =========================
// Modal
// =========================
const images = document.querySelectorAll(".art-img-box img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;

  // modal.scrollTop = 0; 
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

modal.classList.add("active");
document.body.style.overflow = "hidden";

modal.classList.remove("active");
document.body.style.overflow = "";

//===========================
let scale = 1;

const zoomIn = document.querySelector(".zoom-in");
const zoomOut = document.querySelector(".zoom-out");

zoomIn.addEventListener("click", (e) => {
  e.stopPropagation(); // 모달 닫힘 방지
  scale += 0.2;
  modalImg.style.transform = `scale(${scale})`;
});

zoomOut.addEventListener("click", (e) => {
  e.stopPropagation();
  scale = Math.max(1, scale - 0.2);
  modalImg.style.transform = `scale(${scale})`;
});

scale = Math.min(scale, 3);


// =========================
// AOS
// =========================
AOS.init();