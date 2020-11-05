<template>
  <div class="basic-card">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'BasicCard',
  props: {
    title: String,
  },
};
</script>
