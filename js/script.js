document.addEventListener('DOMContentLoaded', () => {
    // Selecione todas as caixas, exceto aquelas com a classe 'legend-box'
    const boxes = document.querySelectorAll('.box:not(.legend-box)');

    boxes.forEach(box => {
        // Defina a cor inicial com base na classe existente
        let colorState;
        if (box.classList.contains('red')) {
            colorState = 2; // Inicialmente vermelho
        } else if (box.classList.contains('yellow')) {
            colorState = 1; // Inicialmente laranja
        } else {
            colorState = 0; // Inicialmente verde ou outro estado
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
