<template>
  <div class="page pageBg p-[1rem] grid grid-cols-12 grid-rows-12 gap-6">
    <!-- <div class="col-span-2 row-span-3 bg-blue-200">
      <img src="./public/pathfinder_logo.png" class="flex h-10 rounded-md" />
      <Infos />
    </div> -->
    <div class="col-span-3 row-span-3 flex flex-col justify-around">
      <img src="./public/pathfinder_logo.png" />
      <Abilities class="bg-red-200 row-span-3 col-span-3" />
    </div>
    <Defense class="bg-green-200 row-span-3 col-span-6" />
    <div class="col-span-3 row-span-3 flex flex-col justify-between">
      <span class="text-center text-4xl text-red-800 font-mono">{{ character.name }}</span>
      <img src="./public/monk3.webp" class="rounded-md" />
    </div>
    <Attacks class="bg-blue-200 row-span-1 col-span-9" />
    <Skills class="bg-purple-200 row-span-8 col-span-8" />
  </div>
</template>

<script setup lang="ts">
import { character } from "./character";
</script>

<style>
.pageBg {
  background-image: url("./background.jpg");
  background-repeat: repeat;
}

/* document */
@media screen {

  /* Screen styles */
  body {
    background: #e0e0e0;
    background: linear-gradient(to right, #c0c0c0 0%, #e0e0e0 50%, #c0c0c0 100%);
    padding-bottom: 2cm;
  }

  .page {
    width: 21cm;
    height: 29.7cm;
    box-shadow: 0 0 1cm rgba(0, 0, 0, 0.1);
    margin: 1cm auto;
  }
}

@media print {

  /* Print styles */
  @page {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  main {
    height: 100%;
  }

  .page {
    min-height: 100%;
    max-height: 100%;
    height: 100vh;
    box-sizing: border-box;
    break-inside: avoid;
  }

  #printButton {
    display: none;
  }
}
</style>