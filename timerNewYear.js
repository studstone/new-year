const greetings = document.querySelector('.hello');
const dayWeek = document.querySelector('.day-week');
const time = document.querySelector('.time');
const newYear = document.querySelector('.new-year');
// const day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

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
  }
  if (date.getHours() > 10 && date.getHours() <= 17) {
    greetings.textContent = 'Добрый день';
  }
  if (date.getHours() > 17 && date.getHours() <= 21) {
    greetings.textContent = 'Добрый вечер';
  }
  if (date.getHours() > 21) {
    greetings.textContent = 'Доброй ночи';
  }
  if (date.getHours() >= 0 && date.getHours() < 4) {
    greetings.textContent = 'Доброй ночи';
  }

  dayWeek.textContent = `Сегодня: ${date.toLocaleString('ru', {
    weekday: 'long'
  })}`;

  time.textContent = date.toLocaleTimeString('en');

  newYear.textContent = 'До нового года осталось ' + getTime.days + ' день';
};

outputDisplay();