// function show_image(src, width, height, alt) {
//   var img = document.createElement("img");
//   img.src = src;
//   img.width = width;
//   img.height = height;
//   img.alt = alt;
  
//   // This next line will just add it to the <body> tag
//   document.body.appendChild(img); 
// }



// var checkbox = document.querySelector("input[name=checkbox]");

document.querySelector("#hide").addEventListener("change", function() {
    if (document.querySelector("#hide").checked) {
      document.querySelector("#soup").style.display= "none";
        // Checkbox is checked..
    }
    else {
      document.querySelector("#soup").style.display = "initial";
        // Checkbox is not checked..
    }
});