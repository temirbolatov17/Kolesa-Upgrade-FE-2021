<template>
  <div class="score">
    <div class="score__breadcrumbs">
      <router-link
        class="score__link"
        :to="{ name: 'Shop' }"
        replace>
        Kolesa Shop
      </router-link>
      /
      <a class="score__link" href="#">Как получить баллы</a>
    </div>

    <h1 class="score__title">Как получить баллы</h1>

    <ul class="score__list">
      <li class="score__card card-score">
        <i class="card-score__icon card-score__icon--conference"></i>
        <h2 class="card-score__title">Выступление на конференциях</h2>
        <span class="card-score__value">90 баллов</span>
        <p class="card-score__text">
          Стань спикером на международной конференции по своему направлению
        </p>
        <button class="button button--score-card">
          Отправить заявку
        </button>
      </li>

      <li class="score__card card-score">
        <i class="card-score__icon card-score__icon--meetup"></i>
        <h2 class="card-score__title">Выступление на meetup</h2>
        <span class="card-score__value">60 баллов</span>
        <p class="card-score__text">
          Стань спикером в Колёсах и на meetup других компаний.
          Расскажи о наших продуктах и технологиях которые мы используем
          </p>
        <button class="button button--score-card">
          Отправить заявку
        </button>
      </li>

      <li class="score__card card-score">
        <i class="card-score__icon card-score__icon--article"></i>
        <h2 class="card-score__title">Статья на habr/vc.ru/rusbase</h2>
        <span class="card-score__value">60 баллов</span>
        <p class="card-score__text">
          Подготовь качественный контент, напиши и опубликуй статью на профильную тему
        </p>
        <button class="button button--score-card">
          Отправить заявку
        </button>
      </li>

      <li class="score__card card-score">
        <i class="card-score__icon card-score__icon--training"></i>
        <h2 class="card-score__title">Мастер-классы, тренинги, лекции, подкасты, прямые эфиры</h2>
        <span class="card-score__value">60 баллов</span>
        <p class="card-score__text">
          Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек
        </p>
        <button class="button button--score-card">
          Отправить заявку
        </button>
      </li>

      <li class="score__card card-score">
        <i class="card-score__icon card-score__icon--event"></i>
        <h2 class="card-score__title">Организация мероприятия</h2>
        <span class="card-score__value">60 баллов</span>
        <p class="card-score__text">
          Организуй турнир по командным играм в офисе.
          ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире
        </p>
        <button class="button button--score-card">
          Отправить заявку
        </button>
      </li>

      <li class="score__card card-score">
        <i class="card-score__icon card-score__icon--mentor">
        </i>
        <h2 class="card-score__title">Стань ментором в проекте «Kolesa Academy»</h2>
        <span class="card-score__value">90 баллов</span>
        <p class="card-score__text">
          Стань ментором академиков, поделись своими знаниями и
          помоги ребятам завершить Kolesa Academy успешно
        </p>
        <button class="button button--score-card">
          Отправить заявку
        </button>
      </li>

      <li class="score__card card-score">
        <i class="card-score__icon card-score__icon--support"></i>
        <h2 class="card-score__title">Помощь HR team</h2>
        <span class="card-score__value">50 баллов</span>
        <p class="card-score__text">
          Помоги организовать мероприятие
        </p>
        <button class="button button--score-card">
          Отправить заявку
        </button>
      </li>

      <li class="score__card card-score">
        <i class="card-score__icon card-score__icon--meetup"></i>
        <h2 class="card-score__title">Выступление на Demoday</h2>
        <span class="card-score__value">30 баллов</span>
        <p class="card-score__text">
          Выступи на Demoday внутри своей команды и поделись знаниями
        </p>
        <button class="button button--score-card">
          Отправить заявку
        </button>
      </li>

      <li class="score__card card-score">
        <i class="card-score__icon card-score__icon--other"></i>
        <h2 class="card-score__title">Другое</h2>
        <p class="card-score__text">
          Получай баллы если уже что-то сделано
        </p>
        <button class="button button--score-card">
          Отправить заявку
        </button>
      </li>
    </ul>

  </div>
</template>
