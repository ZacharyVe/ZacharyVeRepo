$("#header").html('<h1 id="header">jQuery changed this</h1>');

setTimeout(function(){$("#mypara").html("MY CHANGED PARAGRAPH.");
}, 3000);

$("h1").css("color","yellow");
$("#burger").css("border","2px solid blue");


var theStyles = {
  background: "orange",
  fontSize: "48px",
  border: "4px solid green"
};
$("#burger").css(theStyles);


$("div").css("backgroundColor","lightblue");
$(".fun").css("fontSize","48px");
$("#food").css("border","green","8px");
// $("div").first().css("color","orange");
$("div:first").css("color","orange");

$("#food").text("THANKSGIVING");

$("img").attr("src","https://i.imgur.com/D9HkrX4.gif");

// $(":input").attr("type","color")
// if($("input").val() === "Bob") {
//   alert("hibob!");
// } else {
//   alert("hey");
// };

$("div").toggleClass("indicator");
setInterval(function(){
  $("div").fadeToggle(4000);
}, 4000);

$('select[name="dropdown"]').change(function(){

  if ($(this).val() == "2"){
      alert("call the do something function on option 2");
   }        
});

$("img").click(function(){
  alert("you clicked the image");
});

$("li").click(function(){
  $(this).fadeToggle(1000);
});

$("#header").click(function(){
  $("li").fadeToggle(1000);
});

$("li").click(function(){
  var text = $(this).text();
  alert(text+ " tastes delicious!!!");
});

$("input").keypress(function(){
  console.log("you are typing");
})

$("input").keypress(function(event){
  console.log(event);
})
$("input").keypress(function(event){
  if(event.which === 13){
    alert("you hit the enter button");
  }
});

$("ul").prepend("<li class='sandwich'>Chicken Sandwich</li>");

$("li").on("click", function(){
    $(this).parent().remove();
});