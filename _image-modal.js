const showImgs = document.querySelectorAll('.show-imgs');

const showImg = document.querySelector('#show-img');
const showImgWrapper = document.querySelector('#show-img-wrapper');

showImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        showImg.src = imgs[index].src;
        showImgWrapper.style.display = 'grid';
        showImgWrapper.addEventListener('click', () => {
            showImgWrapper.style.display = 'none';
        }
        );
    }
    );
}
);