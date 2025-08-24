
 // we get access to clock element into the dociment 
 const clockNum = document.querySelector('.clock');
 const btns = document.querySelectorAll('.btns button');
 let format;
 
function MyClock() {

  format = clockNum.getAttribute('data-format');

  let myTime = new Date();

  let H = String(myTime.getHours()).padStart(2,'0');
 
  let  M = String( myTime.getMinutes()).padStart(2,'0');
  
  let  S = String(myTime.getSeconds()).padStart(2,'0');
 
const timeStatus = (H > 12) ? 'PM' : 'AM';
  
// there we set the time
  if (format === '12') {
   H =(H > 12) ? H % 12 : H;
  }

  clockNum.innerHTML = `${H} :${M} :${S}`;
  let time = document.querySelector('.time');
  time.innerHTML =` ${timeStatus}`;



}
 //now set the time format buttons

 btns.forEach(button=>{
  button.addEventListener('click', ()=>{
    format = button.getAttribute('data-format');
    clockNum.setAttribute('data-format',format);
   MyClock();
  });
  
 });

// now we make our clock to see the second changes
setInterval(MyClock, 1000);








