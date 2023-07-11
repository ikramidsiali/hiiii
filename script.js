const landingPage= document.querySelector(".landing");
const Vocabulary= document.querySelector(".vocabulary");
const Speaking= document.querySelector(".speaking");
const Grammar= document.querySelector(".grammar");
const testGrammar= document.querySelector(".testOfGrammar");
const learning= document.querySelector(".learnings");
const Varieties= document.querySelector(".Variety");
const color= document.querySelector(".colors");
const organ= document.querySelector(".organs");
const fruit= document.querySelector(".fruits");
const vegetable= document.querySelector(".vegetables");
const food= document.querySelector(".foods");
const health= document.querySelector(".Health");
const weather= document.querySelector(".Weather");
const job= document.querySelector(".jobs");
const math= document.querySelector(".maths");
const kitchen= document.querySelector(".kitchenTools");
const clothes= document.querySelector(".Clothes");
const home= document.querySelector(".homes");
const familyMember= document.querySelector(".familyMembers");
const school= document.querySelector(".schools");
const animal= document.querySelector(".animals");
const publicPlaces= document.querySelector(".publicPlace");
const Nature= document.querySelector(".nature");
const road= document.querySelector(".roads");
const sport= document.querySelector(".sports");
const calendar= document.querySelector(".calendars");
const emotion= document.querySelector(".emotions");
const celebration= document.querySelector(".celebrations");
const electronic= document.querySelector(".electronics");
const tool= document.querySelector(".tools");


function seeCategory(getCategory)  {
    landingPage.classList.add("hide");
    getCategory.classList.remove("hide"); }

    
function showCategory(getCategory)  {
    Vocabulary.classList.add("hide");
    getCategory.classList.remove("hide"); }

function gotoHome()  {
    landingPage.classList.remove("hide"); 
    Vocabulary.classList.add("hide");
    Speaking.classList.add("hide");
    Grammar.classList.add("hide");
    color.classList.add("hide");
    organ.classList.add("hide");
    fruit.classList.add("hide");
    vegetable.classList.add("hide");
    food.classList.add("hide");
    weather.classList.add("hide");
    calendar.classList.add("hide");
    animal.classList.add("hide");
    kitchen.classList.add("hide"); 
    health.classList.add("hide");
    Nature.classList.add("hide");
    clothes.classList.add("hide");
    home.classList.add("hide");
    familyMember.classList.add("hide");
    sport.classList.add("hide");
    job.classList.add("hide");
    road.classList.add("hide");
    math.classList.add("hide");
    school.classList.add("hide");
    publicPlaces.classList.add("hide");
    emotion.classList.add("hide");
    celebration.classList.add("hide");
    tool.classList.add("hide");
    electronic.classList.add("hide");
    Varieties.classList.add("hide");
    learning.classList.add("hide");
    testGrammar.classList.add("hide");
}

function gotoVocabulary()  {
    landingPage.classList.add("hide"); 
    Vocabulary.classList.remove("hide");
    color.classList.add("hide");
    organ.classList.add("hide");
    fruit.classList.add("hide");
    vegetable.classList.add("hide");
    food.classList.add("hide");
    weather.classList.add("hide");
    calendar.classList.add("hide");
    animal.classList.add("hide");
    kitchen.classList.add("hide"); 
    health.classList.add("hide");
    Nature.classList.add("hide");
    clothes.classList.add("hide");
    home.classList.add("hide");
    familyMember.classList.add("hide");
    sport.classList.add("hide");
    job.classList.add("hide");
    road.classList.add("hide");
    math.classList.add("hide");
    school.classList.add("hide");
    publicPlaces.classList.add("hide");
    emotion.classList.add("hide");
    celebration.classList.add("hide");
    tool.classList.add("hide");
    electronic.classList.add("hide");
}

    /*COLORS */
/*COLORS #00a09d */
const red = new Audio();      red.src = "audios/red.m4a"; 
const pink = new Audio();   pink.src = "audios/pink.m4a";
const gold = new Audio();   gold.src = "audios/gold.m4a";
const yellow = new Audio();    yellow.src = "audios/yellow.m4a";
const orange = new Audio();   orange.src = "audios/orange.m4a";
const green = new Audio();    green.src = "audios/green.m4a";
const blue = new Audio();     blue.src = "audios/blue.m4a";
const purple = new Audio();     purple.src = "audios/purple.m4a";
const brown = new Audio();   brown.src = "audios/brown.m4a";
const white = new Audio();   white.src = "audios/white.m4a";
const silver = new Audio();   silver.src = "audios/silver.m4a";
const gray = new Audio();   gray.src = "audios/gray.m4a";
const black = new Audio();   black.src = "audios/black.m4a";
const scarlet = new Audio();   scarlet.src = "audios/scarlet.m4a";
const salmon = new Audio();   salmon.src = "audios/salmon.m4a";
const ivory = new Audio();   ivory.src = "audios/ivory.m4a";
const beige = new Audio();   beige.src = "audios/beige.m4a";
const mustard = new Audio();   mustard.src = "audios/mustard.m4a";
const emerald = new Audio();   emerald.src = "audios/emerald.m4a";
const teal = new Audio();   teal.src = "audios/teal.m4a";
const turquoise = new Audio();   turquoise.src = "audios/turquoise.m4a";
const maroon = new Audio();   maroon.src = "audios/maroon.m4a";
const lavender = new Audio();   lavender.src = "audios/lavender.m4a";
const violet = new Audio();   violet.src = "audios/violet.m4a";
const fuchsia = new Audio();   fuchsia.src = "audios/fuchsia.m4a";
const indigo = new Audio();   indigo.src = "audios/indigo.m4a";
const navy = new Audio();   navy.src = "audios/navy.m4a";
/*organs*/
const brain = new Audio();   brain.src = "audios/brain.m4a";
const eyes = new Audio();   eyes.src = "audios/eyes.m4a";
const teeth = new Audio();   teeth.src = "audios/teeth.m4a";
const liver = new Audio();   liver.src = "audios/liver.m4a";
const kidney = new Audio();   kidney.src = "audios/kidney.m4a";
const largeIntestine = new Audio();   largeIntestine.src = "audios/largeIntestine.m4a";
const heado = new Audio();   heado.src = "audios/head.m4a";
const ears = new Audio();   ears.src = "audios/ears.m4a";
const lungs = new Audio();   lungs.src = "audios/lungs.m4a";
const heart = new Audio();   heart.src = "audios/heart.m4a";
const stomach = new Audio();   stomach.src = "audios/stomach.m4a";
const smallIntestine = new Audio();   smallIntestine.src = "audios/smallIntestine.m4a";
const neck = new Audio();   neck.src = "audios/neck.m4a";
const chest = new Audio();   chest.src = "audios/chest.m4a";
const nipples = new Audio();   nipples.src = "audios/nipples.m4a";
const navel = new Audio();   navel.src = "audios/navel.m4a";
const thigh = new Audio();   thigh.src = "audios/thigh.m4a";
const knee = new Audio();   knee.src = "audios/knee.m4a";
const leg = new Audio();   leg.src = "audios/leg.m4a";
const toe = new Audio();   toe.src = "audios/toe.m4a";
const waist = new Audio();   waist.src = "audios/waist.m4a";
const foot = new Audio();   foot.src = "audios/foot.m4a";
const shoulder = new Audio();   shoulder.src = "audios/shoulder.m4a";
const arm = new Audio();   arm.src = "audios/arm.m4a";
const back = new Audio();   back.src = "audios/back.m4a";
const elbow = new Audio();   elbow.src = "audios/elbow.m4a";
const hip = new Audio();   hip.src = "audios/hip.m4a";
const butt = new Audio();   butt.src = "audios/butt.m4a";
const ankle = new Audio();   ankle.src = "audios/ankle.m4a";
const heel = new Audio();   heel.src = "audios/heel.m4a";
const hair = new Audio();   hair.src = "audios/hair.m4a";
const forehead = new Audio();   forehead.src = "audios/forehead.m4a";
const eyelid = new Audio();   eyelid.src = "audios/eyelid.m4a";
const nose = new Audio();   nose.src = "audios/nose.m4a";
const nostrils = new Audio();   nostrils.src = "audios/nostrils.m4a";
const lips = new Audio();   lips.src = "audios/lips.m4a";
const eyebrows = new Audio();   eyebrows.src = "audios/eyebrows.m4a";
const eyelashes = new Audio();   eyelashes.src = "audios/eyelashes.m4a";
const cheeks = new Audio();   cheeks.src = "audios/cheeks.m4a";
const mouth = new Audio();   mouth.src = "audios/mouth.m4a";
const chin = new Audio();   chin.src = "audios/chin.m4a";
const incisors = new Audio();   incisors.src = "audios/incisors.m4a";
const tonsil = new Audio();   tonsil.src = "audios/tonsil.m4a";
const tongue = new Audio();   tongue.src = "audios/tongue.m4a";
const canine = new Audio();   canine.src = "audios/canine.m4a";
const uvula = new Audio();   uvula.src = "audios/uvula.m4a";
const molars = new Audio();   molars.src = "audios/molars.m4a";
const premolars = new Audio();   premolars.src = "audios/premolars.m4a";
const middleFinger = new Audio();   middleFinger.src = "audios/middleFinger.m4a";
const ringFinger = new Audio();   ringFinger.src = "audios/ringFinger.m4a";
const pinky = new Audio();   pinky.src = "audios/pinky.m4a";
const wrist = new Audio();   wrist.src = "audios/wrist.m4a";
const index = new Audio();   index.src = "audios/index.m4a";
const nails = new Audio();   nails.src = "audios/nails.m4a";
const thumb = new Audio();   thumb.src = "audios/thumb.m4a";
const muscles = new Audio();   muscles.src = "audios/muscles.m4a";
const bones = new Audio();   bones.src = "audios/bones.m4a";
const skin = new Audio();   skin.src = "audios/skin.m4a";
const bloodVessels = new Audio();   bloodVessels.src = "audios/bloodVessels.m4a";
/*gum palm*/









const myQuestions = [
    {
      question: "What is the meaning of the word 'Bliss' ?",
      answers: 
      {
        a: "a school supply",
        b: "an animal",
        c: "Happiness",
        d: "Sadness",
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: 
      {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: 
      {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    
    {
        question: "Which tool can you use to ensure code quality?",
        answers: 
        {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: 
        {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: 
        {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  function buildQuiz() 
  {
    const output = [];
    myQuestions.forEach
    ( (currentQuestion, questionNumber) => 
        {
          const answers = [];
          for(letter in currentQuestion.answers)
          {
            // ...add an HTML radio button
            answers.push
            (
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          // add this question and its answers to the output
          output.push
          (
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
            <div class="right">The correct answer is: ${currentQuestion.correctAnswer} </div>`
          );
        }
    );
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

   function showResults()
  {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const questionContainers = quizContainer.querySelectorAll('.question');
    const riiight = quizContainer.querySelectorAll('.right');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        questionContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        questionContainers[questionNumber].style.color = 'red';
        riiight[questionNumber].style.color = 'blue';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  buildQuiz();
  submitButton.addEventListener('click', showResults);




















  