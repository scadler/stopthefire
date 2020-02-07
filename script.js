$("#modal").hide();
$("#modal1").hide();
$("#modal2").hide();
let data = getData();
$("#statsP").hide();

var array = []
appendQuestions();
function appendQuestions() {
    let index = Math.floor(Math.random()*10);
    $("#questions").text(data[index].question);
    for(let i=0; i<4; i++) {
        $("#answers"+i).text(data[index].options[i]);
    }
     $(".ans").click(function(){
         $("#modal").hide();
        var thisText = $(this).text();
    console.log(thisText)
    if(data[index].answer === thisText){
        var fire = array[0]
        array.shift();
        $(fire).remove();
        if(array.length() === 0){
            inprogress = false;
        }

    }
    else{
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
            array.push("#f"+xyCoor);
                $("#s" + xyCoor).append(`<img class="fire" id=f${xyCoor} src="https://imgur.com/PLr4070.jpg">`);
                var newFireCounter = Number($("#fireCounter").text()) + 1;
            $("#fireCounter").text(newFireCounter)
            if(newFireCounter >=11){
                inprogress = false;
                $("#gameStart").show();
                $("#statsP").hide();
            }
    }
}
});
}


$(".quit").click(function(){
    $("#modal").hide();
    appendQuestions();
})




$(".forestTile").click(function() {
    var Id = $(this).attr('id');
    console.log(Id)
    var object = {
        id: Id,
}
    if($("#"+Id).contents().hasClass('fire') === true){
        $("#modal").show();
        // $("#forest").css("opacity", 0.5);
    }
});
$("#statsP").hide();
var inprogress = false;
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
            array.push("#f"+xyCoor);
            if(fireType === 0){
                $("#s" + xyCoor).append(`<img class="fire" id=f${xyCoor} src="https://imgur.com/PLr4070.jpg">`);
            }
            else if(fireType === 1){
                $("#s" + xyCoor).append(`<img class="fire" id=f${xyCoor} src="https://imgur.com/ZFYKZ89.jpg">`);
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
            array.push("#f"+xy);
            if(newFireType === 0){
                $("#s" + xy).append(`<img class="fire" id=f${xy} src="https://imgur.com/PLr4070.jpg">`);
            }
            else if(newFireType === 1){
                $("#s" + xy).append(`<img class="fire" id=f${xy} src="https://imgur.com/ZFYKZ89.jpg">`);
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
}, 7500)
function getData(){
    let data = 
[ { question: "How many types of wildfires are there?",
    answer: 2,
    options: ["2","3","4","1"]
    },

  { question: "What purposely causes fires?",
    answer: "humans",
    options: ["humans","animals","weather","insects"]
  },
   { question: "How hot are wildfires?",
    answer: "1,472F",
    options: ["1,472F","1,682F","1,936F","2,125F"]
},
   { question: "What's the purpose of a prescribed fire?",
    answer: "restore ecosystem health and recycle nutrients",
    options: ["restore ecosystem health and recycle nutrients","to burn all the trees down","help animals improve their environment","create a better forest"]
},
  { question: "How do wildfires affect the soil",
    answer: "They can burn the nutrients in the soil",
    options: ["They can burn the nutrients in the soil","the soil will disappear","it can help plants grow faster","it can harm humans"]
  },
  { question: "Will it harm the forest if the largest dead trees are removed?",
    answer: "Yes may impact the wildlife and affect how the forest recovers",
    options: ["Yes may impact the wildlife and affect how the forest recovers","No, they're just taking up space","Yes, it can affect the air","No, they're not as useful anymore since they're dead"]
},
{  question: "How many wildfires occured in Calilforia in 2019?",
    answer: "7,860",
    options: ["7,860", "10,568","4,589","8,129"]
},
{
    question: "What causes wildfires naturally?",
    answer: "lightning",
    options: ["lightning","fog","hail","nothing"]
},
{
 question: "How can you survive a wildfire?",
    answer: "jump in a lake or river",
    options: ["jump in a lake or river","wait until it clears out","stay and burn","rub your burning body against a wall"]
},
{
    question: "What percentage of forest fires are caused by humans?",
    answer: "85%",
    options: ["85%","87%","90%","78%"],
},  
];
    return data
}
// function gamewin{
//  $("#models1").show
// }


// function myalert() {
//     alert("Can't save the forest in game? Do it https://northlab.faculty.ucdavis.edu/wp-content/uploads/sites/195/2016/02/Forest-Fires-Answers-to-12-Common-Questions-2.pdf");
// }

// function myalert() {
// alert("Congratulations! you are an expert. On more information, https://www.doi.gov/blog/7-burning-questions-wildfires-public-lands")
 // }
 