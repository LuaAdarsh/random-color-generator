document.addEventListener('DOMContentLoaded', ()=> {

    const refreshBtn = document.getElementById('refresh-btn');
    const box = document.querySelectorAll('.colors');
    const toast = document.getElementById('toast');

    box.forEach((colors) => {
        let hexcodes = RandomColorsGenerator();
        colors.style.backgroundColor = hexcodes;
        colors.querySelector('h3').textContent = hexcodes;
    });

    refreshBtn.addEventListener('click', ()=> {
        box.forEach((colors) => {
            let hexcodes = RandomColorsGenerator();
            colors.style.backgroundColor = hexcodes;
            colors.querySelector('h3').textContent = hexcodes;
        });
    });

    box.forEach((colors) => {
        colors.addEventListener('click', () => {
            let hexValue = colors.querySelector('h3').textContent;

            navigator.clipboard.writeText(hexValue)
                .then(() => {
                    showToast(`Copied ${hexValue}!`);
                })
                .catch((err) => {
                    console.error('Copy failed:', err);
                });
        });
    });

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 1500);
    }

    function RandomColorsGenerator () {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
});