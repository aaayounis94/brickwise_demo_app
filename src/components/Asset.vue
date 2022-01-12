<template>
  <div class="apartment">
    <img v-bind:src="asset.images[asset.currentImage].src" alt="" />
    <div class="buttonGroup">
      <button class="prev" @click="prev" :disabled="asset.currentImage === 0">
        Prev
      </button>
      <button
        class="next"
        @click="next"
        :disabled="asset.currentImage === asset.images.length - 1"
      >
        Next
      </button>
    </div>
    <div class="swipes"></div>
    <router-link :to="{ name: 'AssetPage', params: { id: asset.id } }">
      <h3>{{ asset.title }}</h3>
      <h5>{{ asset.location }}</h5>
    </router-link>
    <p>
      Share Price: {{ asset.sharePrice }} - Rental return:
      {{ asset.rentalReturn }}%
    </p>
    <button class="buy">Buy share</button>
    <button class="learn">Learn More >></button>
  </div>
  <div v-if="(assets = null)">
    <h1>LOADING</h1>
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
.buttonGroup {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
}
.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: green;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>
