
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value+=value;
        })
    });
    equal.addEventListener('click',function(e){
        console.log(screen.value);
        if(screen.value === ''){
            screen.value = "";
        }
        else{
            let ans=eval(screen.value);
            console.log(ans);
            screen.value = ans;
        }
    })
    clear.addEventListener('click',function(e){
        screen.value="";
    })
