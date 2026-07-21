
const eventDate = new Date("2026-10-05T17:00:00").getTime();
// ↑ Cambia esta fecha por la del evento

function updateCountdown(){

    const now = new Date().getTime();

    const distance = eventDate - now;
    console.log(distance);

    if(distance <= 0){

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        return;

    }

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

animateNumber("days", days);
animateNumber("hours", hours);
animateNumber("minutes", minutes);
animateNumber("seconds", seconds);

}

updateCountdown();

setInterval(updateCountdown,1000);


function animateNumber(id, value){

    const element = document.getElementById(id);

    if(element.textContent != value){

        element.textContent = value;

        element.classList.remove("animate-number");

        void element.offsetWidth;

        element.classList.add("animate-number");

    }

}



function confirmAttendance(){

    const option =
        document.querySelector('input[name="attendance"]:checked');

    if(!option){

        alert("Por favor selecciona una opción.");

        return;

    }

    let message="";

    if(option.value=="yes"){

        message=
`Hola Andrea. 

Confirmo que tendré el gusto de acompañarte en tus XV años.

¡Estoy muy emocionado(a) por celebrar contigo este día tan especial!`;

    }else{

        message=
`Hola Andrea. 

Lamentablemente en esta ocasión no podré acompañarte en tus XV años.

Te deseo que tengas una celebración maravillosa y que disfrutes muchísimo este día tan especial.`;

    }

    const phone="593996320284";

    window.open(

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,

"_blank");

}



