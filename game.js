// JavaScript source code
class Balloon {
    constructor() {
        this.x = random(width)
        this.y = random(height)
        this.r = 15
        this.vx = 0
        this.vy = 0

        this.col = color(random(255), random(255), random(255))
        this.popped = false
    }

    blowAway() {
        if (!this.popped) {
            //calculate the blow away force    
            let d = dist(this.x, this.y, mouseX, mouseY)
            let force = d < height / 2 ? -10 / (d * d) : 0
            //apply the force to the existing velocity    
            this.vx += force * (mouseX - this.x)
            this.vy += force * (mouseY - this.y)
            //also add some friction to take energy out of the system    
            
        }

        this.vx *= 0.95
        this.vy *= 0.95
        //update the position    
        this.x += this.vx
        this.y += this.vy

    }

    checkBounds() {
        //make balloon wrap to the other side of the canvas    
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
    }

    checkToPop() {
        if (!this.popped && dist(this.x, this.y, mouseX, mouseY) < this.r)
        {
            this.popped = true
            let currScore = Number(document.getElementById("score").innerHTML)
            currScore++
            document.getElementById("score").innerHTML = currScore
            this.col = color(156)

            popSfx.play()
        }
    }
}

let balloons = []
const num_of_balloons = 25
let popSfx

function preload() {
    soundFormats('wav')
    popSfx = loadSound("./pop")
}

function setup() {
    let canvas = createCanvas(640, 480)
    canvas.parent("gameContainer")

    for (let i = 0; i < num_of_balloons; i++) {
        balloons[i] = new Balloon()
    }
}

function draw() {
    //a nice sky blue background    
    background(135, 206, 235)

    for (let i = 0; i < num_of_balloons; i++) {
        fill(balloons[i].col)
        circle(balloons[i].x, balloons[i].y, balloons[i].r)
        balloons[i].blowAway
        balloons[i].checkBounds
        balloons[i].checkToPop

    }
}

