<script setup>
</script>

<template>
  <div>
    <!-- --------------- REQUIRE --------------- -->
    <section class="require">
      <div class="container">
        <p class="general-prompt">Возможности</p>
        <h2 class="general-title">условия и требования</h2>
        <div class="row">
          <div class="col-md-6">
            <div class="require_block">
              <div class="require_title">УСЛОВИЯ: со своим авто:</div>
              <ul class="require_list">
                <li>Подключаем к системе UBER под 10%.</li>
                <li>Ни каких взносов 0%!</li>
                <li>Можем подключать удаленно без приезда в офис</li>
                <li>ИП не требуется</li>
                <li>
                  Заказы распределяются без учета рейтинга ближай-<br />шим
                  водителям
                </li>
                <li>Работа только по безналичному расчету</li>
                <li>
                  Деньги перечисляем на карту водителю или наличны-<br />ми в
                  офисе
                </li>
              </ul>
              <div class="require_descr">
                В день заработок составляет 7000-12000р + бонус 3000т рублей
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="require_block">
              <div class="require_title">УСЛОВИЯ: на авто компании:</div>
              <ul class="require_list">
                <li>Предоставляем авто без залога</li>
                <li>Без ежедневных выплат по аренде</li>
                <li>
                  Среда пятница и суббота работа на компанию остальные дни вы
                  работаете на себя
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="require_block require_block_nbm">
              <div class="require_title title_red">ТРЕБОВАНИЕ:</div>
              <ul class="require_list li_red">
                <li>Наличие автомобиля без рекламы</li>
                <li>
                  Автомобиль не должен быть желтый и не с желтыми номерами
                </li>
                <li>Машина не старше 3 лет</li>
                <li>Стаж вождения не менее 3 лет</li>
                <li>Дивайс на системе андроид 4.0и выше(самсунг)</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="require_block require_block_nbm">
              <div class="require_title title_red">ДОКУМЕНТЫ:</div>
              <ul class="require_list li_red">
                <li>Права 2 стороны</li>
                <li>Паспорт лицевая сторона</li>
                <li>СтС</li>
                <li>Лицензия( если есть)</li>
                <li>Номер телефона</li>
                <li>Номер карты для перечисления денег(указать обязательно)</li>
              </ul>
            </div>
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
/*--------------- REQUIRE STYLE CSS ---------------*/
.require {
  padding: 150px 0 84px 0;
}

.require .general-prompt {
  color: #fff;
  background-color: #000;
}

.require .general-title {
  color: #222222;
}

.require .require_block {
  margin: 33px 0;
}

.require .require_block .require_block_nbm {
  margin-bottom: 0;
}

.require .require_block .require_title {
  color: #1ca8c3;
  font-size: 22px;
  font-weight: 400;
}

.require .require_block .require_title.title_red {
  color: #ff5656;
}

.require .require_block .require_list {
  margin-top: 22px;
  padding-left: 50px;

  list-style-type: none;
}

.require .require_block .require_list li {
  margin-bottom: 10px;

  font-size: 17px;
  font-weight: 300;
  line-height: 24px;

  position: relative;
}

.require .require_block .require_list li::before {
  content: "";
  display: block;
  width: 21px;
  height: 20px;

  position: absolute;
  left: -32px;
  top: 4px;

  background: url(".././img/require/blue-check.png") center center/cover
    no-repeat;
}

.require .require_block .require_descr {
  color: #1ca8c3;
}

.require .require_block .require_list.li_red li::before {
  background: url(".././img/require/red-check.png") center center/cover
    no-repeat;
}
</style>