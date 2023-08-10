function intervalOutputNumbers(a, b) {
    let i = +a;

    let intervalId = setInterval(function () {
        if (i <= +b) {
            console.log(i);
            i++;
        }
        else clearInterval(intervalId);
    }, 1000);
}

intervalOutputNumbers(prompt(), prompt())