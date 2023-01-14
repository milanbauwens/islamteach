// Image preview
const chooseFile = document.getElementById("articleThumbnail");
const imgPreview = document.getElementById("imgPreview");
const currentUpload = document.getElementById("current-upload");

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
        currentUpload.style.display = "none";
        imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
      });    
    }
}

// Rich Text Editor
const editor = document.querySelectorAll('.editor');

editor.forEach(element => {
  if (element) {
    new FroalaEditor(element, {
      heightMin: 150,
    })
  }
});


// Dropdown 
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');

if(dropdownBtn) {
dropdownBtn.addEventListener('click', (e) => {
  if (dropdownContent.classList.contains('show')) {
    dropdownContent.classList.remove('show')
  } else {
    dropdownContent.classList.add('show')    
  }
})
}

// Froala Editor
setTimeout(function () {
  $(".fr-wrapper a").each(function () {
      if ($(this).text() === "Unlicensed copy of the Froala Editor. Use it legally by purchasing a license.") {
          $(this).hide();
      }
  });
}, 100);


$( document ).ready(function() {
  let $showFlash = $(".flash");
  if ($showFlash) {
    setTimeout(function () {
      $showFlash.fadeOut('fast');
    }, 4000);
  }
});