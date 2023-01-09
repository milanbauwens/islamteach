// Image preview
const chooseFile = document.getElementById("articleThumbnail");
const imgPreview = document.getElementById("imgPreview");

if (chooseFile) {
  chooseFile.addEventListener("change", function () {
    getImgData();
});
}

function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
      });    
    }
}

// Rich Text Editor
const editor = document.querySelectorAll('.editor');

if (editor) {
editor.forEach(element => {
    new FroalaEditor(element)
});
}

// Dropdown 
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdownBtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}