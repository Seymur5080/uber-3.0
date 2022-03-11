<script scope>
</script>

<template>
  <div>
    <!-- --------------- PRIUS --------------- -->
    <section class="prius">
      <div class="container">
        <p class="general-prompt">Возможности</p>
        <h2 class="general-title">Выбор - отличная штука!</h2>
        <h3 class="general-subtitle">
          Закажите автомобиль, который подходит вам по стилю и бюджету
        </h3>
        <img class="pirus_img" src=".././img/prius/prius.png" alt="prius" />
        <p class="prius_text">
          Машины на каждый день. <br />Лучше, быстрее и дешевле, чем такси
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*--------------- PRIUS STYLE CSS ---------------*/
.prius {
  padding: 150px 0 138px 0;
  background: url(".././img/prius/background.png") center center/cover no-repeat;
}

.prius .general-prompt {
  background-color: #fff;
}
.prius .general-title {
  color: #fff;
}
.prius .general-subtitle {
  color: #fff;
}

.prius .pirus_img {
  display: block;
  margin: 0 auto;
  margin-top: 55px;
}

.prius .prius_text {
  margin-top: 10px;

  color: #222222;
  font-size: 17px;
  line-height: 24px;
  font-weight: 300;
  text-align: center;
}
</style>