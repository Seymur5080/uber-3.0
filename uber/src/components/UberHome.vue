<script setup>
</script>

<template>
  <div>
    <!-- --------------- PROMO --------------- -->
    <section class="promo">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <h1 class="promo_header">КОМПАНИЯ UBER PARTNERS!</h1>
            <h2 class="promo_subheader">
              ПРИГЛАШАЕМ ВОДИТЕЛЕЙ! НА СВОЕМ АВТО!
            </h2>
            <p class="promo_description">
              Компания UBER динамически развивающаяся. Компания на рынке
              занимает лидирующее место среди таксомоторных компаний, Компания
              абсолютно прозрачная вы можете контролировать все процессы у себя
              в личном кабинете. Бонуcная система.Помимо выполненной работы по
              заказам, компания начисляет бонусы за пиковое время.
              <br /><br />
              Мы одни из партнеров и зарекомендовали себя как одна из лучших
              команд в городе Москве. Водители у нас зарабатывают от 80000-
              120000 в месяц.
            </p>
            <button class="general-btn">ОТПРАВИТЬ ЗАЯВКУ!</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*--------------- PROMO STYLE CSS ---------------*/
.promo {
  min-height: 800px;
  background: url(".././img/home/background.png") center center/cover no-repeat;
  padding: 150px 0 135px 0;
}

.promo .promo_header {
  margin: 0;

  color: #ffffff;
  font-size: 60px;
  font-weight: 700;
  line-height: 60px;
  text-transform: uppercase;
  text-align: center;
}
.promo .promo_subheader {
  margin: 22px 0 0 0;

  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  text-transform: uppercase;
  text-align: center;
}
.promo .promo_description {
  margin-top: 23px;

  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}

.promo .general-btn {
  display: block;
  margin: 118px auto 0 auto;
  width: 260px;
  height: 63px;
}
</style>