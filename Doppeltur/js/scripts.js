function changeSize() {
  // let size_www = parseInt(document.getElementById('www').value);

  let size_front = parseInt(document.getElementById("front").value);
  let size_left = parseInt(document.getElementById("left").value);
  var size_height = parseInt(document.getElementById("height").value);
  let GlasFrontRealTop = Number(GlasFront.style.top.replace("mm", ""));
  let GlasFrontRealWidth = Number(GlasFront.style.width.replace("mm", ""));

  size_front = size_front / 19;
  size_left = size_left / 19;
  size_height = size_height / 18;

  size_terstR = size_front / 5;
  size_terstll = size_left / 5;
  GlasFront.style.height = size_height + "mm";
  GlasFront.style.width = size_front + "mm";
  GlasFront.style.left = 91 + size_left + "mm";
  GlasLeft.style.height = size_height + "mm";
  GlasLeft.style.width = size_left + "mm";
}

// Tür Höhe
$(document).ready(function () {
  $("#height").on("change", function () {
    var height = $("#height").val();
    if (height >= 1200 && height <= 3000) {
      changeSize();
    } else {
      alert(
        "Bitte ein gültiges Maß eingeben. \nMinimalhöhe: 1200mm\nMaximalhöhe: 3000mm"
      );
    }
  });
});

// Tür Recht
$(document).ready(function () {
  $("#left").on("change", function () {
    var width = $("#left").val();
    if (width >= 150 && width <= 2200) {
      changeSize();
    } else {
      alert(
        "Bitte ein gültiges Maß eingeben. \nMinimalbreite: 500mm\nMaximalbreite: 1200mm"
      );
    }
  });
});

// Festteil Links
$(document).ready(function () {
  $("#front").on("change", function () {
    var width = $("#front").val();
    if (width >= 150 && width <= 2200) {
      changeSize();
    } else {
      alert(
        "Bitte ein gültiges Maß eingeben. \nMinimalbreite: 300mm\nMaximalbreite: 1200mm"
      );
    }
  });
});

document.getElementById("left").value = 600;
document.getElementById("front").value = 600;
changeSize();