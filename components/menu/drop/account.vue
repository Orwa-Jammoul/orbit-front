<template>
  <div>
    <div class="main-menu ">
      <!-- <div class="menu-item" v-for="lang,index in locales" :key="index" @click="switchLanguage(lang.code)">
        {{ siteLanguages().value[lang.code] }}
      </div> -->
      <nuxt-link v-if="!isAuth" class="menu-item" :to="localePath('account-login')">
        <Icon name="hugeicons:login-method" size="20px"/>
        <span>{{ $t('login') }}</span>
      </nuxt-link>
      <nuxt-link class="menu-item" :to="localePath('account-signup')">
        <Icon name="material-symbols:person-add-rounded" size="20px"/>
        <span>{{ $t('sign-up') }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>

const localePath = useLocalePath()
const isAuth = useAuth().value.isAuthenticated 
const emit = defineEmits(["selected"]);

const {locales, locale, setLocale } = useI18n()
const switchLanguage =(lang)=> {
  setLocale(lang)
  useLang().value = lang
  localStorage.setItem('lang', lang)
  emit('selected')
}
</script>

<style lang="scss" scoped>
@use"~/assets/styles/scss/theme/theme" as *;
.main-menu{
  display: flex;
  flex-direction: column;
  // padding: 0 1rem;
  width: auto;
  .menu-item{
    display: flex;
    justify-content: flex-start;
    align-items: center;

    // width: 15rem;
    background-color: black;
    width: 100%;
    font-weight: 600;
    color: white;
    font-size: 13px;
    padding: .4em 1.3em ;
    cursor: pointer;
    // line-height: 1rem;
    border-radius: 5px;
    // border-bottom: solid 1px white;
    
    &:last-child{
      border-bottom: none;
    }
    &:hover{
      background-color: #1c1c1c !important;
      // color: white;
    }
    .iconify{
      margin-inline-end: 5px;
    }
    // &:hover:not(.router-link-active){
    //   background-color: $primary6 !important;
    //   // color: $primary2b;
    //   color: red;
    // }
  }
}

</style>