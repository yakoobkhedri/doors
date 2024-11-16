function changeSize() {

    // let size_www = parseInt(document.getElementById('www').value);

    let size_front = parseInt(document.getElementById('front').value);
    let size_left = parseInt(document.getElementById('left').value);
    var size_height = parseInt(document.getElementById('height').value);


    size_front = size_front / 19;
    size_left = size_left / 19;
    size_height = size_height / 18;

    size_terstR = size_front / 5;
    size_terstll = size_left / 5;

    GlasFront.style.height = size_height + 'mm';
    GlasFront.style.width = size_front + 'mm';
    GlasFront.style.left = 91 + size_left + 'mm';
    GlasFront.style.top = 34 + size_terstll + 'mm';
    GlasFront.style.top = 34 + size_terstR + 'mm';

    GlasLeft.style.height = size_height + 'mm';
    GlasLeft.style.width = size_left + 'mm';



    if (size_left > 9 && size_left <= 12) { //Glasswidth 960-1000
        GlasFront.style.top = 35 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 12 && size_left <= 15) { //Glasswidth 300
        GlasFront.style.top = 34.4 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 15 && size_left <= 18) { //Glasswidth 450-
        GlasFront.style.top = 34.3 + size_terstll/58 + 'mm';
    }
    else if (size_left > 18 && size_left <= 21) { //Glasswidth 650-
        GlasFront.style.top = 33.8 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 21 && size_left <= 24) { //Glasswidth 900-
        GlasFront.style.top = 33 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 24 && size_left <= 27) { //Glasswidth 1100
        GlasFront.style.top = 32.3 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 27 && size_left <= 30) { //Glasswidth 125ß
        GlasFront.style.top = 31.9 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 30 && size_left <= 33) { //1370
        GlasFront.style.top = 31.2 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 33 && size_left <= 36) { //1750
        GlasFront.style.top = 30.8 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 36 && size_left <= 39) { //1750
        GlasFront.style.top = 30.1 + size_terstll/58 + 'mm';
    }
    else if (size_left > 39 && size_left <= 42) { //1750
        GlasFront.style.top = 29.8 + size_terstll/58 + 'mm';
    }
    else if (size_left > 42 && size_left <= 45) { //1750
        GlasFront.style.top = 29.1 + size_terstll/58 + 'mm';
    }
    else if (size_left > 45 && size_left <= 48) { //1750
        GlasFront.style.top = 28.5 + size_terstll/58 + 'mm';
    }
    else if (size_left > 48 && size_left <= 52) { //1750
        GlasFront.style.top = 27.7 + size_terstll/58 + 'mm';
    }
    else if (size_left > 52 && size_left <= 55) { //1750
        GlasFront.style.top = 27.1 + size_terstll/58 + 'mm';
    }
    else if (size_left > 55 && size_left <= 58) { //1750
        GlasFront.style.top = 26.5 + size_terstll/58 + 'mm';
    }
    else if (size_left > 58 && size_left <= 62) { //1750
        GlasFront.style.top = 25.9 + size_terstll/58 + 'mm';
    }
    else if (size_left > 62 && size_left <= 65) { //1750
        GlasFront.style.top = 25.2 + size_terstll/58 + 'mm';
    }
    else if (size_left > 65 && size_left <= 68) { //1750
        GlasFront.style.top = 24.7 + size_terstll/58 + 'mm';
    }
    else if (size_left > 68 && size_left <= 72) { //1750
        GlasFront.style.top = 24.1 + size_terstll/58 + 'mm';
    }
    else if (size_left > 72 && size_left <= 75) { //1750
        GlasFront.style.top = 23.5 + size_terstll/58 + 'mm';
    }
    else if (size_left > 75 && size_left <= 79) { //1750
        GlasFront.style.top = 22.8 + size_terstll/58 + 'mm';
    }
    
    // 

    if (size_front > 9 && size_front <= 12) { //Glasswidth 960-1000
        GlasFront.style.top = 32.8 + size_terstR + 'mm';
    } 
    else if (size_front > 12 && size_front <= 15) { //Glasswidth 300
        GlasFront.style.top = 34.2 + size_terstll/58 + 'mm';
    } 
    else if (size_front > 15 && size_front <= 18) { //Glasswidth 450-
        GlasFront.style.top = 34.4 + size_terstll/58 + 'mm';
    }
    else if (size_front > 18 && size_front <= 21) { //Glasswidth 650-
        GlasFront.style.top = 33.8 + size_terstll/58 + 'mm';
    } 
    else if (size_front > 21 && size_front <= 24) { //Glasswidth 900-
        GlasFront.style.top = 33.3 + size_terstll/58 + 'mm';
    } 
    else if (size_front > 24 && size_front <= 27) { //Glasswidth 1100
        GlasFront.style.top = 32.8 + size_terstll/58 + 'mm';
    } 
    else if (size_front > 27 && size_front <= 30) { //Glasswidth 125ß
        GlasFront.style.top = 32 + size_terstll/58 + 'mm';
    } 
    else if (size_front > 30 && size_front <= 33) { //1370
        GlasFront.style.top = 31.4 + size_terstll/58 + 'mm';
    } 
    else if (size_front > 33 && size_front <= 36) { //1750
        GlasFront.style.top = 30.7 + size_terstll/58 + 'mm';
    } 
    else if (size_front > 36 && size_front <= 39) { //1750
        GlasFront.style.top = 30 + size_terstll/58 + 'mm';
    }
    else if (size_front > 39 && size_front <= 42) { //1750
        GlasFront.style.top = 29.7 + size_terstll/58 + 'mm';
    }
    else if (size_front > 42 && size_front <= 45) { //1750
        GlasFront.style.top = 29 + size_terstll/58 + 'mm';
    }
    else if (size_front > 45 && size_front <= 48) { //1750
        GlasFront.style.top = 28.5 + size_terstll/58 + 'mm';
    }
    else if (size_front > 48 && size_front <= 52) { //1750
        GlasFront.style.top = 28 + size_terstll/58 + 'mm';
    }
    else if (size_front > 52 && size_front <= 55) { //1750
        GlasFront.style.top = 27.5 + size_terstll/58 + 'mm';
    }
    else if (size_front > 55 && size_front <= 58) { //1750
        GlasFront.style.top = 27 + size_terstll/58 + 'mm';
    }
    else if (size_front > 58 && size_front <= 62) { //1750
        GlasFront.style.top = 26.2 + size_terstll/58 + 'mm';
    }
    else if (size_front > 62 && size_front <= 65) { //1750
        GlasFront.style.top = 25.5 + size_terstll/58 + 'mm';
    }
    else if (size_front > 65 && size_front <= 68) { //1750
        GlasFront.style.top = 25 + size_terstll/58 + 'mm';
    }
    else if (size_front > 68 && size_front <= 72) { //1750
        GlasFront.style.top = 24.3 + size_terstll/58 + 'mm';
    }
    else if (size_front > 72 && size_front <= 75) { //1750
        GlasFront.style.top = 23.7 + size_terstll/58 + 'mm';
    }
    else if (size_front > 75 && size_front <= 79) { //1750
        GlasFront.style.top = 23.1 + size_terstll/58 + 'mm';
    }

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
    $('#height').on('change', function () {
        var height = $('#height').val();
        if (height >= 1200 && height <= 3000) {

            changeSize()
        } else {
            alert('Bitte ein gültiges Maß eingeben. \nMinimalhöhe: 1200mm\nMaximalhöhe: 3000mm')
        }
    });
});


// Tür Recht
$(document).ready(function () {
    $('#left').on('change', function () {
        var width = $('#left').val();
        if (width >= 150 && width <= 2200) {

            changeSize()
        } else {
            alert('Bitte ein gültiges Maß eingeben. \nMinimalbreite: 500mm\nMaximalbreite: 1200mm')
        }
    });
});


// Festteil Links
$(document).ready(function () {
    $('#front').on('change', function () {
        var width = $('#front').val();
        if (width >= 150 && width <= 2200) {

            changeSize()
        } else {
            alert('Bitte ein gültiges Maß eingeben. \nMinimalbreite: 300mm\nMaximalbreite: 1200mm')
        }
    });
});