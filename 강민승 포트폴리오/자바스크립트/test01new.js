
function showTime(){    
let now = new Date();
let display = now.toLocaleTimeString();
document.getElementById("clock").innerHTML = "현재 시각은 " + display;
}
        
setInterval(showTime, 1000);
        

let bunho01 = 3; //값을 숫자로 할당, 변수의 자료형 숫자형 - 숫자
console.log("bunho03 =================");
console.log(typeof bunho01);
            
let bunho02 = "1"; //값을 문자로 할당, 변수의 자료형 문자형 - 문자
console.log(typeof bunho02);

