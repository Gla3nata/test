var pictures = [
        "img/slider/ipwnn.jpg",
        "img/slider/lakes.jpg",
        "img/slider/maxresdefault.jpg",
        "img/slider/priroda.jpg",
        "img/slider/gste4.jpg"
    ];

var currentPosition = 0;
var maxIndex = pictures.length - 1;

var img = document.querySelector('#picture');
img.src = pictures[currentPosition];

var left = document.querySelector('#left');
left.onclick = changePicture;

var right = document.querySelector('#right');
right.onclick = changePicture;

let pagination = document.querySelector(".carusel-pagination");

for (let pos = 0; pos < pictures.length; pos++) {
    let link = document.createElement("a");
    link.className = 'carusel-pagination-item'
    link.onclick = () => changeClass(pos);
    pagination.appendChild(link);
}
changeClass(0);

function changePicture(event) {
    switch (event.target) {
        case left:
            currentPosition = currentPosition - 1 < 0 ? maxIndex : currentPosition - 1;
            break;
        case right:
            currentPosition = currentPosition + 1 > maxIndex ? 0 : currentPosition + 1;
            break;
    }
    img.src = pictures[currentPosition];
    changeClass(currentPosition);
}

function changeClass(pos) {
    currentPosition = pos;

    let values = pagination.getElementsByTagName("a");
    for (let i = 0; i < values.length; i++) {
        values[i].className = i !== pos ? 'carusel-pagination-item' : 'carusel-pagination-active';
    };

    img.src = pictures[currentPosition];
}
