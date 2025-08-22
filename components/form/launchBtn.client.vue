<template>
  <div class="launch-btn-frame">
    <h1 v-if="showCountdown" class="countdown">{{ count>0?count:'Activated' }}</h1>
    <button class="launch-btn pcc" v-if="showButton" @click="handleSubmit">
      <div class="pcc">
        <h1>
          Launch
        </h1>
      </div>
    </button>
    <!-- <p v-else>Press Shift+S to reveal the button</p> -->
  </div>
</template>

<script setup>

// const handleKeyPress = (event) => {
//   const isModifierPressed = modifier === 'shift' ? event.shiftKey : 
//                           modifier === 'ctrl' ? event.ctrlKey : 
//                           modifier === 'alt' ? event.altKey : true;
  
//   if (event.key.toLowerCase() === key.toLowerCase() && isModifierPressed) {
//     event.preventDefault();
//     callback();
//   }
// };

const showButton = ref(false);
const showCountdown = ref(false);
const isLaunched = ref(false)

onMounted(()=>{
  
  window.addEventListener('keydown', (event)=>{
    if (event.shiftKey && event.key.toLowerCase() === 's') {
      event.preventDefault();
      showButton.value = !showButton.value;
      console.log(showButton.value);
    }
  })
})

// onMounted(() => {
//   window.addEventListener('keydown', handleKeyPress);
// });

// onUnmounted(() => {
//   window.removeEventListener('keydown', handleKeyPress);
// });

// const showButton = ref(false);


const i18n = useI18n()

// console.log(countries)
// const { $notify } = useNuxtApp()




const { public: {api, apiBase} } = useRuntimeConfig();
const isLoading = ref(false);

const count = ref(10);

const countdown = (values) => {
  showButton.value = false
  showCountdown.value = true
  const timer = setInterval(() => {
    console.log(count.value);
    
    if (count.value === 0) {
      console.log("Countdown complete!");
      useLaunch().value = values
      console.log(useLaunch().value);
      clearInterval(timer);
    }
    
    if(count.value>0){
      count.value--;
    }
  }, 1000);
}

const selectedType = ref(0)

const handleSubmit = async () => {
  isLoading.value = true;
  const values = {
    "userName": "launched",
    "email": "launch@launch.com",
    "mobile": "54656756756",
    "description": "launch",
    "id": 20,
    "clientId": null,
    "type": 0
  }
  // const values = {
  //   "userName": "gooo",
  //   "email": "launch@launch.com",
  //   "mobile": "54656756756",
  //   "description": "launch",
  //   "id": 20,
  //   "clientId": null,
  //   "type": 0
  // }

  const { data, error, execute } = await useHttpForSiteApi().post(
    api.MessagingApi,
    values
  );

  if (error.value && error.value.statusCode == 401) {
    await useReauthorization().reAuthorize();
    if (!data.value) execute();
  } else if (error.value && error.value.statusCode != 401) {
    isLoading.value = false;
    // console.log(error.value);
    // $awn.alert(
    //   i18n.t("submitError"),
    //   { durations: { global: 6000 } }
    // );
  } else if (data.value) {
    if (data.value.hasErrors) {
      isLoading.value = false;
      // $awn.alert(
      //   data.value.validationErrors[0],
      //   { durations: { global: 6000 } }
      // );
    } else {
      // console.log(i18n.t("countdown"));
        // $notify({
        //   title: "Success!",
        //   text: i18n.t("countdown"),
        //   type: "success",
        //   duration: 3000
        // })

      countdown(values);
      isLoading.value = false;
    }
  }
  
};
</script>

<style scoped lang="scss">
@use"~/assets/styles/scss/theme/theme" as *;
.launch-btn-frame{
  .countdown{
    text-align: center;
    font-size: 7rem;
    // margin-bottom: 1rem;
    width: 40rem;
    height: 7rem;
    background-color: black;
  }
  .launch-btn{
    width: 40rem;
    height: 7rem;
    background-color: black;
    
    div{
      width: 50%;
      height: 90%;
      border-radius: 1rem;
      transition: all 300ms ease-in-out;
      border: solid 1px $primary;
      color: $primary;
      box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.1);
      background-color: rgba($color: $primary, $alpha: .1);
      &:hover{
        color: white;
        background-color: $primary;
        border: solid 1px transparent;
        
      }
      h1{
        margin-bottom: 0;
      }
    }
  }
}
</style>
