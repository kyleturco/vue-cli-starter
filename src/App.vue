<template>
  <div id="app">
    <BasicCard title='My Test Vue App' />
  </div>
</template>

<script>
import BasicCard from './components/BasicCard.vue';

export default {
  name: 'App',
  components: {
    BasicCard,
  },
};
</script>

<style>
@import 'sass/app.scss';
</style>
