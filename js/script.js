document.addEventListener('DOMContentLoaded', () => {

    const boxes = document.querySelectorAll('.box:not(.legend-box)');

    boxes.forEach(box => {

        let colorState;
        if (box.classList.contains('red')) {
            colorState = 2; 
        } else if (box.classList.contains('yellow')) {
            colorState = 1; 
        } else {
            colorState = 0;
        }

        box.addEventListener('click', () => {
            colorState = (colorState + 1) % 3;

            if (colorState === 0) {
                box.style.backgroundColor = 'green';
            } else if (colorState === 1) {
                box.style.backgroundColor = 'orange';
            } else if (colorState === 2) {
                box.style.backgroundColor = 'red';
            }
        });
    });
});
