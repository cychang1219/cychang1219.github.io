//Reference https://www.tutorialspoint.com/how-to-create-responsive-modal-images-with-css-and-javascript
// Get the modal
var modal = document.getElementById("Modal");

// Get the image and insert it inside the modal and using its "alt" text as a caption
var img = document.getElementById("astrounion_img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
   modal.style.display = "none";
};

//same process for the second image
var modal2 = document.getElementById("Modal2");
var nthu_img = document.getElementById("nthu_img");
var nthu_modalImg = document.getElementById("img02");
var nthu_captionText = document.getElementById("caption2");
nthu_img.onclick = function() {
   modal2.style.display = "block";
   nthu_modalImg.src = this.src;
   nthu_captionText.innerHTML = this.alt;
};

var span2 = document.getElementsByClassName("close")[1];

span2.onclick = function() {
   modal2.style.display = "none";
};

