
// var z = +prompt('third');
//
// if(!x > z){
//   alert('more');
// }
// else if(x < y){
//   alert('second is more');
// }
// else(x = y){
//   alert('ravno');
// }
// var x = +prompt('firstNum');
// var y = +prompt('secondNum');

// var x = 10;
//
// function go (x, y){
// if (x > y){
//   console.log('perviy');
// }
// else{
//   console.log('vtoroy');
// }
// }
//
// go();

//
// var login = prompt('login vvedi');













// var answer, btn, out, random;

// random = Math.floor(Math.random() * 10 + 1);
// console.log(random);

// btn = Document.getElementById('btn');
// out = Document.getElementById('out');

// function game(){
//   answer = Document.getElementById('answer').value;
//   if (isNan(answer)){
//     out.innerHTML = 'Write correct'
//   } 


// }




// var x = +prompt('login');
// if (x == 'Malik'){
//   var y = +prompt('password');
//   if (y == '123'){
//     alert('Добро пожаловать');
//   }
// }
// else{
//   alert('Пишов нахуй пидорас');
// };













var answer, btn, out, random;

random = Math.floor(Math.random() * 10 + 1);
 
console.log(random);


btn = document.getElementById('btn');
out = document.getElementById('out');
reset = document.getElementById('reset');
 


function game(){
  answer = document.getElementById('answer').value;
  if(isNaN(answer)){
    out.innerHTML = 'Pizdec ti tupoy daje number ne mojesh napisat';
  }
  else if (answer != random){
    out.innerHTML = 'Nu polushilos ne fortanulo , ne ssi v sled raz ugadaesh';
  }
  else{
    out.innerHTML = 'Ebat ti geyniy konechno , ugadat 1 iz 10 , daje ya in shock , dlya tebya podarok vnizu';
    btn.style.display = 'none';
    reset.style.display = 'inline-block';
  }
  
}

