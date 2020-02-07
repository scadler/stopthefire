import Question from Question.js;
$("#modal").hide();
$("#statsP").hide();

// $(".question").text(data[Math.floor(Math.random() * 2].question);
$(".forestTile").click(function() {
    var Id = $(this).attr('id');
    if($("#"+Id).contents().hasClass('fire') === true){
    $("#modal").show();
    $("#forest").css("opacity", 0.5);
    }
});

var inprogress = false
$("#gameStart").click(function(){
    $("#gameStart").hide();
    $("#statsP").show();
    clearBoard();
    inprogress = true;
    $("#fireCounter").text("0")
});

function startFires() {
    var i = 0;
    while (i < 5) {
        var fireType = Math.floor(Math.random() * 2);
        var xCoor = (Math.floor((Math.random() * 4)) * 10);
        var yCoor = (Math.floor((Math.random() * 9)));
        var xyCoor = Number(xCoor + yCoor);
        console.log(xyCoor)
        if ($("#s" + xyCoor).contents().attr('class') === "fire") {
            i = i - 1;
        }
        else if(xyCoor > 46){
            i = i -1;
        }
        else {
            if(fireType === 0){
                $("#s" + xyCoor).append(`<img class="fire" id=${xyCoor} src="https://imgur.com/PLr4070.jpg">`);
            }
            else if(fireType === 1){
                $("#s" + xyCoor).append(`<img class="fire" id=${xyCoor} src="https://imgur.com/ZFYKZ89.jpg">`);
            }
        }
        i = i + 1;
    }
}
function clearBoard(){
    var i = 0;
    while (i < 46) {
        i = i+1;
        $("#s" + i).empty();
    }
    populateBoard();
}
function populateBoard(){
     var a = 0;
    while( a < 46){
        a = a +1;
        var ran = Math.floor(Math.random()*4)
        if( ran === 1){
            //put tree images here and below
            $("#s"+a).append(`<img class="tree" src=https://i.imgur.com/a8NkZqg.jpg">`);
        }
        else if( ran === 2){
            $("#s"+a).append(`<img class="tree" src="https://i.imgur.com/kQCp4an.jpg">`);
        }
        else if( ran === 3){
            $("#s"+a).append(`<img class="tree" src="https://imgur.com/DAN5Pm5.jpg">`);
        }
        else{
            $("#s"+a).append(`<img class="tree" src="https://imgur.com/YpoTQFW.jpg">`);

        }
    }
    startFires();
}

setInterval(function(){
    if(inprogress === true){
    var b = 0;
    while (b < 1) {
        var newFireType = Math.floor(Math.random() * 2);
        var x = (Math.floor((Math.random() * 4)) * 10);
        var y = (Math.floor((Math.random() * 9)));
        var xy = Number(x + y);
        if ($("#s" + xy).contents().hasClass('fire') === true) {
            b = b-1;
        }
        else if(xy > 46){
            b = b-1;
        }
        else {
            if(newFireType === 0){
                $("#s" + xy).append(`<img class="fire" id=${xy} src="https://imgur.com/PLr4070.jpg">`);
            }
            else if(newFireType === 1){
                $("#s" + xy).append(`<img class="fire" id=${xy} src="https://imgur.com/ZFYKZ89.jpg">`);
            }
            var newFireCounter = Number($("#fireCounter").text()) + 1;
            $("#fireCounter").text(newFireCounter)
            if(newFireCounter >=11){
                inprogress = false;
                $("#gameStart").show();
                $("#statsP").hide();
            }
        }
        b = b+1;
    }
}
}, 500)