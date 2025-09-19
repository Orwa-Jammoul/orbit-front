<template>
  <div class="notify-container" :dir="rtl()">
    <TransitionGroup name="notify">
      <div 
        v-for="msg in messages" 
        :key="msg.id"
        class="notify-message"
        :class="msg.type"
        @click="removeMessage(msg.id)"
      >
        <div class="notify-icon">
          <span v-if="msg.type === 'success'">✓</span>
          <span v-if="msg.type === 'error'">✕</span>
          <span v-if="msg.type === 'warn'">⚠</span>
          <span v-if="msg.type === 'info'">ℹ</span>
        </div>
        <div class="notify-content">
          <div class="notify-title">
            {{ msg.title ? $t( msg.title) : useTr( msg.titleEn, msg.titleAr, msg.titleGe ) }}
          </div>
          <div class="notify-text">
            {{ msg.message ? $t(msg.message) : useTr( msg.messageEn, msg.messageAr, msg.messageGe ) }}
          </div>
        </div>
        <div class="notify-progress" :style="`animation-duration: ${msg.duration}ms`"></div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
const messages = ref([])
const timeouts = ref({}) // Store timeout references

const isRemoving = ref(false) 

// Function to remove a message by index
const removeMessage = (id) => {
  isRemoving.value = true
  useNotify().value = useNotify().value.filter(msg => msg.id != id)
  messages.value = useNotify().value
  isRemoving.value = false
} 

watch(notifyTrigger(), (newValue) => {
  console.log('yes', useNotify().value);
  console.log('yes', newValue);
  if(!isRemoving.value){
    console.log("not allowed", useNotify().value);
    messages.value = useNotify().value

    // Set up removal timeouts for new notifications
    for (let i = 0; i < useNotify().value.length; i++) {
      const notification = useNotify().value[i];
      if(notification.duration+ notification.currentTime < Date.now()){
        removeMessage(notification.id)
      }else if (notification.duration && notification.duration > 0) {
        setTimeout(() => {
          removeMessage(notification.id)
        }, notification.duration)
        // timeouts.value[notification.id] = setTimeout(() => {
        //     removeMessage(notification.id)
        //   }, notification.duration)
        // console.log('timeouts', timeouts.value);
      }
    }
  }
}, { immediate: true })

</script>

<style lang="scss" scoped>
/* Styles remain the same as before */
.notify-container {
  position: fixed;
  top: 5rem;
  right: 1rem;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 350px;
  width: 100%;
  .notify-message {
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    color: white;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateX(-4px);
    }
    
    &.success {
      background: linear-gradient(135deg, #4caf50, #2e7d32);
      border-left: 4px solid #2e7d32;
    }
    
    &.error {
      background: linear-gradient(135deg, #f44336, #c62828);
      border-left: 4px solid #c62828;
    }
    
    &.warn {
      background: linear-gradient(135deg, #ff9800, #ef6c00);
      border-left: 4px solid #ef6c00;
    }
    
    &.info {
      background: linear-gradient(135deg, #2196f3, #1565c0);
      border-left: 4px solid #1565c0;
    }

    // Animation classes
    &.notify-enter-active,
    &.notify-leave-active {
      transition: all 0.5s ease;
    }

    &.notify-enter-from{
      opacity: 0;
      transform: translateX(100%);
    }

    &.notify-leave-to {
      opacity: 0;
      transform: translateX(100%);
    }

    // children
  
    .notify-icon {
      font-size: 1.5rem;
      margin-inline-end: 0.75rem;
      line-height: 1;
    }
    
    .notify-content {
      flex: 1;
      .notify-title {
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }
      
      .notify-text {
        font-size: 0.875rem;
        opacity: 0.9;
      }
    }
    
    .notify-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.7);
      width: 100%;
      animation: progress linear ;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      transform-origin: left;
    }
  }
}


@keyframes progress {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}
// @keyframes hide {
//   from {
//     transform: scaleX(1);
//   }
//   to {
//     transform: scaleX(0);
//   }
// }




.notify-move {
  transition: transform 0.5s ease;
}
</style>