<template>
  <div class="countdown-clock">
    <div class="countdown-timer">
      <div class="time-block">
        <span class="time-value">{{ timeLeft.days }}</span>
        <span class="time-label">Days</span>
      </div>
      <div class="time-block">
        <span class="time-value">{{ timeLeft.hours }}</span>
        <span class="time-label">Hours</span>
      </div>
      <div class="time-block">
        <span class="time-value">{{ timeLeft.minutes }}</span>
        <span class="time-label">Minutes</span>
      </div>
      <div class="time-block">
        <span class="time-value">{{ timeLeft.seconds }}</span>
        <span class="time-label">Seconds</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  eventDate: {
    type: String,
    required: true,
    validator: (value) => {
      return !isNaN(Date.parse(value));
    }
  }
});

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

const countdownInterval = ref(null);

const calculateTimeLeft = () => {
  const now = new Date();
  const eventTime = new Date(props.eventDate);
  const difference = eventTime - now;

  if (difference <= 0) {
    clearInterval(countdownInterval.value);
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return;
  }

  timeLeft.value = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

onMounted(() => {
  calculateTimeLeft();
  countdownInterval.value = setInterval(calculateTimeLeft, 1000);
});

onBeforeUnmount(() => {
  if (countdownInterval.value) {
    clearInterval(countdownInterval.value);
  }
});
</script>


<style lang="scss" scoped>
.countdown-clock {
  text-align: center;
  font-family: Arial, sans-serif;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  max-width: 600px;
  margin: 0 auto;
  .countdown-timer {
    display: flex;
    justify-content: space-between;
    margin: 0;
    
    .time-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 80px;
      .time-value {
        font-size: 1.5rem;
        font-weight: bold;
        color: #ffffff;
      }
  
      .time-label {
        font-size: 12px;
        color: #cacaca;
        text-transform: uppercase;
        margin-top: 5px;
      }
    }
  }
}


</style>