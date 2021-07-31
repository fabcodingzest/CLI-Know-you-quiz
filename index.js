const readlineSync = require("readline-sync");
const chalk = require('chalk');

let score = 0;
const username = readlineSync.question("What is your name? \n")
const start = () => {
  console.log(`\nHello! Welcome to ${chalk.blue.bold.bgYellowBright(' How well do you know Fab ')}, ${username}! \n`)
}



const questionAnswer = [
  {
    question: "What is my full name? \n",
    answer: "Fabeha Rizvi",
    keyword: "Full Name",
    type: "question",
  },
  {
    question: "Is my favourite animal panda? \n",
    answer: "Panda",
    keyword: "Favourite Animal",
    type: "y/n"
  },
  {
    question: "What is my favourite food? \n",
    answer: "White Sauce Pasta",
    keyword: "Favourite Food",
    type: "mcq",
    options: ["Pizza", "White Sauce Pasta", "Shawarma"]
  },
  {
    question: "Which country was I born in? \n",
    answer: "India",
    keyword: "Origin Country",
    type: "question"
  },
]

const game = () => {
  const rightAnswerReaction = chalk.greenBright('\nAyeeeeee, You are right!')
  const wrongAnswerReaction = (key) => chalk.red(`\nAw, you don't even know my ${key} 🥺?`)

  questionAnswer.forEach(obj => {
    
    if(obj.type === "mcq"){
    const indexOfRightAnswer = readlineSync.keyInSelect(obj.options, obj.question)
      if(obj.options[indexOfRightAnswer] === obj.answer){
        console.log(rightAnswerReaction)
        score += 5;
      } else {
        console.log(wrongAnswerReaction(obj.keyword))
      }
    } else if (obj.type === "question"){
      const answer = readlineSync.question(obj.question)
      if(answer.toUpperCase() === obj.answer.toUpperCase()){
        console.log(rightAnswerReaction)
        score+=5;
      } else {
        console.log(wrongAnswerReaction(obj.keyword))
      }
    } else if (obj.type === "y/n"){
      const rightOrWrong = readlineSync.keyInYN(obj.question)
      if(rightOrWrong){
        console.log(rightAnswerReaction)
        score += 5;
      } else {
        console.log(wrongAnswerReaction(obj.keyword))
      }
    }

    console.log(chalk.cyanBright(`Current score is: ${chalk.yellow(score)} \n`))

  })
}

const highScores = [
  {
    name: 'Fab',
    score: 15
  },
  {
    name: 'Riz',
    score: 10
  },
]

const calcHighestScore = () => {
  console.log(chalk.redBright(`Your total score is: ${chalk.yellowBright(score)}\n`))
  let highScore = 0;
  let tieMsg;
  console.log(chalk.black.bgWhite('Score Table: '))
  console.log(`${chalk.blueBright(username)}: ${chalk.redBright(score)}`)
  highScores.forEach(item => {
    console.log(`${chalk.blueBright(item.name)}: ${chalk.redBright(item.score)}`)
    if(highScore < item.score) {
      highScore = item.score
    }
    
  })
  if(score === highScore){
    console.log(`${chalk.yellowBright('Oh, its a tie! Congrats for having highest score ❤️')}`)
  } else if(score > highScore){
    highScore = score
    console.log(`${chalk.yellowBright('Ayeeeeee, you got the highest Score ❤️')}`)
  } else {
    console.log(`${chalk.yellowBright('Ayeeeeee, better luck next time ❤️')}`)
  }

}


start()
game();
calcHighestScore()