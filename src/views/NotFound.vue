<template>
  <div>
    <h1>Ooops!</h1>
    <h3>The {{ resource }} you are looking for is lost in the space</h3>
    <router-link :to="{ name: 'Marketplace' }">
      Back to Marketplace >>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: "page",
    },
  },
};
</script>
