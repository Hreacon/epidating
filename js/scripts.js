// take the input
$(document).ready(function(){
  $("form").submit(function(event){
    $(".answer").empty();
    var name = $("#name").val();
    var height = $("#height").val();
    var age = $("#age").val();
    var gender = $("#gender").val().toLowerCase();
// male age is between 20-25 you should date russel wilson
    if(age >= 18) {
      if(gender.startsWith("m")){// if gender is male
        if(age >= 50){ // if old
          $(".answer").text("Sean Connery"); // date sean
        } else { // else you're young
          if(20 <= age && age <= 25) {
            $(".answer").text("Rusell Wilson");
          } else if(height >= 50 && name.toLowerCase().startsWith("t")){ // and you're tall and you're name starts with t
            $(".answer").text("Brad Pitt"); // date brad pitt
          } else if(height >= 50){ // but if you're name doesn't start with t
            $(".answer").text("Ryan Gosling");
          } else {
            $(".answer").text("George Bush");
          }
        }
      } else if (gender.startsWith("t")) {
        $(".answer").text("Caitlyn Jenner");
      } else {
        if(age >= 50){
          $(".answer").text("Halle Berry");
        } else {
          if (age <= 50 && height >= 50){
            $(".answer").text("Jennifer Lawrence");
          } else {
            $(".answer").text("Selena Gomez");
          }
        }
      }
    } else {
      $('.answer').text("Statitory rape is a serious matter. Don't date adults until you're at least 18");
    }

    event.preventDefault();
  });

});
// compare it to dating credentials
// credentials:
// if gender is male AND

// else if gender is female AND
// age is old - date hallie berry
// age is young AND
// tall date - jennifer lawrence
// short date - selina gomez
// display who to date
