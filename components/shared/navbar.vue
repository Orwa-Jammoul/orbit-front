<template>
  <nav>
    <div class="container" dir="auto">
      <div class="main-nav" id="main-nav">
        <div class="left pcs">
          <div class="logo-frame contain">
            <img :src="`/logos/logo-blue.svg`" alt="orbit-logo">
          </div>
        </div>
        <div class="center pcc">
          <ul class="nav-links-list">
            <li class="nav-link-item">
              <nuxt-link class="nav-link" to="/">{{ t('Home',1) }}</nuxt-link>
            </li>
            <li class="nav-link-item">
              <nuxt-link class="nav-link" to="/">{{ t('about-us',1) }}</nuxt-link>
            </li>
            <li class="nav-link-item">
              <nuxt-link class="nav-link" to="/">{{ t('services',1) }}</nuxt-link>
            </li>
            <li class="nav-link-item">
              <nuxt-link class="nav-link" to="/">{{ t('courses',1) }}</nuxt-link>
            </li>
            <li class="nav-link-item">
              <nuxt-link class="nav-link" to="/">{{ t('contact',1) }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="right pce">
          <button class="theme-toggler pce mx-0 ms-2" @click="toggleTheme">
            <div class="icon-frame pcc">
              <icon v-if="oTheme().value=='dark'" name="line-md:moon-filled-to-sunny-filled-loop-transition" size="18px"/>
              <icon v-else name="line-md:moon-filled-loop" size="18px"/>
            </div>
          </button>
          <button class="lang-btn pce mx-0 ms-2" @click="switchL">
            <div class="icon-frame pcc">
              <icon name="ion:md-globe" size="18px"/>
            </div>
          </button>
          <!-- <nuxt-link v-if="!isAuth" class="login-btn pce" to="/auth/login">
            <div class="icon-frame pcc">
              <icon name="line-md:person-filled" size="18px"/>
            </div>
          </nuxt-link> -->
          <nuxt-link v-if="isAuth && isAdmin().value" class="login-btn pce" to="/dashboard">
            <div class="icon-frame pcc">
              <icon name="material-symbols-light:space-dashboard-rounded" size="18px"/>
            </div>
          </nuxt-link>
          <button class="nav-toggler pce">
            <div class="icon-frame pcc">
              <icon name="heroicons:bars-3-20-solid" size="18px"/>
            </div>
          </button>

        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useTheme } from 'vuetify'
const vuetifyTheme = useTheme()
const { $theme } = useNuxtApp();

onMounted(()=>{
  const theme = localStorage.getItem('oTheme') ?? oTheme().value

  $theme.set(theme);
  vuetifyTheme.global.name.value = theme
  document.documentElement.setAttribute('data-theme', theme);
  oTheme().value = theme
})

const isAuth = useAuth().value.isAuth

const toggleTheme = () => {
  const newTheme = isDark() ? 'light' : 'dark';

  $theme.set(newTheme);
  vuetifyTheme.global.name.value = newTheme
  document.documentElement.setAttribute('data-theme', newTheme);

  oTheme().value = newTheme
}

</script>

<style lang="scss" scoped>
@use "~/assets/styles/scss/theme/theme";
.main-nav {
  background: none;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  .left{
    width: 10rem;
    .logo-frame{
      height: 2rem;
      width: auto;
    }
  }
  .center{

    flex-grow: 1;
    .nav-links-list{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
      // margin: 2rem 0;
      .nav-link-item{
        &:not(:last-child){
          padding-inline-end: 2rem;
        }
        .nav-link{
          color: var(--text);
        }
      }
      @media (max-width: 1080px) {
        display: none;
      }
    }

  }
  .right{
    width: 10rem;
    .login-btn, .lang-btn, .nav-toggler, .theme-toggler{
      .icon-frame{
        border-radius: 1rem;
        background-color: var(--secondary);
        width: 1.9rem;
        height: 1.9rem;
        border: solid 1px $br20;
        transition: all 200ms ease-in-out;
        .iconify{
          color: var(--text);
          transition: all 200ms ease-in-out;
        }
      }
      &:hover{
        .icon-frame{
          background-color: var(--secondary2);
          // .iconify{
          //   color: white;
          // }
        }
      }
    }
    .nav-toggler{
      margin-inline-start: .5rem;
      display: none;
      @media (max-width: 1080px) {
        display: block;
      }
    }
  }
}
</style>
