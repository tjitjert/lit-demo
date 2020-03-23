<template>
  <div id="app">
    <my-tomato title="tomato"></my-tomato>
    <button>potato</button>
  </div>
</template>

<script>
import './tomato';

export default {
  name: 'App',
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

button {
  width: 150px;
  height: 200px;
  border-radius: 50%;
  background-color: yellow;
  border: none;
}

</style>
