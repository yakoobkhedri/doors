function changeSize(input) {
  // let size_www = parseInt(document.getElementById('www').value);

  let size_right = parseInt(document.getElementById("right").value);
  let size_front = parseInt(document.getElementById("front").value);
  let size_front2 = parseInt(document.getElementById("front2").value);
  var size_height = parseInt(document.getElementById("height").value);

  size_right = size_right / 19;
  size_front = size_front / 19;
  size_front2 = size_front2 / 19;
  size_height = size_height / 18;

  let size_terst = size_right / 5;
  let size_terstR = size_front / 5;
  let size_terstR2 = size_front2 / 5;
  let size_terstll = size_right / 5;

  GlasLeft.style.width = size_right + "mm";
  GlasLeft.style.height = size_height + "mm";
  GlasLeft.style.left = size_right / 80 + size_front + size_front2 + 116 + "mm";
  GlasLeft.style.top =
    46 +
    size_terstll -
    size_right / 5.5 -
    size_terstR -
    size_front / 5.5 -
    size_front2 / 3 +
    "mm";

  GlasFront.style.height = size_height + "mm";
  GlasFront.style.width = size_front + "mm";
  GlasFront.style.top = size_terst / 1.2 - size_terstR + 49 + "mm";
  GlasFront.style.left = size_right + size_front / 80 + 117 + "mm";

  GlasFront2.style.height = size_height + "mm";
  GlasFront2.style.width = size_front2 + "mm";
  GlasFront2.style.top =
    size_terst / 1.2 -
    size_terstR -
    size_terstR2 -
    size_front / 5.5 +
    50 +
    "mm";
  GlasFront2.style.left =
    size_right + size_front + size_front2 / 80 + 116 + "mm";

  GlasRight.style.height = size_height + "mm";
  GlasRight.style.width = size_right + "mm";
  // GlasRight.style.top = 58 + size_terstll - size_terst - size_terstR + "mm";
  // GlasRight.style.left = size_front2 + 72 + "mm";

  let left = 60;
  if (front < 400) left = 63.3;
  // GlasLeft.style.top = left + size_terstR + "mm";
  // GlasLeft.style.right = 118 + size_front + size_front2 + "mm";

  // if(size_front > 15 && size_front <=26){ //Glasswidth 960-1000
  //         GlasLeft.style.top =53+size_terst/size_front/58 + 'mm';
  //     }else if(size_front > 26 && size_front <=35){ //Glasswidth 300
  //         GlasLeft.style.top =51+size_terst/size_front/58 + 'mm';
  //     }else if(size_front > 35 && size_front <=42){ //Glasswidth 450-
  //          GlasLeft.style.top =50+size_terst/size_front/58 + 'mm';
  //     }else if(size_front > 42 && size_front <=50){ //Glasswidth 650-
  //         GlasLeft.style.top =49+size_terst/size_front/58 + 'mm';
  //     }else if(size_front > 50 && size_front <=58){ //Glasswidth 900-
  //          GlasLeft.style.top =47+size_terst/size_front/58 + 'mm';
  //     }else if(size_front > 58 && size_front <=66){ //Glasswidth 1100
  //        GlasLeft.style.top =45+size_terst/size_front/58 + 'mm';
  //     }else if(size_front > 66 && size_front <=73){ //Glasswidth 125ß
  //         GlasLeft.style.top =43+size_terst/size_front/58 + 'mm';
  //     }else if(size_front > 73 && size_front <=93){ //1370
  //         GlasLeft.style.top =42+size_terst/size_front/58 + 'mm';
  //     }else if(size_front > 93 && size_front <=113){ //1750
  //         GlasLeft.style.top =40+size_terst/size_front/58 + 'mm';
  //     }else if(size_front > 113 && size_front <=200){ //1750
  //         GlasLeft.style.top =37+size_terst/size_front/58 + 'mm';
  //     }

  // boden2.style.top = size_height+56+size_terstR-size_hh + 'mm';
  // boden2.style.left = 69+size_front + 'mm';

  // if(size_front > 15 && size_front <=25){ //Glasswidth 960-1000
  // boden1.style.top = size_height+56+size_terstR-size_hh-size_front/7 + 'mm';
  // }else if(size_front > 25 && size_front <=40){ //Glasswidth 300
  // boden1.style.top = size_height+54+size_terstR-size_hh-size_front/10 + 'mm';
  // }else if(size_front > 40 && size_front <=80){ //Glasswidth 450-
  // boden1.style.top = size_height+48+size_terstR-size_hh-size_front/10 + 'mm';
  // }
  // else if(size_front > 60 && size_front <=150){ //Glasswidth 450-
  // boden1.style.top = size_height+45+size_terstR-size_hh-size_front/10 + 'mm';
  // }

  // boden1.style.left = 69+size_front-size_front+10 + 'mm';
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

// Tür Links
$(document).ready(function () {
  $("#right").on("change", function () {
    var width = $("#right").val();
    if (width >= 150 && width <= 2200) {
      changeSize(this);
    } else {
      alert(
        "Bitte ein gültiges Maß eingeben. \nMinimalbreite: 500mm\nMaximalbreite: 1200mm"
      );
    }
  });
});

// Tür Recht
$(document).ready(function () {
  $("#left").on("change", function () {
    var width = $("#left").val();
    if (width >= 150 && width <= 2200) {
      changeSize(this);
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

$(document).ready(function () {
  $("#front2").on("change", function () {
    var width = $("#front2").val();
    if (width >= 150 && width <= 2200) {
      changeSize();
    } else {
      alert(
        "Bitte ein gültiges Maß eingeben. \nMinimalbreite: 300mm\nMaximalbreite: 1200mm"
      );
    }
  });
});

document.getElementById("right").value = 1100;
document.getElementById("front").value = 600;
document.getElementById("front2").value = 600;
changeSize();
