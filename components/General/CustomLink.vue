<template>
  <!-- <div :class="`more-box`"
  :style="{
    transform: translateX,
    'justify-content': justifyContent
  }"> -->
    <NuxtLink :to="url" :class="`txt-more ${classes}`">
      <!-- <span class="dot-before"></span> -->
      <span class="text font-small-12-responsive">{{ text }}</span>
      <span class="dot-after"></span>
    </NuxtLink>
  <!-- </div> -->
</template>

<script setup>
  const { url, text, translateX, justifyContent, classes } = defineProps(["url", "text", "translateX", "justifyContent", "classes"]);
</script>

<style lang="scss" scoped>
  // .more-box {
  //   display: flex;
  //   cursor: pointer;
    .txt-more {
      text-decoration: none;
      // color: #fff;
      // direction: ltr;
      &:hover { color: $gold; }
      .text {
        color: $light_grey; 
        vertical-align: middle;
        @include transition(all, .5s, ease);
        &:hover { color: $gold; }
      }
      .dot-after,
      .dot-before {
        display: inline-block;
        height: 1px;
        background: $black;
        position: relative;
      }
      .dot-before:before,
      .dot-after:after {    
          content: '';
          display: inline-block;
          top: -5px;
          position: absolute;
          border-top: 6px solid transparent;
          border-left: 6px solid $black;
          border-right: 6px solid transparent;
          border-bottom: 6px solid transparent;
          @include rtl(border-left, 6px solid $black, 6px solid transparent);
          @include rtl(border-right, 6px solid transparent, 6px solid $black);
          // position: absolute;
          // display: inline-block;
          // width: 5px;
          // height: 5px;
          // top: -2px;
          // border-radius: 50%;
          // background: $gold;        
      }
      .dot-before { 
        width: 120px; margin-right: 15px;
        @include sm-mobile { 
          width: 80px;
        }
        &:before { left: 0; }
      }
      .dot-after {
        width: 40px;
        @include rtl(margin-left, 15px, unset);
        @include rtl(margin-right, unset, 15px);
        @include sm-mobile { 
          width: 30px;
        }
        &:after { 
          @include rtl(right, -6px, unset);
          @include rtl(left, unset, -6px);
        }
      }    
    }
  // }

</style>