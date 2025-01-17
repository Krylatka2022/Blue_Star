function greetUser() {
  const now = new Date();
  let greeting;

  if (now.getHours() < 12) {
    greeting = "Доброе утро";
  } else if (now.getHours() < 18) {
    greeting = "Добрый день";
  } else {
    greeting = "Вечер";
  }

  document.getElementById("greeting").innerText = greeting;
}
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0'); // Добавляем '0' в начало, если час состоит из одной цифры
  const minutes = String(now.getMinutes()).padStart(2, '0'); // То же самое для минут
  const seconds = String(now.getSeconds()).padStart(2, '0'); // И для секунд

  document.querySelector(".the_time").innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000); // Обновление каждую секунду
function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const userGuess = prompt("Угадайте число от 1 до 5");

  if (parseInt(userGuess) === randomNumber) {
    alert("Поздравляем! Вы угадали число.");
  } else {
    alert("Не угадали. Попробуйте еще раз!");
  }
}


// Вызываем функцию при загрузке страницы
//window.onload = greetUser;

document.addEventListener("DOMContentLoaded", function () {
  setInterval(updateTime, 1000);
  console.log(123457);
  greetUser();
  startTime = new Date().getTime();
  document.querySelector("#exit").onclick = function () {
    const timeSpent = new Date().getTime() - startTime;
    alert(`Вы провели ${timeSpent / 60000} минут(ы) на странице.`);
  };

  const hamburgerBtn = document.getElementById('hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
});

// Function to start counters when user scrolls to success-metrics section
function startCountersOnScroll() {
  // Get the success-metrics section
  var successMetricsSection = document.querySelector('.success-metrics');

  // Calculate the position of success-metrics section
  var successMetricsSectionPosition = successMetricsSection.offsetTop - window.innerHeight;

  // Function to start counters
  function startCounters() {
    var counters = document.querySelectorAll('.counter');
    var speed = 2000; // The lower the number, the faster the counter increases

    counters.forEach(counter => {
      var target = +counter.getAttribute('data-target-value');
      var count = 0;

      var updateCounter = setInterval(() => {
        count++;
        counter.innerText = count;

        if (count === target) {
          clearInterval(updateCounter);
        }
      }, speed / target);
    });
  }

  // Check if user has scrolled to success-metrics section
  function checkScroll() {
    if (window.scrollY > successMetricsSectionPosition) {
      startCounters();
      window.removeEventListener('scroll', checkScroll);
    }
  }

  // Event listener for scroll
  window.addEventListener('scroll', checkScroll);
}

// Call the function to start counters when user scrolls to success-metrics section
startCountersOnScroll();



new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.dataset.filter;//textContent.replace(/\s/g, '').toLowerCase();
      // dataset.
      const portfolioItems = document.querySelectorAll('.portfolio-item');

      portfolioItems.forEach(item => {
        const itemCategories = item.querySelector('span').classList;

        if (filterValue == 'all' || itemCategories.contains(filterValue)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

});

// document.addEventListener('DOMContentLoaded', function () {
//   const filterButtons = document.querySelectorAll('.filter-button');

//   filterButtons.forEach(button => {
//     button.addEventListener('click', function () {
//       const filterValue = this.textContent.toLowerCase();
//       const portfolioItems = document.querySelectorAll('.portfolio-item');

//       // Сбрасываем видимость всех элементов портфолио
//       portfolioItems.forEach(item => {
//         item.classList.add('hidden');
//       });

//       // Показываем элементы, соответствующие выбранному фильтру
//       if (filterValue !== 'all') {
//         portfolioItems.forEach(item => {
//           const itemClass = Array.from(item.classList).join(' ');
//           if (itemClass.includes(filterValue)) {
//             item.classList.remove('hidden');
//           }
//         });
//       } else {
//         // Если выбрана категория "Все", показываем все элементы
//         portfolioItems.forEach(item => {
//           item.classList.remove('hidden');
//         });
//       }
//     });
//   });
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const offset = 88;
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  console.log(days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ");
  document.querySelectorAll("h3.countdown")[0].innerHTML = days;
  document.querySelectorAll("h3.countdown")[1].innerHTML = hours;
  document.querySelectorAll("h3.countdown")[2].innerHTML = minutes;
  document.querySelectorAll("h3.countdown")[3].innerHTML = seconds;
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// Добавление обработчика события beforeunload
window.addEventListener('beforeunload', function (e) {
  var confirmationMessage = 'уверены, что хотите выйти?';
  e.returnValue = confirmationMessage; // Стандарт для большинства браузеров
  return confirmationMessage; // Для совместимости с некоторыми старыми браузерами
});
