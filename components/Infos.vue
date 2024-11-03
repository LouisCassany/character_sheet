<template>
    <div class="flex flex-col gap-1">
        <span>Niveau : {{ character.level }}</span>
        <span>Héritage : {{ character.ancestry }}</span>
        <span>Classe : {{ character.class }}</span>
        <span>Taille : {{ character.size }}</span>
        <span>Vitesse : {{ character.speed }}</span>
        <span>Alignement : {{ character.alignement }}</span>
        <span>Langues : {{ character.languages }}</span>
        <div class="h-full bg-primary bg-opacity-10">
            <span class="boxPrimary">Inventaire</span>
            <div v-for="item in character.inventory" :key="item" class="p-1">
                <span class="text-center font-bold">{{ item }}</span>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { character } from "../character";
</script>