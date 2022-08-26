let input = document.querySelector(".int");
let btn = document.querySelector(".btn");
let txt = document.querySelector(".txt")
let noj = document.querySelectorAll(".n"); //Ножка
let styl = document.querySelector(".styl"); //Стул
let jor = document.querySelector(".jor"); //Жора
let pod = document.querySelector(".pod"); //подсказка
let step = 1; //уровень
let score = document.querySelector(".score"); //счёт 
let stepM = 0;
let quenstion = document.querySelector(".quenstion");
let heps = ["Потерялся дед. Кто этот дед? (Вышел из дома без таблеток)","Корень из 16","Где живут евреи?"]; //vopr
let answer = ["Байден", "4","Везде"]; //otvet
let SM = 0; 
let StepMate = 0
btn.addEventListener("click",() => {
    if (input.value == answer[stepM]){
    stepM++
    alert("Win")
    step++
    score.innerHTML = step
    quenstion.innerHTML = heps[stepM]
    }else{
        alert("Вы проиграли")
        noj[StepMate].style.opacity = "0"
        StepMate++
        SM++;
         if(SM == 3){
            input.style.display = "none"
            btn.style.display = "none"
            styl.style.display = "none"
            txt.innerHTML = "Game Over"
            quenstion.innerHTML = "Вы проиграли  :("
            jor.classList.add("p_active")
         } 
    }
    if (step > 3){
        input.style.display = "none"
        btn.style.display = "none"
        txt.innerHTML = "Вы выиграли"
        quenstion.innerHTML = "Вы молодец. Похвалю ваш огурец"
        styl.style.display = "none"
    }
})

