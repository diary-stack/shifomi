const choises = document.querySelectorAll(".container >div> i")
const res = document.querySelector(".res")
const resBot = document.querySelector(".bot")
const score = document.querySelector(".score")
const resScore = document.querySelector(".res-score")
const resScoreBot = document.querySelector(".res-score-bot")

const randomNumber = () => {
    return Math.floor(Math.random() * 3) 
}
let type = [
    `<i class="far fa-hand-paper"></i>`,
    `<i class="far fa-hand-peace"></i>`,
    `<i class="far fa-hand-rock"></i>`
]

console.log(type[randomNumber()]);

choises.forEach((choise, index) => {
    choise.addEventListener("click", ()=> {
        switch (index) {
            case 0: {
                res.innerHTML = `<i class="far fa-hand-paper"></i>`
                break;    
            }
            case 1: {
                res.innerHTML = `<i class="far fa-hand-peace"></i>`
                break;    
            }
            case 2: {
                res.innerHTML = `<i class="far fa-hand-rock"></i>`
                break;    
            }
        }
        const choiseHandBot = () => {
            // res.innerHTML += `${choises[randomNumber()]}`  
            // resBot.innerHTML = choises[`${randomNumber()}`] 
            resBot.innerHTML = type[randomNumber()]
        }
        choiseHandBot()
        scores()
    })
});
 
let i = 1
let j = 1

const scores = () => {
    if ((res.innerHTML == `<i class="far fa-hand-paper"></i>`) && (resBot.innerHTML == `<i class="far fa-hand-peace"></i>`)) {
        resScoreBot.textContent = i++
    }else if ((resBot.innerHTML == `<i class="far fa-hand-paper"></i>`) && (res.innerHTML == `<i class="far fa-hand-rock"></i>`)) {
        resScoreBot.textContent = i++
    }else if ((res.innerHTML == `<i class="far fa-hand-peace"></i>`) && (resBot.innerHTML == `<i class="far fa-hand-rock"></i>`)) {
        resScoreBot.textContent = i++
    }else if ((resBot.innerHTML == `<i class="far fa-hand-paper"></i>`) && (res.innerHTML == `<i class="far fa-hand-peace"></i>`)) {
        resScore.textContent = j++
    }else if ((res.innerHTML == `<i class="far fa-hand-paper"></i>`) && (resBot.innerHTML == `<i class="far fa-hand-rock"></i>`)) {
        resScore.textContent = j++
    }else if ((resBot.innerHTML == `<i class="far fa-hand-peace"></i>`) && (res.innerHTML == `<i class="far fa-hand-rock"></i>`)) {
        resScore.textContent = j++
    }
}


