const d = document;

export default function countDown(dateFuture) {
  const $days = d.getElementById("day");
  const $hours = d.getElementById("hour");
  const $minutes = d.getElementById("minute");
  const $seconds = d.getElementById("second");
  const $containerNumbers = d.querySelectorAll(".countdown-timer-number");

  //Values in Miliseconds
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //Asignacion de las variables y operaciones
  const setDate = () => {
    const currentDate = new Date().getTime();
    const nextDate = new Date(dateFuture).getTime();
    let marginDate = nextDate - currentDate;

    if (marginDate <= 0) {
      clearInterval(timer);
      return alert("Felicidades , llegaste a la fecha indicada");
    }

    //Captura de las variables convertidas en su formato adfecuado, vienen en milisegundos
    let dayDate = parseInt(marginDate / day);
    let hourDate = parseInt((marginDate % day) / hour);
    let minuteDate = parseInt((marginDate % hour) / minute);
    let secondDate = parseInt((marginDate % minute) / second);
    getDate(dayDate, hourDate, minuteDate, secondDate);
    $containerNumbers.forEach((number) => number.classList.toggle("active"));
    changeStyleforLength($days, $hours, $minutes, $seconds);
  };

  //Cambiar la fuente y el padding de todos los parametros pasados dentro de la funcion
  function changeStyleforLength() {
    if ($days.textContent.length > 2) {
      Array.from(arguments).forEach((arg) => {
        arg.style.fontSize = "3rem";
        arg.style.padding = ".9rem 0";
      });
    }
  }

  //Retorna el contenido de la fecha futura menos la fecha actual , en dias, horas, minutos y srgundos.
  const getDate = (d, h, m, s) => {
    $days.textContent = d < 10 ? "0" + d : d;
    $hours.textContent = h < 10 ? "0" + h : h;
    $minutes.textContent = m < 10 ? "0" + m : m;
    $seconds.textContent = s < 10 ? "0" + s : s;
  };

  //Variable que permite controlar los intervalos de tiempo
  let timer = setInterval(setDate, 1000);
  // Inicializacion
  setDate();
}
