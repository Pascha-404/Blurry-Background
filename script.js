const bg = document.querySelector('#bg');
const load = document.querySelector('.load');
const shuttle = document.querySelector('.shuttle');

let loaded = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

let interval = setInterval(loadPage, 30);

function loadPage() {
    loaded++;

    if (loaded > 99) {
        clearInterval(interval)
    }
    if (loaded > 15) {
        shuttle.classList.add('active');
    }
    load.textContent = `${scale(loaded, 0, 100, 0, 100)}%`;
    bg.style.filter = `blur(${scale(loaded, 0, 100, 30, 0)}px)`;
    load.style.opacity =
        scale(loaded, 0, 100, 1, 0);
    shuttle.style.opacity =
        scale(loaded, 0, 100, 1, 0);
}