function showText(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

showText("Hello", 1000);
showText("World", 2000);