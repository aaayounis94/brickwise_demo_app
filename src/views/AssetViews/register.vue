<template>
  <h1>Here you can register your asset</h1>
  <button class="register" @click="register">Register</button>
</template>

<script>
export default {
  props: ["asset"],
  inject: ["GlobalStore"],
  methods: {
    register() {
      this.GlobalStore.flashMessage = `You are successfully registered ${this.asset.title}`;
      setTimeout(() => {
        this.GlobalStore.flashMessage = "";
      }, 3000);
      console.log("registered");
      this.$router.replace({
        name: "AssetPage",
        // we dont need to specify the iD it will get populated  by default
        params: { id: this.asset.id },
      });
    },
  },
};
</script>
<style scoped>
.asset {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.assetData {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
}
.metric {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
p {
  margin-bottom: 0px;
}
h1 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  width: 100%;
}
</style>
