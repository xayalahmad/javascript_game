
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