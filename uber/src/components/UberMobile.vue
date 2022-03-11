<script setup>
</script>

<template>
  <div>
    <!-- --------------- MOBILE --------------- -->
    <section class="mobile">
      <div class="container">
        <p class="general-prompt">Возможности</p>
        <h2 class="general-title">мобильное приложение убер</h2>
        <h3 class="general-subtitle">
          Сделайте заказ, совершите поездку и оплатите ее стоимость, используя
          свой мобильный телефон
        </h3>
        <div class="mobile_card">
          <div class="row">
            <div class="col-md-4">
              <div class="mobile_item mobile_item_1">
                <div class="mobile_item_subtitle">
                  оформление заказа одним касанием
                </div>
                <div class="mobile_item_plus">
                  <!-- <img src=".././img/mobile/plus.png" alt="plus" /> -->
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mobile_item mobile_item_2">
                <div class="mobile_item_subtitle">надежная подача</div>
                <div class="mobile_item_plus">
                  <!-- <img src=".././img/mobile/plus.png" alt="plus" /> -->
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mobile_item mobile_item_3">
                <div class="mobile_item_subtitle">прозрачные цены</div>
                <div class="mobile_item_plus">
                  <!-- <img src=".././img/mobile/plus.png" alt="plus" /> -->
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mobile_item mobile_item_4">
                <div class="mobile_item_subtitle">безналичная оплата</div>
                <div class="mobile_item_plus">
                  <!-- <img src=".././img/mobile/plus.png" alt="plus" /> -->
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mobile_item mobile_item_5">
                <div class="mobile_item_subtitle">обратная связь</div>
                <div class="mobile_item_plus">
                  <!-- <img src=".././img/mobile/plus.png" alt="plus" /> -->
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mobile_item mobile_item_6">
                <div class="mobile_item_subtitle">
                  разделить стоимость поездки
                </div>
                <div class="mobile_item_plus">
                  <!-- <img src=".././img/mobile/plus.png" alt="plus" /> -->
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
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
/*--------------- MOBILE STYLE CSS ---------------*/
.mobile {
  min-height: 864px;
  padding: 150px 0 79px 0;

  background: url(".././img/mobile/background.png") center center/cover
    no-repeat;
}

.mobile .general-prompt {
  color: #ffffff;
  background-color: #000000;
}

.mobile .ggeneral-title {
  color: #222222;
}

.mobile .general-subtitle {
  color: #222222;
}

.mobile .mobile_card {
  margin-top: 32px;
}

.mobile .mobile_item {
  width: 320px;
  height: 280px;
  margin: 0 auto;
  margin-bottom: 19px;
  padding-top: 92px;

  position: relative;
}

.mobile .mobile_item.mobile_item_1 {
  background: url(".././img/mobile/one.png") center center/cover no-repeat;
}

.mobile .mobile_item.mobile_item_2 {
  background: url(".././img/mobile/two.png") center center/cover no-repeat;
}

.mobile .mobile_item.mobile_item_3 {
  background: url(".././img/mobile/three.png") center center/cover no-repeat;
}

.mobile .mobile_item.mobile_item_4 {
  background: url(".././img/mobile/four.png") center center/cover no-repeat;
}

.mobile .mobile_item.mobile_item_5 {
  background: url(".././img/mobile/five.png") center center/cover no-repeat;
}

.mobile .mobile_item.mobile_item_6 {
  background: url(".././img/mobile/six.png") center center/cover no-repeat;
}

.mobile .mobile_item_subtitle {
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  text-align: center;
  text-transform: uppercase;
}

.mobile .mobile_item_plus {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  margin: 0 auto;

  border-radius: 50%;
  background-color: #000000;

  position: absolute;
  left: 50%;
  bottom: 35px;

  cursor: pointer;
}

.mobile .mobile_item_plus i {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-47%, -50%);

  color: #1eacc7;
}

.mobile .mobile_item_plus:hover i {
  color: #fd3636;

  transition: all 0.5s ease 0s;
}
</style>