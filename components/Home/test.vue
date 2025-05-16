<template>
  <div class="home-page">
    <h1 v-for="job in jobs" :key="job.id">
      {{ job.title }}
      <p>
        {{ job.position_salary }}
      </p>
    </h1>

  </div>
</template>

<script setup>
  const { data:jobsData } = await useFetch('http://127.0.0.1:8000/api/v1/jobs/')

  const jobs = ref(null)
  watchEffect(()=> {
    console.log(process);
    if(process.client) {
      if(jobsData.value) {
        console.log(jobsData.value);
        jobs.value = jobsData.value
      }
    }
  })
</script>

<style lang="scss" scoped>

</style>