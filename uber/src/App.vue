<script setup>
// import { vModelCheckbox } from "@vue/runtime-dom";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <!-- --------------- HEADER --------------- -->
    <header>
      <nav>
        <div class="container">
          <ul class="menu">
            <RouterLink tag="li" to="/" class="menu_item">
              <a class="menu_link">Главная</a>
            </RouterLink>
            <RouterLink tag="li" to="/reason" class="menu_item">
              <a class="menu_link">Со своим автомобилем</a>
            </RouterLink>
            <RouterLink tag="li" to="/mobile" class="menu_item">
              <a href="#" class="menu_link">На автомобиле компании</a>
            </RouterLink>
            <RouterLink tag="li" to="/prius" class="menu_item">
              <a href="#" class="menu_link">Требования</a>
            </RouterLink>
            <RouterLink tag="li" to="/require" class="menu_item">
              <a href="#" class="menu_link">Контакты</a>
            </RouterLink>
            <RouterLink tag="li" to="/world" class="menu_item">
              <a href="#" class="menu_link">Оставить заявку</a>
            </RouterLink>
          </ul>
        </div>
      </nav>
      <div class="subheader">
        <div class="container">
          <div class="row">
            <div class="col-md-4 offset-md-1">
              <a href="#" class="subheader_logo">
                <img src="./img/home/header-logo.png" alt="Logo" />
              </a>
              <div class="subheader_official">
                Официальный партнер Uber в Москве
              </div>
            </div>
            <div class="col-md-2 offset-md-2">
              <div class="subheader_call">Звоните нам ежедневно</div>
              <a href="tel:84957970988" class="subheader_phone"
                >8 495 797 09 88</a
              >
            </div>
            <div class="col-md-2">
              <button class="general-btn">заказать звонок</button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <transition name="animation-page">
      <RouterView></RouterView>
    </transition>

    <!-- --------------- FOOTER --------------- -->
    <footer>
      <div class="container">
        <div class="title_line"></div>
        <div class="footer_nav">
          <p class="footer_nav_p">на главную</p>
          <p class="footer_nav_p">города</p>
          <p class="footer_nav_p">для водителей</p>
        </div>
        <div class="footer_nav_two">
          <p class="footer_nav_p_two">центр поддержки</p>
          <p class="footer_nav_p_two">вакансии</p>
          <p class="footer_nav_p_two">разработчики</p>
          <p class="footer_nav_p_two">блог</p>
          <p class="footer_nav_p_two">о нас</p>
        </div>
        <p class="footer_bottom_p">русский</p>
        <div class="footer_icons">
          <div class="footer_icon">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div class="footer_icon">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div class="footer_icon">
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <div class="footer_icon">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div class="footer_application">
          <img src="./img/footer/application.png" alt="" />
        </div>
      </div>
    </footer>
    <div class="footer_line_bottom"></div>

    <!-- --------------- SIGN IN --------------- -->
    <div class="sign-btn">
      <button class="general-btn" @click.prevent="user.status = true">
        <i class="fa-solid fa-user"></i>
        {{ user.signIn == true ? "Войти" : "Выйти" }}
      </button>
    </div>

    <!-- --------------- SIGN BOX --------------- -->
    <div class="sign_box" v-show="user.status">
      <form @submit.prevent="send">
        <div class="sign_box_exit_icon" @click.prevent="user.status = false">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 class="sign_box_title">
          {{ user.show == true ? "Вход" : "Регистрация" }}
        </h1>
        <div class="sign_box_email">
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="nepdud@gmail.com"
            v-model="user.email"
          />
        </div>
        <div class="sign_box_email">
          <label for="password">пароль</label>
          <input
            id="password"
            type="password"
            placeholder="* * * * * *"
            v-model="user.password"
          />
        </div>
        <div class="sign_box_flex">
          <div class="sign_box_flex_left-center">
            <input id="check" type="checkbox" />
            <label for="check">запомнить</label>
          </div>
          <div class="sign_box_flex_left-center">
            <input id="checkpass" type="checkbox" />
            <label class="label-color" for="checkpass">показать пароль</label>
          </div>
          <div class="sign_box_flex_right">
            <a href="" @click.prevent="user.show = !user.show">{{
              user.show == true ? "Регистрация" : "Войти"
            }}</a>
          </div>
        </div>
        <button class="general-btn">
          {{ user.show == true ? "Войти" : "Регистрация" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: null,
        signIn: true,
        show: true,
        status: false,
      },
    };
  },
  methods: {
    send() {
      this.$store.dispatch("sendData", this.user);
    },
  },
};
</script>

<style>
/*--------------- GENERAL STYLE CSS ---------------*/
* {
  font-family: "Roboto", sans-serif;
}

.general-btn {
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;

  background-image: linear-gradient(0deg, #1eacc7 0%, #4ce2ff 100%);
  border: none;
  border-radius: 4px;
  box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.12);

  transition: all 0.5s ease 0s;
}

.general-btn:hover {
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.12), 0 0 10px 2px #1fb3d1;
}

.general-prompt {
  width: 112px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  font-size: 11px;
  font-weight: 250;
  text-transform: uppercase;
}

.general-title {
  margin: 35px 0 0 0;

  font-size: 38px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}

.general-subtitle {
  margin-top: 19px;

  color: #222222;
  font-size: 17px;
  font-weight: 400;
  text-align: center;
}

/* .animation-page-move {
  transition: transform 5s;
}
.animation-page-enter-active,
.animation-page-leave-active {
  transition: all 5s ease;
}
.animation-page-enter-from,
.animation-page-leave-to {
  opacity: 0;
  transform: translateX(30px);
} */

/*--------------- HEADER STYLE CSS ---------------*/
header {
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
}

nav {
  height: 50px;
  background-color: #212121;
}

.menu {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 13px 70px;

  list-style-type: none;
}

.menu .menu_item {
  text-decoration: none;
}

.menu .menu_link {
  padding-bottom: 2px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  text-decoration: none;

  transition: all 0.5s ease 0s;
}

.menu .menu_link:hover {
  border-bottom: 1px solid #1eacc7;
  text-shadow: 0px 0px 7px #ffffff;
}

.menu .menu_link:active {
  border-bottom: 1px solid rgb(245, 195, 103);
}

.subheader {
  width: 100%;
  height: 84px;

  background-color: rgba(0, 0, 0, 0.6);

  position: absolute;
}

.subheader .subheader_logo {
  display: block;
  max-width: 100%;
  margin-top: 16px;
}

.subheader .subheader_official {
  margin-top: 6px;

  color: #ffffff;
  font-size: 13px;
  font-weight: 250;
}

.subheader .subheader_call {
  margin-top: 19px;

  color: #ffffff;
  font-size: 12px;
  font-weight: 300;
  text-align: right;
}

.subheader .subheader_phone {
  display: block;
  margin-top: 8px;

  color: #ffffff;
  font-size: 22px;
  font-weight: 400;
  line-height: 12px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
}

.subheader .general-btn {
  width: 172px;
  height: 46px;
  margin-top: 19px;
}

/*--------------- FOOTER STYLE CSS ---------------*/
footer {
  padding: 13px 0 39px 0;

  position: relative;
}

footer .title_line {
  width: 299px;
  height: 4px;
  margin: 0 auto;

  background-color: #1fbad6;
}

footer .footer_nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .footer_nav .footer_nav_p {
  margin: 30px 45px 0 0;

  color: #070716;
  font-size: 15px;
  font-weight: 300;
  text-transform: uppercase;
}

footer .footer_nav_two {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .footer_nav_two .footer_nav_p_two {
  margin-right: 20px;

  color: #999999;
  font-size: 11px;
  font-weight: 300;
  text-transform: uppercase;
}

footer .footer_bottom_p {
  margin-top: 19px;

  color: #1fbad6;
  font-size: 11px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}

.footer_line_bottom {
  width: 100%;
  height: 8px;
  background-color: #070716;
}

footer .footer_icons {
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 30px;

  transform: translateY(-50%);
}

footer .footer_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: #070716;

  cursor: pointer;
}

footer .footer_icon i {
  color: #fff;
}

footer .footer_application {
  position: absolute;
  top: 50%;
  right: 30px;

  transform: translateY(-50%);
}

/*--------------- SIGN IN STYLE CSS ---------------*/
.sign-btn {
  width: 120px;
  height: 40px;

  position: fixed;
  right: 5px;
  bottom: 5px;
}

.sign-btn .general-btn {
  width: 100%;
  height: 100%;
}

/*--------------- SIGN BOX STYLE CSS ---------------*/
.sign_box {
  width: 440px;
  height: 470px;
  padding: 35px;

  border-radius: 5px;
  filter: drop-shadow(0px 8px 10px rgba(0, 1, 1, 0.26));
  background-color: #f1f7fc;

  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;

  transform: translate(-50%, -50%);
}

.sign_box .sign_box_title {
  color: #4f4f4f;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}

.sign_box .sign_box_email {
  margin-top: 30px;
}

.sign_box .sign_box_email label {
  color: #4f4f4f;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.sign_box .sign_box_email input {
  display: block;
  width: 100%;
  padding: 12px 0 12px 30px;
  margin-top: 10px;

  outline: none;
  border: none;
  box-shadow: 0 4px 42px rgb(0 0 0 / 4%);
  border: 1px solid #a7a6a6;
  border-radius: 3px;
}

.sign_box .sign_box_flex {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sign_box .sign_box_flex .sign_box_flex_left-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sign_box .sign_box_flex .sign_box_flex_left-center input {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.sign_box .sign_box_flex .sign_box_flex_left-center label {
  margin-left: 10px;

  color: #8b8b8b;
  font-size: 14px;
  font-weight: 700;

  transition: all 0.5s ease 0s;
  cursor: pointer;
}

.sign_box .sign_box_flex .sign_box_flex_left-center label:hover {
  color: #808080;
}

.sign_box .sign_box_flex .sign_box_flex_left-center .label-color {
  color: #9133af;
}

.sign_box .sign_box_flex .sign_box_flex_left-center .label-color:hover {
  color: #612475;
}

.sign_box .sign_box_flex .sign_box_flex_right a {
  color: #04a9f4;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  transition: all 0.5s ease 0s;
}

.sign_box .sign_box_flex .sign_box_flex_right a:hover {
  text-shadow: 0 0 10px #04a9f4;
}

.sign_box .general-btn {
  width: 100%;
  margin-top: 30px;
  padding: 20px 0;
  box-shadow: inset 0 -5px 0 rgba(0, 0, 0, 0.12);
}

.sign_box .general-btn:hover {
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.12), 0 3px 10px 0 #1fb3d1;
}

.sign_box .sign_box_exit_icon {
  font-size: 25px;

  position: absolute;
  top: 0px;
  right: 10px;

  cursor: pointer;
  transition: all 0.5s ease 0s;
}

.sign_box .sign_box_exit_icon:hover {
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
}
</style>
