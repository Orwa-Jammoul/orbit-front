<template>
  <div class="contacts-menus" dir="auto">
    <div class="social-media-bar" :class="rtl()">
      
      <a v-for="page, index in socialPages" 
        class="social-media-item" 
        :href="page.url" target="_blank" 
        :data-aos-duration="1000"
        :data-aos-delay="500*index"
        :data-aos="isAr()?`fade-right`:`fade-left`"
        :key="page.id"
      >
        <icon :name="useIcon(page.nameEn)" size="22px"/>
      </a>
    </div>
    <div class="message-form" :class="rtl()" 
      v-if="showContacts"
      :data-aos-duration="1000"
      :data-aos-delay="0"
      data-aos-mirror="true"
      :data-aos="`slide-up`"
    >
      <FormMessage @cancel="showContacts= false"/>
    </div>
    <div class="messaging pcc" :class="rtl()" @click="showContacts=!showContacts">
      <div class="circle"></div>
      <button class="messaging-btn" >
        <Icon v-if="!showContacts" name="material-symbols:chat-add-on" size="20px"/>
        <Icon v-else name="material-symbols:chat-apps-script" size="20px"/>
      </button>
      
      
    </div>

    

    <div class="contact-bar" :class="rtl()" 
      v-if="showContacts"
      :data-aos-duration="1000"
      data-aos-offset="20"
      :data-aos-delay="700"
      :data-aos="`fade-up`"
    >
      <div class="spark"></div>
      <a v-for="page,index in contacts" 
        class="social-media-item" 
        :href="page.url" target="_blank"  
        :key="page.id"
        :data-aos-duration="500"
        data-aos-offset="20"
        :data-aos-delay="800+100*index"
        :data-aos="`fade-up`"
      >
        <icon :name="useIcon(page.nameEn)" size="22px"/>
      </a>
    </div>

    
  </div>
</template>

<script setup>
const socialPages = ref(useMenu().value.social);
const contacts = ref(useMenu().value.contact);
// console.log(contacts);

const showContacts= ref(false)
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/theme";
.contacts-menus{
  position: relative;
  // top: 0;
  // left: 0;
  // width: 100vw;
  // height: 100vh;
  pointer-events: none;
  z-index: 1000;
  .message-form{
    pointer-events: all;
    position: fixed;
    bottom: 7rem;
    inset-inline-end: 1rem;
    border-radius: 5px;
    overflow: hidden;
    // padding: .7rem 1rem;
    // background-color: rgb(0, 0, 0);
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border: solid 1px rgba(255, 255, 255, 0.2);
    width: 40%;
    height: 32rem;
    max-height: 70%;

    // inset-inline-end: 0;
    // bottom: 0;
    // width: 100%;
    // height: 100%;
    // height: 30rem;
    @media (max-width:992px) {
      width: auto;
      inset-inline-start: 1rem;
    }
  }
  .messaging{
    position: relative;
    pointer-events: all;
    position: fixed;
    inset-inline-end: 1rem;
    bottom: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: white;
    // background: radial-gradient( white, #cdffd3 , white);
    border-radius: 50%;
    // overflow: hidden;
    transition: all 300ms ease-in-out;
    .circle{
      position: absolute;
      // z-index: 100;
      z-index: 2;
      left: 50%;
      top: 50%;
      width: 70%;
      height: 70%;
      background-color: black;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: all 300ms ease-in-out;
      cursor: pointer;
    }
    .messaging-btn{
      z-index: 4;
      .icon{
        color: white;
      }
    }
    
    &:hover{
      box-shadow: 0 0 5px 3px rgba(255, 255, 255, 0.7);
      .circle{
        transform: translate(-50%, -50%) scale(1.2);
      }

    }
  }
  .contact-bar{
    position: relative;
    pointer-events: all;
    position: fixed;
    bottom: 2.5rem;
    inset-inline-end: 6rem;
    border-radius: 1.5rem;
    padding: .7rem 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);

    overflow: hidden;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .social-media-item{
      margin: 0;
      margin-inline-end: 14px;
      &:last-child{
        margin-inline-end: 0;
      }
      .icon{
        color: white;
      }
    }
  }
  .social-media-bar{
    pointer-events: all;
    position: fixed;
    top: 50%;
    inset-inline-end: 1rem;
    border-radius: 1.5rem;
    overflow: hidden;
    // left: auto;
    // right: 0;
    // border-radius: 1rem 0 0 1rem ;
    // &.rtl{
    //   left: 0;
    //   right: auto;
    //   border-radius: 0 1rem 1rem 0 ;
    // }
    // width: 3rem;
    // height: 10rem;
    padding: 1rem .7rem;
    // background-color: black;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    transform: translateY(-50%);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .social-media-item{
      margin-bottom: 14px;
      &:last-child{
        margin-bottom: 0;
      }
      .icon{
        color: white;
      }
    }

  }
}

[data-aos="fade-up"] {
  transform: translateY(10px); /* Default is 100px - adjust as needed */
}
</style>