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

$(document).on("click", ".crystalbtn", function (e) {
  e.preventDefault();
  // var contactBudagi = db.ref("/ContactUs/")
  var myname =  $(".crystalname").val()
  var comment =  $(".crystalcomment").val()
  if(($(".crystalname").val()) && ($(".crystalcomment").val())){
    pushContactDB(myname, comment)
  }
});
function pushContactDB(myname, comment) {
    db.ref("/crystalgame/").push().set({
      myname, comment
    })
    $(".crystalname").val("")
    $(".crystalcomment").val("")
}


db.ref("/crystalgame/").on("value", function(snap){
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
    commentall = $("#allcommentcrystal")
    console.log(commentall)
    commentall.html(
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


class Container{
    allBtn = {
        blue: {
            color: "blue",
            value: 0
        },
        green: {
            color: "green",
            value: 0
        },
        red: {
            color: "red",
            value: 0
        },
        yellow: {
            color: "yellow",
            value: 0
        }
    }
    win = 0
    lose = 0
    chosedNumbers = 0
    allNumbers = 0
    targetNum = null


    constructor(a,b,c,d,e){
        // a = this.random(1,10)
        // b = this.random(1,10)
        // c = this.random(1,10)
        // d = this.random(1,10)
        this.allBtn.blue.value = a
        this.allBtn.green.value = b
        this.allBtn.red.value = c
        this.allBtn.yellow.value = d
        this.targetNum = e
    }

    yoxlama(){
        if(startGame.allNumbers == startGame.targetNum){
            startGame.win++
            console.log(startGame.win)
            document.querySelector("#win-count").innerHTML = startGame.win
            this.allBtn.blue.value = random(1,10)
            this.allBtn.green.value = random(1,10)
            this.allBtn.red.value = random(1,10)
            this.allBtn.yellow.value = random(1,10)
            this.targetNum = random(80,200)
            document.querySelector("#target-score").innerHTML = this.targetNum
            this.allNumbers = 0
            document.querySelector("#your-score").innerHTML = this.allNumbers
            // startGame.compare()
        }
        if(startGame.allNumbers > startGame.targetNum){
            startGame.lose++
            console.log(startGame.lose)
            document.querySelector("#loss-count").innerHTML = startGame.lose
            this.targetNum = random(80,150)
            document.querySelector("#target-score").innerHTML = this.targetNum
            this.allNumbers = 0
            document.querySelector("#your-score").innerHTML = this.allNumbers
            this.allBtn.blue.value = random(1,10)
            this.allBtn.green.value = random(1,10)
            this.allBtn.red.value = random(1,10)
            this.allBtn.yellow.value = random(1,10)
            // startGame.compare()
        }
    }
}

random = function(min, max) {
    var randomNum = Math.floor( Math.random() * (max-min)) + min;
    return randomNum
};



let startGame = new Container(random(1,10),random(1,10),random(1,10),random(1,10),random(80,150))


document.querySelector("#target-score").innerHTML = startGame.targetNum
document.querySelector("#your-score").innerHTML = 0

startGame.compare = function(){
        blueCry = document.querySelector(".blue")
        blueCry.addEventListener("click", function(){
            startGame.allNumbers += startGame.allBtn.blue.value
            document.querySelector("#your-score").innerHTML = startGame.allNumbers
            startGame.yoxlama()
        })
        greenCry = document.querySelector(".green")
        greenCry.addEventListener("click", function(){
            startGame.allNumbers += startGame.allBtn.green.value
            document.querySelector("#your-score").innerHTML = startGame.allNumbers
            startGame.yoxlama()
        })
        redCry = document.querySelector(".red")
        redCry.addEventListener("click", function(){
            startGame.allNumbers += startGame.allBtn.red.value
            document.querySelector("#your-score").innerHTML = startGame.allNumbers
            startGame.yoxlama()
        })
        yellowCry = document.querySelector(".yellow")
        yellowCry.addEventListener("click", function(){
            startGame.allNumbers += startGame.allBtn.yellow.value
            document.querySelector("#your-score").innerHTML = startGame.allNumbers
            startGame.yoxlama()
        })
    
        
}

startGame.compare()