const slider = document.querySelector('.slider');
const before = document.querySelector('.img-container-before');
const after = document.querySelector('.image-container-after');
const container = document.querySelector('.container');

const drag = (e) => {
    
    let xPos = e.layerX;
    let size = container.offsetWidth;
    before.style.width = `${xPos}px`;
    /* we are modifying the actual image */
    /* we want to move the slider as well */
    slider.style.left = `${xPos}px`;

    if(xPos<100){
        before.style.width = 0;
        slider.style.left = 0;
    }
    if(xPos+100 > size){
        before.style.width = `${size}px`;
        slider.style.left = `${size}px`; 
    }
    /* to do it for other side, we need to get the width of the image using javascript because the image width keeps changing depending on the device */
}

container.addEventListener('mousemove', drag);