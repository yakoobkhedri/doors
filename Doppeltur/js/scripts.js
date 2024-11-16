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

    GlasLeft.style.height = size_height + 'mm';
    GlasLeft.style.width = size_left + 'mm';



    if (size_left > 15 && size_left <= 26) { //Glasswidth 960-1000
        GlasFront.style.top = 33 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 26 && size_left <= 35) { //Glasswidth 300
        GlasFront.style.top = 32 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 35 && size_left <= 42) { //Glasswidth 450-
        GlasFront.style.top = 30 + size_terstll/58 + 'mm';
    }
    else if (size_left > 42 && size_left <= 50) { //Glasswidth 650-
        GlasFront.style.top = 28 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 50 && size_left <= 58) { //Glasswidth 900-
        GlasFront.style.top = 26 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 58 && size_left <= 66) { //Glasswidth 1100
        GlasFront.style.top = 24 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 66 && size_left <= 73) { //Glasswidth 125ß
        GlasFront.style.top = 22 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 73 && size_left <= 93) { //1370
        GlasFront.style.top = 20 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 93 && size_left <= 113) { //1750
        GlasFront.style.top = 18 + size_terstll/58 + 'mm';
    } 
    else if (size_left > 113 && size_left <= 200) { //1750
        GlasFront.style.top = 16 + size_terstll/58 + 'mm';
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