<template>
    <div class="flex flex-col gap-1">
        <span>Niveau : {{ character.niveau }}</span>
        <span>Héritage : {{ character.heritage.nom }}</span>
        <span>Classe : {{ character.classe.nom }}</span>
        <span>Taille : {{ character.taille }}</span>
        <span>Vitesse : {{ character.vitesse }}</span>
        <span>Alignement : {{ character.alignement }}</span>
        <span>Langues : {{ character.langues.join(", ") }}</span>
        <div class="h-full bg-primary bg-opacity-10">
            <span class="boxPrimary">Inventaire</span>
            <div v-for="item in character.inventaire" :key="item" class="p-1">
                <span class="text-center font-bold">{{ item }}</span>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { character } from "../character";
</script>