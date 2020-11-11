<template>
  <div id="app">
    <a-layout>
      <a-layout-content>
        <DemoView />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { Layout } from 'ant-design-vue'
import DemoView from './views/DemoView.vue'

export default {
  name: 'App',
  components: {
    'a-layout': Layout,
    'a-layout-content': Layout.Content,
    DemoView,
  },
}
</script>

<style>
@import '~ant-design-vue/dist/antd.css';
@import 'sass/app.scss';
</style>
