function calcularTiempoRestante(tiempoRest) {
    const unDia = 1000 * 60 * 60 * 24;
    const mesesDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Días de cada mes en un año no bisiesto

    let anios = Math.floor(tiempoRest / (unDia * 365));
    tiempoRest %= unDia * 365;

    let meses = 0;
    let dias = 0;

    for (let i = 0; i < 12; i++) {
        let diasEnMes = mesesDias[i];

        // Ajuste para años bisiestos
        if (i === 1 && esBisiesto(anios)) {
            diasEnMes = 29;
        }

        if (tiempoRest >= diasEnMes * unDia) {
            tiempoRest -= diasEnMes * unDia;
            meses++;
        } else {
            dias = Math.floor(tiempoRest / unDia);
            tiempoRest %= unDia;
            break;
        }
    }

    let horas = Math.floor(tiempoRest / (1000 * 60 * 60));
    tiempoRest %= 1000 * 60 * 60;
    let minutos = Math.floor(tiempoRest / (1000 * 60));
    tiempoRest %= 1000 * 60;
    let segundos = Math.floor(tiempoRest / 1000);
    
    
    console.log('Años:' + anios);
    console.log('months:' + meses);
    console.log('days:' + dias);
    console.log('hours:' + horas);
    console.log('min:' + minutos);
    console.log('sec:' + segundos);
    return { anios, meses, dias, horas, minutos, segundos };
}

function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

const years = document.getElementById("years"),
      months = document.getElementById("months"),
      days = document.getElementById("days"),
      hours = document.getElementById("hours"),
      min = document.getElementById("min"),
      sec = document.getElementById("sec");

const relationship = new Date("July 5, 2032 00:00:00").getTime();
setInterval(()=>{
    let hoy = new Date().getTime();

    var tiempoRest = relationship - hoy;
    let tiempo = calcularTiempoRestante(tiempoRest);

    // Inserción de los datos en el HTML
    years.innerHTML = tiempo.anios;
    months.innerHTML = tiempo.meses;
    days.innerHTML = tiempo.dias;
    hours.innerHTML = tiempo.horas;
    min.innerHTML = tiempo.minutos;
    sec.innerHTML = tiempo.segundos;

}, 1000);
