<template>
  <div>
    <h4>Vue.js</h4>
    <p>hi Hello</p>

    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'VueComponent',
};
</script>

<style>

</style>
