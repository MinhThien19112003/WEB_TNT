// Phần chuyển navbar scroll
document.addEventListener('scroll',() => {
     const header = document.querySelector('.header')

     if(window.scrollY > 100){
          header.classList.add('scrolled');
     }else{
          header.classList.remove('scrolled');
     }
})
// Phần chỉnh nút menu
const hamBtn = document.querySelector('.MiniMenu_button');
const exitBtn = document.querySelector('.MiniMenu_button.exit')
const mininav = document.querySelector('.mini_nav');
let hamOpen = false;
hamBtn.addEventListener('click',() => {
     mininav.classList.add('toggle');
     hamOpen = true;
});
exitBtn.addEventListener('click',() => {
     mininav.classList.remove('toggle');
     hamOpen = false;    
     }); 

// Nút mở calander trên phần tìm kiểm
const GetDate = document.querySelector('#GetDate');
// const exitBtn = document.querySelector('.MiniMenu_button.exit')
const Calander = document.querySelector('.Calander');
let CalOpen = false;
GetDate.addEventListener('click',() => {
     if(!CalOpen == true){
          Calander.classList.add('toggle');
          CalOpen = true;
     }else{
          Calander.classList.remove('toggle');
          CalOpen = false;
     }
});

// Phần Calander
$(function() {
     $("#start_date").datepicker({
     dateFormat: 'dd-mm-yy',
     minDate: 0,
     onSelect: function(selectedDate) {
          $("#end_date").datepicker("option", "minDate", selectedDate);
          $("#start").text(selectedDate.replace(/-/g, '/'));
     }
     });

     $("#end_date").datepicker({
     dateFormat: 'dd-mm-yy',
     onSelect: function(selectedDate) {
          $("#start_date").datepicker("option", "maxDate", selectedDate);
          $("#end").text(selectedDate.replace(/-/g, '/'));
     }
     });
});