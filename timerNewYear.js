const greetings = document.querySelector('.hello');
const dayWeek = document.querySelector('.day-week');
const time = document.querySelector('.time');
const newYear = document.querySelector('.new-year');
const day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const date = new Date();

const getDate = () => {
  let dateStop = new Date('1 Jan 2023').getTime();
  let dateNow = date.getTime();
  let timeRemaining = (dateStop - dateNow) / 1000;
  let days = Math.floor(timeRemaining / 3600 / 24);

  return {
    days
  };

};

const outputDisplay = () => {
  let getTime = getDate();

  if (date.getHours() >= 4 && date.getHours() <= 10) {
    greetings.textContent = 'Доброе утро';
  } else if (date.getHours() > 10 && date.getHours() <= 17) {
    greetings.textContent = 'Добрый день';
  } else if (date.getHours() > 17 && date.getHours() <= 21) {
    greetings.textContent = 'Добрый вечер';
  } else if (date.getHours() > 21 && date.getHours() < 4) {
    greetings.textContent = 'Доброй ночи';
  }

  day.forEach((element, index) => {
    if (date.getDay() === index) {
      dayWeek.textContent = 'Сегодня: ' + element;
    }
  });

  time.textContent = date.toLocaleTimeString('en');

  newYear.textContent = 'До нового года осталось ' + getTime.days + ' день';
};

outputDisplay();