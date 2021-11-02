<template>
  <div class="songs">
    <h1>This is a songs page</h1>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Songs",
  components: {
    HelloWorld,
  },
};
</script>
