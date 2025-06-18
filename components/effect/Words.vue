<template>
  <div class="words" ref="element">
    <span class="word" v-for="word,index in words" :key="index" :style="`opacity: ${word.opacity};`">{{word.word}}</span>
  </div>
</template>

<script setup>


const {text} = defineProps(['text'])
const wordsText = ref(text.trim().split(/\s+/).filter(word => word.length > 0));
// console.log(words);
const element = ref(null)
const words = ref([])

const topScreenPadding = 200; // per px
const bottomScreenPadding = 200; // per px


for (let index = 0; index < wordsText.value.length; index++) {
  const item = wordsText.value[index];
  words.value.push({i:index, word:item, opacity:0})
  
}

// console.log(words.value);


const screenHeight = window.innerHeight;
const wordRange = (screenHeight-topScreenPadding-bottomScreenPadding)/words.value.length
let topPosition = 0;

const calcOpacity = (word_)=>{
  const start = screenHeight - bottomScreenPadding - word_.i * wordRange
  const end = screenHeight - bottomScreenPadding - (word_.i +1) * wordRange
  if(topPosition>start){
    return .1
  }else if(topPosition<end){
    return 1
  }else{
    const result = topPosition/wordRange;
    return 1 - (result - Math.floor(result));
  }
}


onMounted(()=>{
  
  window.addEventListener('scroll', ()=>{
    if(element.value){
      let rect = element.value.getBoundingClientRect();
      topPosition = rect.top
      // console.log('scrollTop', topPosition);
      words.value.map(item=> item.opacity= calcOpacity(item))
    }
    // console.log(words.value);
  })
})
</script>

<style lang="scss" scoped>
.words{
  display: flex;
  flex-wrap: wrap;
  .word{
    margin-inline-end: 5px;
    transition: all 200ms ease-in-out;
  }
}
</style>