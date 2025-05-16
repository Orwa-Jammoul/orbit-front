<template>
  <div class="home-page">
    <v-app>
      <v-btn @click="toggleTheme">Toggle Theme</v-btn>
      <v-btn color="primary">Primary Button</v-btn>
      <div class="ttt">qweqweqwe</div>
    </v-app>
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify'
const vuetifyTheme = useTheme()

const { $theme } = useNuxtApp();

// onMounted(()=>{
//   const newTheme = $theme.current.value === 'dark' ? 'light' : 'dark';
//   vuetifyTheme.global.name.value = newTheme
//   console.log(newTheme);
// })

const toggleTheme = () => {
  const newTheme = oTheme().value == 'dark' ? 'light' : 'dark';

  // const newTheme = $theme.current.value === 'dark' ? 'light' : 'dark';
  // const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
  $theme.set(newTheme);
  vuetifyTheme.global.name.value = newTheme
  document.documentElement.setAttribute('data-theme', newTheme);
  oTheme().value = newTheme
  // console.log($theme);
}
</script>

<style lang="scss" >
@use "~/assets/styles/scss/theme/theme";
.ttt{
  color: var(--primary);
}
</style>