const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const fallbackImage = './images/image1.png'; // Path to the fallback image

let currentIndex = 0;

const current = (index)=>{
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;

}

const next = ()=>{
    current(currentIndex + 1);
}

const previous = ()=>{
    current(currentIndex - 1);
}


nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', previous);

images.forEach(img => {
    img.addEventListener('error', ()=>{
        img.src = fallbackImage;
    });
});


current(currentIndex);