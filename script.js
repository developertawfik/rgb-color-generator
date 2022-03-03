window.onload = () => {
    main()
}
function main() {
    var btn = document.getElementById("btn");
    var body = document.getElementById("root");
    btn.addEventListener("click", function () {
        var bgColor = rgbColorGenerator();
        console.log(bgColor)
        body.style.backgroundColor = bgColor;
        

    })
}

function rgbColorGenerator() {
    var red = Math.floor(Math.random() * 255)
    var green = Math.floor(Math.random() * 255)
    var blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`;
}