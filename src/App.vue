<template>
  <div id="app">
    <BasicCard title='My Test Vue App' />
    <a-button type='primary'>Test</a-button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import BasicCard from './components/BasicCard.vue'

export default {
  name: 'App',
  components: {
    BasicCard,
    'a-button': Button,
  },
}
</script>

<style>
@import '~ant-design-vue/dist/antd.css';
@import 'sass/app.scss';
</style>
