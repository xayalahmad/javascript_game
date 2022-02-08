const firebaseConfig = {
    apiKey: "AIzaSyDc08UKhWanDLZ8wL9ref6dih1kc3-CIco",
    authDomain: "javascriptgame-d2013.firebaseapp.com",
    databaseURL: "https://javascriptgame-d2013-default-rtdb.firebaseio.com/",
    
    projectId: "javascriptgame-d2013",
    storageBucket: "javascriptgame-d2013.appspot.com",
    messagingSenderId: "720121614792",
    appId: "1:720121614792:web:5c0db97d4a192a9fdff0fd"
  };

//   Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.database()

  let globalData = null;

$(document).on("click", ".questiongamebtnrsp", function (e) {
  e.preventDefault();
  // var contactBudagi = db.ref("/ContactUs/")
  var myname =  $(".questiongamename").val()
  var comment =  $(".questiongamecommentrsp").val()
  if(($(".questiongamename").val()) && ($(".questiongamecommentrsp").val())){
    pushContactDB(myname, comment)
  }
});
function pushContactDB(myname, comment) {
    db.ref("/rspgame/").push().set({
      myname, comment
    })
    $(".questiongamename").val("")
    $(".questiongamecommentrsp").val("")
}


db.ref("/rspgame/").on("value", function(snap){
    var snapVal = snap.val()
    var snapArray = Object.entries(snapVal).map((q)=>{
      // for(i=0;i<q.length;i++){
        snapObject = {
          id: q[0],
          ...q[1]
        }
      // }
      return snapObject
    })
    console.log(snapArray)
    commentallrsp = $("#allcommentrsp")
    console.log(commentallrsp)
    commentallrsp.html(
      snapArray.map((q)=>{
        console.log(q)
        return `
                        <div class="border p-4 d-flex mb-3">
                        <img  style="width: 60px; height: 60px;" src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg" alt="">
                        <div>
                            <div class="container commentname h4 textmaincoloryellow">${q.myname}</div>
                            <div class="container commentcomment text-white">${q.comment}</div>
                        </div>
                    </div>
        `
      })
    )
  })





var gameData = ["r", "s", "p"]
var player1Score = 0
var player2Score = 0
var player1Choice = document.querySelector("#player1img")
var player2Choice = document.querySelector("#player2img")
var playerScorePanel1 = document.querySelector("#player1ScorePanel")
var playerScorePanel2 = document.querySelector("#player2ScorePanel")
var winorlosePlayer1 = document.querySelector("#player1winorlose")
var winorlosePlayer2 = document.querySelector("#player2winorlose")

function randomCompAttack(array){
    var randomNum = Math.floor(Math.random() * gameData.length) 
    return array[randomNum]
}


function startGame(e){
    var userAttack = e.key.toLowerCase()
    var compAttack = randomCompAttack(gameData).toLowerCase()
    
    console.log(userAttack)
    console.log(compAttack)

    player1Choice.src = `./img/${userAttack}.png`
    player2Choice.src = `./img/${compAttack}.png`
    if(gameData.indexOf(userAttack) === -1){
        alert("Please choose R, S, P key press")
        return
    }


    if(userAttack === compAttack){
        console.log("-----")
        console.log("Draf")
        winorlosePlayer1.innerHTML = `DRAF`
        winorlosePlayer2.innerHTML = `DRAF`
        winorlosePlayer1.style.color = "yellow"
        winorlosePlayer2.style.color = "yellow"
    }else if(userAttack === "s" && compAttack === "p"){
        console.log("-----")
        console.log("Player 1 win")
        player1Score++
        playerScorePanel1.innerHTML = `Score: ${player1Score}`
        winorlosePlayer1.innerHTML = `WIN`
        winorlosePlayer1.style.color = "#00bf00"
        winorlosePlayer2.innerHTML = `LOSE`
        winorlosePlayer2.style.color = "red"

    }else if(userAttack === "p" && compAttack === "r"){
        console.log("-----")
        console.log("Player 1 win")
        player1Score++
        playerScorePanel1.innerHTML = `Score: ${player1Score}`
        winorlosePlayer1.innerHTML = `WIN`
        winorlosePlayer1.style.color = "#00bf00"
        winorlosePlayer2.innerHTML = `LOSE`
        winorlosePlayer2.style.color = "red"
    }else if(userAttack === "r" && compAttack === "s"){
        console.log("-----")
        console.log("Player 1 win")
        player1Score++
        playerScorePanel1.innerHTML = `Score: ${player1Score}`
        winorlosePlayer1.innerHTML = `WIN`
        winorlosePlayer1.style.color = "#00bf00"
        winorlosePlayer2.innerHTML = `LOSE`
        winorlosePlayer2.style.color = "red"
    }else{
        console.log("-----")
        console.log("Player 2 win")
        player2Score++
        playerScorePanel2.innerHTML = `Score: ${player2Score}`
        winorlosePlayer1.innerHTML = `LOSE`
        winorlosePlayer2.innerHTML = `WIN`
        winorlosePlayer1.style.color = "red"
        winorlosePlayer2.style.color = "#00bf00"

    }
   
}




window.onkeypress = startGame



