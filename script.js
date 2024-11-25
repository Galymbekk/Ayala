//1
/* function calculater(san1 , san2) {
    let san1 = +prompt("Бірінші санды енгіз")
    let san2 = +prompt("Екінші санды енгіз")

    alert("Қосындысы: " + (san1+san2))
    alert("Азайтындысы: " + (san1-san2))
    alert("Көбейтіндісі: " + (san1* san2))
    alert("Бөліндісі: " + (san1/san2))

    while(true){
        if(isNaN(san1, san2)){
            alert("Қате енгізу")
        } 
    }   
}

calculater(san1 , san2) ; */

//2

/* function zenildik() {
    let baga = +prompt("Бағасын енгіз")
    let zat = +prompt("Қанша зат алғыңыз келеді")
    let zhalpuQyn

    zhalpuQyn = baga * zat

    if(5000< zhalpuQyn){
        alert("Жеңілдікпен бағасы " + zhalpuQyn*(1-0.1))
    } else if(10000 < zhalpuQyn){
        alert("Жеңілдікпен бағасы " + zhalpuQyn*(1-0.2))
    } else if(20000 < zhalpuQyn){
        alert("Жеңілдікпен бағасы " + zhalpuQyn*(1-0.3))
    }  else{
        alert("Дұрыс сан енгізіңіз")
    }
}

zenildik(); */





//3
let san = 45

function esep() {
    let areketSany = 0;
    while(true){
        let num = +prompt("1 ден 100 ге дейін сан енгіз")

        if(num == san){
            alert("Сіз дұрыс таптыңыз" + "Сіз" + areketSany + "әрекет жасадыңыз")
            break;
        }

        if(num < 1 || num > 100 || isNaN(num)){
            alert("Тек 1 ден 100 ге дейін сан енгіз")
        }

        
        if(num - 5){
            alert("Сәл жоғары")
        } else if(num + 5){
            alert("Сәл төмен")
        } else if(!((num - san) <= 5 )){
            alert("Жай жоғары")
        }else if(!((num - san) <= 5 )){
            alert("Жай төмен")
            }
        }
    }

esep();