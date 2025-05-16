<template>
    <div class="count-right" v-if="currentTime">
      	<span v-if="days" class="counter c-1">
        <h5>{{ days }}</h5>
        <p>Days</p>
        </span>
        <span v-if="hours" class="counter c-2">
        <h5>{{ hours || formatTime }} </h5>
        <p>Hr</p>
        </span>
        <span v-if="currentTime" class="counter c-3">
        <h5>{{ minutes || formatTime }}</h5>
        <p>Min</p>
        </span>
        <span v-if="currentTime" class="counter c-4">
        <h5>{{ seconds || formatTime }}</h5>
        <p>Sc</p>
        </span>
   </div>
    <div class="vald" v-if="!currentTime">
     Sorry Time's Offres Up!
    </div>
</template>
<style lang="scss" scoped>
.count-right{
  margin: 20px 0;
  @media (max-width: 700.98px) {
  margin: 10px 0;

  }
  display: flex;
  align-items: center;
  h5{
    margin: 0;
  }
  p{
    margin: 0;
    color: #777777;
  }
  span{
    background-color: #fff;
    margin-inline-end: 10px;
    border-radius: 10px;
    width: 68px;
    height: 68px;
    display: grid;
    place-content: center;
    @media (max-width: 700.98px) {
    width: 45px;
    height: 45px;
    *{
      font-size: 14px !important;
    }
    }
  }
}
</style>
<script>
export default {
  props: {
    deadline: {
      type: String,
      required: true, 
    },
    speed: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      currentTime: Date.parse(this.deadline) - Date.parse(new Date())
    };
  },
  mounted() {
    setTimeout(this.countdown, 1000);
  },
  computed: {
    seconds() {
      return Math.floor((this.currentTime / 1000) % 60);
    },
    minutes() {
      return Math.floor((this.currentTime / 1000 / 60) % 60);
    },
    hours() {
      return Math.floor((this.currentTime / (1000 * 60 * 60)) % 24);
    },
    days() {
      return Math.floor(this.currentTime / (1000 * 60 * 60 * 24));
    }
  },
  filters: {
    formatTime(value) {
      if (value < 10) {
        return "0" + value;
      }
      return value;
    }
  },
  methods: {
    countdown() {
      this.currentTime = Date.parse(this.deadline) - Date.parse(new Date());
      if (this.currentTime > 0) {
        setTimeout(this.countdown, this.speed);
      } else {
        this.currentTime = null;
      }
    }
  }
}
</script>