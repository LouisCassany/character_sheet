<template>
  <div class="page p-[1rem] grid grid-cols-12 grid-rows-12 gap-6">
    <div class="col-span-3 row-span-3 flex flex-col justify-between">
      <img src="/public/pathfinder_logo.png" />
      <Abilities class="bg-red-20 row-span-3 col-span-3" />
    </div>
    <Defense class="bg-green-20 row-span-3 col-span-6" />
    <div class="col-span-3 row-span-3 flex flex-col justify-between">
      <span class="text-center text-4xl text-red-800 font-mono" style="font-family: 'Taroca' !important;">
        {{ character.name }}
      </span>
      <img src="/public/monk4.webp" class="rounded-full object-contain h-52" />
    </div>
    <Attacks class="bg-blue-20 row-span-1 col-span-12" />
    <Skills class="bg-purple-20 row-span-8 col-span-8" />
    <Infos class="bg-pink-20 row-span-8 col-span-4" />
  </div>
  <div class="page2 min-h-48">
    <CustomSelect :options="options" @add="add" class="noPrint" />
    <div class="grid grid-cols-2">
      <Data v-for="data of selection" :data="data" @remove="remove" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { character } from "./character";
import { data } from "./public/data/data";

const selection = ref<any[]>([])

const options = Object.keys(data).map((key) => {
  return {
    name: data[key as keyof typeof data].Nom,
    description: data[key as keyof typeof data].descFR,
    ...data[key as keyof typeof data]
  }
})

function add(option: any) {
  selection.value.push(option)
}

function remove(option: any) {
  selection.value = selection.value.filter(item => item !== option)
}

</script>