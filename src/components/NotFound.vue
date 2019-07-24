<template>
  <div>
    <h1>{{ greeting }}</h1>
    <h1>404 Page Not Found!!!</h1>
  </div>
</template>

<script>
export default {
  props: {
    greeting: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
