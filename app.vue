<template>
  <div class="page p-[1rem] grid grid-cols-12 grid-rows-12 gap-6">
    <!-- <div class="col-span-2 row-span-3 bg-blue-200">
      <img src="./public/pathfinder_logo.png" class="flex h-10 rounded-md" />
      <Infos />
    </div> -->
    <div class="col-span-3 row-span-3 flex flex-col justify-between">
      <img src="./public/pathfinder_logo.png" />
      <Abilities class="bg-red-20 row-span-3 col-span-3" />
    </div>
    <Defense class="bg-green-20 row-span-3 col-span-6" />
    <div class="col-span-3 row-span-3 flex flex-col justify-between">
      <span class="text-center text-4xl text-red-800 font-mono">{{ character.name }}</span>
      <img src="./public/monk3.webp" class="rounded-md" />
    </div>
    <Attacks class="bg-blue-20 row-span-1 col-span-12" />
    <Skills class="bg-purple-20 row-span-8 col-span-8" />
  </div>
  <div class="page2">
    <div v-for="index in 200">
      {{ index }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { character } from "./character";
</script>