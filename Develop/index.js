
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
var saveButton = $('.saveBtn');

//rendertext();


saveButton.on('click', function () {
    //grab textarea input
    //grab corresponding id tag ex. hour-7
    //save to local storage with id tag being the key  
    var text = $(this).siblings(".description").val();
    var key = $(this).parent().attr("id");
    console.log(text)
    console.log(key)

    localStorage.setItem(key, text);
    alert('Saved!!');

  });
  

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
  
    var currentHour = dayjs().format('H');
    console.log(currentHour);
    
    var hour7 = 7;
    var hour8 = 8;
    var hour9 = 9;
    var hour10 = 10;
    var hour11 = 11;
    var hour12 = 12;
    var hour13 = 13;
    var hour14 = 14;
    var hour15 = 15;
    var hour16 = 16;
    var hour17 = 17;
    var hour18 = 18;
    var hour19 = 19;
    


    var change7 = $('#hour-7');
    var change8 = $('#hour-8');
    var change9 = $('#hour-9');
    var change10 = $('#hour-10');
    var change11 = $('#hour-11');
    var change12 = $('#hour-12');
    var change13 = $('#hour-13');
    var change14 = $('#hour-14');
    var change15 = $('#hour-15');
    var change16 = $('#hour-16');
    var change17 = $('#hour-17');
    var change18 = $('#hour-18');
    var change19 = $('#hour-19');
    


    if (hour7 > currentHour) {
    change7.toggleClass('past, future')}
    else if (hour7 === currentHour){
      change7.toggleClass('past, present')
    };

    if (hour8 > currentHour) {
      change8.toggleClass('past, future')}
      else if (hour8 === currentHour){
        change8.toggleClass('past, present')
      };

      if (hour9 > currentHour) {
        change9.toggleClass('past, future')}
        else if (hour9 === currentHour){
          change9.toggleClass('past, present')
        };
  console.log(hour10)
        
    if (hour10 > currentHour) {
      change10.toggleClass('past, future')}
      else if (hour10 === currentHour){
        change10.toggleClass('past, present')
      };

      
    if (hour11 > currentHour) {
      change11.toggleClass('past, future')}
      else if (hour11 === currentHour){
        change11.toggleClass('past, present')
      };

      
    if (hour12 > currentHour) {
      change12.toggleClass('past, future')}
      else if (hour12 === currentHour){
        change12.toggleClass('past, present')
      };

      
    if (hour13 > currentHour) {
      change13.toggleClass('past, future')}
      else if (hour13 === currentHour){
        change13.toggleClass('past, present')
      };

      
    if (hour14 > currentHour) {
      change14.toggleClass('past, future')}
      else if (hour14 === currentHour){
        change14.toggleClass('past, present')
      };

      
    if (hour15 > currentHour) {
      change15.toggleClass('past, future')}
      else if (hour15 === currentHour){
        change15.toggleClass('past, present')
      };

      
    if (hour16 > currentHour) {
      change16.toggleClass('past, future')}
      else if (hour16 === currentHour){
        change16.toggleClass('past, present')
      };

      
    if (hour17 > currentHour) {
      change17.toggleClass('past, future')}
      else if (hour17 === currentHour){
        change17.toggleClass('past, present')
      };

      
    if (hour18 > currentHour) {
      change18.toggleClass('past, future')}
      else if (hour18 === currentHour){
        change18.toggleClass('past, present')
      };

      
    if (hour19 > currentHour) {
      change19.toggleClass('past, future')}
      else if (hour19 === currentHour){
        change19.toggleClass('past, present')
      };


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
     $('#hour-7 .description').val(localStorage.getItem("hour-7"));
      $('#hour-8 .description').val(localStorage.getItem("hour-8"));
      $('#hour-9 .description').val(localStorage.getItem("hour-9"));
      $('#hour-10 .description').val(localStorage.getItem("hour-10"));
      $('#hour-11 .description').val(localStorage.getItem("hour-11"));
      $('#hour-12 .description').val(localStorage.getItem("hour-12"));
      $('#hour-13 .description').val(localStorage.getItem("hour-13"));
      $('#hour-14 .description').val(localStorage.getItem("hour-14"));
      $('#hour-15 .description').val(localStorage.getItem("hour-15"));
      $('#hour-16 .description').val(localStorage.getItem("hour-16"));
      $('#hour-17 .description').val(localStorage.getItem("hour-17"));
      $('#hour-18 .description').val(localStorage.getItem("hour-18"));
      $('#hour-19 .description').val(localStorage.getItem("hour-19"));



    // TODO: Add code to display the current date in the header of the page.
 
var timer = dayjs();
$('#currentDay').text(timer.format('[Today is] dddd MMMM D, YYYY'));





});