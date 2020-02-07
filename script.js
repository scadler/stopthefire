

  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
$("#gameStart").click(function(){
    clearBoard();
    
});

function startFires() {
    var i = 0;
    while (i < 5) {
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
            $("#s" + xyCoor).append(`<p class="fire" id=${xyCoor}>fire</p>`);
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
    populateBoard()
    
}
function populateBoard(){
     var a = 0;
    while( a < 46){
        a = a +1;
        var ran = Math.floor(Math.random()*4)
        if( ran === 1){
            //put tree images here and below
            $("#s"+a).append(`<img class="img" src=https://i.imgur.com/a8NkZqg.jpg">`);
        }
        else if( ran === 2){
            $("#s"+a).append(`<img class="img" src="https://i.imgur.com/kQCp4an.jpg">`);
        }
        else if( ran === 3){
            
        }
        else{

        }
    }
    startFires();
}