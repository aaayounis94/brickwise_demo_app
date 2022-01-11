<template>
  <div class="apartment">
    <img v-bind:src="asset.images[asset.currentImage].src" alt="" />
    <div class="buttonGroup">
      <button class="next" @click="next" :disabled="asset.currentImage === 0">
        Prev
      </button>
      <button
        class="prev"
        @click="prev"
        :disabled="asset.currentImage === asset.images.length - 1"
      >
        Next
      </button>
    </div>
    <div class="swipes"></div>
    <h3>{{ asset.title }}</h3>
    <h5>{{ asset.location }}</h5>
    <p>
      Share Price: {{ asset.sharePrice }} - Rental return:
      {{ asset.rentalReturn }}%
    </p>
    <button class="buy">Buy share</button>
    <button class="learn">Learn More >></button>
  </div>
</template>

<script>
export default {
  name: "Asset",
  props: {
    asset: Object,
  },
  methods: {
    prev() {
      if (this.$props.asset.currentImage > 0) {
        this.$props.asset.currentImage--;
      } else {
        this.$props.asset.currentImage = 0;
      }
    },
    next() {
      if (
        this.$props.asset.currentImage <
        this.$props.asset.images.length - 1
      ) {
        this.$props.asset.currentImage++;
      } else {
        this.$props.asset.currentImage = 0;
      }
    },
  },
};
</script>

<style scoped>
.apartment {
  padding: 28px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: fit-content;
  max-width: 340px;
  border: 1px solid #ccc;
}
.apartment:hover {
  background-color: #f5f5f5;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  cursor: pointer;
}
.flashMessage {
  padding: 16px;
  background-color: green;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: fit-content;
  justify-content: center;
  color: white;
  margin-right: 40px;
  margin-left: 40px;
  transition: opacity 1s ease-in-out;
  position: absolute;
  bottom: 100px;
}
.buy {
  padding: 16px;
  margin-top: 16px;
  width: 100%;
  background-color: lightcoral;
  border: 0px solid;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
}
.learn {
  padding: 16px;
  margin-top: 16px;
  width: 100%;
  border: 0px solid;
  border-radius: 8px;
  font-size: 18px;
  background-color: #e2e6e9;
}
h4 {
  font-size: 19px;
  margin: 0px;
  margin-bottom: 16px;
}
img {
  width: 100%;
  height: 300px;
}
h3 {
  font-size: 25px;
  margin: 0px;
  margin-bottom: 4px;
}
p {
  font-size: 18px;
  margin: 0px;
}
</style>
