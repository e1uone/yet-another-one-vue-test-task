<script setup lang="ts">
  defineProps<{
    color?: string;
  }>();
</script>

<template>
  <div class="base-spinner center"><span></span></div>
</template>

<style scoped lang="scss">
  .base-spinner {
    height: 32px;
    width: 32px;
    -webkit-animation: base-spinner-1 4.8s linear infinite;
    animation: base-spinner-1 4.8s linear infinite;
  }
  @-webkit-keyframes base-spinner-1 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes base-spinner-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .base-spinner span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
    clip: rect(0, 32px, 32px, 16px);
    -webkit-animation: base-spinner-2 1.2s linear infinite;
    animation: base-spinner-2 1.2s linear infinite;
  }
  @-webkit-keyframes base-spinner-2 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(220deg);
    }
  }
  @keyframes base-spinner-2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(220deg);
    }
  }
  .base-spinner span::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
    clip: rect(0, 32px, 32px, 16px);
    border: 3px solid black;
    border-radius: 50%;
    -webkit-animation: base-spinner-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: base-spinner-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes base-spinner-3 {
    0% {
      -webkit-transform: rotate(-140deg);
    }
    50% {
      -webkit-transform: rotate(-160deg);
    }
    100% {
      -webkit-transform: rotate(140deg);
    }
  }
  @keyframes base-spinner-3 {
    0% {
      transform: rotate(-140deg);
    }
    50% {
      transform: rotate(-160deg);
    }
    100% {
      transform: rotate(140deg);
    }
  }
</style>
