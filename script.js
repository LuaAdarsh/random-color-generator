document.addEventListener('DOMContentLoaded', ()=> {

    const refreshBtn = document.getElementById('refresh-btn');
    const box = document.querySelectorAll('.colors');
    let colorCode = document.querySelectorAll('#colorCode');

    box.forEach((colors) => {
        colors.style.backgroundColor = RandomColorsGenerator();
        colors.querySelector('h3').textContent = RandomColorsGenerator();
        colors.addEventListener('click', () => {
    let currentColor = colors.style.backgroundColor;
    navigator.clipboard.writeText(currentColor)
        .then(() => {
            let originalText = colors.textContent;
            colors.textContent = 'Copied!';
            setTimeout(() => {
                colors.textContent = originalText;
            }, 800);
        });
});
    });

    refreshBtn.addEventListener('click', ()=> {
        box.forEach((colors) => {
            let hexcodes = RandomColorsGenerator();
            colors.style.backgroundColor = hexcodes;
            colors.querySelector('h3').textContent = hexcodes;
            colors.addEventListener('click', () => {
    let currentColor = colors.style.backgroundColor;
    navigator.clipboard.writeText(currentColor)
        .then(() => {
            let originalText = colors.textContent;
            colors.textContent = 'Copied!';
            setTimeout(() => {
                colors.textContent = originalText;
            }, 800);
        });
});
        });
    });

    function RandomColorsGenerator () {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
});