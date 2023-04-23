const buttons=document.querySelectorAll('.counterbtn');
// const prevbtn=document.querySelector('.prevbtn');
// const nextbtn=document.querySelector('.nextbtn');
const counter=document.querySelector('#counter');
let count =0;
function fun(){
    counter.textContent=count;
    if(count>0){
        counter.style.color='green';
    }
    else if(count<0){
        counter.style.color='red';
    }
    else{
        counter.style.color='#333333';
    }
}

// prevbtn.addEventListener('click',()=>{
//     count--;
//     fun();
// })
// nextbtn.addEventListener('click',()=>{
//     count++;
//     fun();
// })
console.log(buttons);
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log(button.classList);
        if(button.classList.contains('prevbtn')){
            count--;
        }
        else if(button.classList.contains('nextbtn')){
            count++;
        }
        else if(button.classList.contains('resetbtn')){
            count=0;
        }
     fun();
    })
})