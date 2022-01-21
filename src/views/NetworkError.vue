<template>
  <div class="networkError">
    <h1>Oh no !!!</h1>
    <h3>
      it looks like there is a problem with your internet connection, please
      take a breath and <a href="#" @click="$router.go(-1)">click here </a>to
      try again
    </h3>
  </div>
</template>
