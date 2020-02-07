function startFires() {
    var i = 0;
    while (i < 5) {
        var xCoor = (Math.floor((Math.random() * 7)) * 10);
        var yCoor = (Math.floor((Math.random() * 7)));
        var xyCoor = Number(xCoor + yCoor);
        if ($("#s" + xyCoor).contents().attr('class') === "fire") {
            i = i - 1;
        } else {
            $("#s" + xyCoor).append(`<p class="fire" id=${xyCoor}>fire</p>`);
        }
        i = i + 1;
    }
}
startFires();