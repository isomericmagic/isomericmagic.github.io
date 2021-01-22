//set variables for pic elements and search field
const pics = document.getElementsByClassName("image-item");
const originalNumOfPics = pics.length;
const searchField = document.getElementById('search-field');

//setup listener for input field change and check if it matches pic caption
searchField.addEventListener('input', function(evt) {
  for (let i = 0; i < originalNumOfPics; i++) {
      let currentPic = document.getElementsByClassName("image-item")[i];
      let currentPicCaption = currentPic.childNodes[1].getAttribute('data-title');
    if (currentPicCaption.toLowerCase().includes(searchField.value.toLowerCase())) {
      currentPic.style.display = "block";
    } else {
      currentPic.style.display = "none";
    }
  }
});