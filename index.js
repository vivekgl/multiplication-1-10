let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);

let questionEl = document.getElementById("question");
questionEl.textContent=`What is ${num1} multiply by ${num2}?`

let score = 0;

const scoreEl=document.getElementById("score");
// scoreEl.textContent = `score : ${}`;

const inputEl = document.getElementById("input");

let correctAns = num1 * num2;

const formEl = document.getElementById("form");


// formEl.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const userAns = Number.parseInt(inputEl.value);
//     if(userAns === correctAns){
//         score++;
//     }else{
//         score--;
//     }
//     scoreEl.textContent = `score : ${score}`;
//     // inputEl.value = "";
// })

let refresh = (e)=>{
        e.preventDefault();       
        let userAns = Number.parseInt(inputEl.value);
        if(userAns === correctAns){
            score++;
            update()
        }else{
            score--;
            update()
        }
        // console.log(score)
        scoreEl.textContent = `score : ${score}`;
        inputEl.value = "";
    
}

function update() {
    num1 = Math.ceil(Math.random()*10);
    num2 = Math.ceil(Math.random()*10);

    questionEl = document.getElementById("question");
    questionEl.textContent=`What is ${num1} multiply by ${num2}?`
    correctAns = num1 * num2;
}