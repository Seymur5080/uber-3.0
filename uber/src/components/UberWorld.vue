<script setup>
</script>

<template>
  <div>
    <!-- --------------- WORLD --------------- -->
    <section class="world">
      <div class="container">
        <p class="general-prompt">города</p>
        <h2 class="general-title">По всему миру</h2>
        <h3 class="general-subtitle">Мы в вашем городе и по всему миру</h3>
        <p class="text_footer">посмотреть все города</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*--------------- WORLD STYLE CSS ---------------*/
.world {
  padding: 150px 0;

  background: url(".././img/world/background.png") center center/cover no-repeat;
}

.world .general-prompt {
  color: #070716;

  background-color: #fff;
}
.world .general-title {
  color: #fff;
}
.world .general-subtitle {
  color: #fff;
}

.world .text_footer {
  margin-top: 486px;

  color: #1fbad6;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}
</style>