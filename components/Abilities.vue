<template>
    <div class="flex flex-col gap-2">
        <div class="flex justify-between" v-for="ability in Object.keys(character.abilities)">
            <div>
                <div v-if="ability == 'FOR'" class="text-[0.5rem]">Carac.</div>
                <div class="box bg-black text-white w-[50px]">
                    {{ ability }}
                </div>
            </div>
            <div>
                <div v-if="ability == 'FOR'" class="text-[0.5rem]">Valeur</div>
                <div class="box">
                    {{ character.abilities[ability] }}
                </div>
            </div>
            <div>
                <div v-if="ability == 'FOR'" class="text-[0.5rem]">Total</div>
                <div class="box">
                    {{ character.abilitiesModifiers[ability] }}
                </div>
            </div>

        </div>
    </div>


    <!-- <div class="grid grid-rows-7 grid-flow-col h-full gap-1">
        <div class="text-[0.5rem] self-end justify-self-center">CARAC</div>
        <div v-for="ability in Object.keys(character.abilities)" class="flex">
            <span class="bg-black text-white w-11 flex justify-center items-center">
                {{ ability }}
            </span>
        </div>
        <div class="text-[0.5rem] self-end justify-self-center">VALEUR</div>
        <div v-for="ability in Object.keys(character.abilities)" class="flex self-center">
            <span class="box">
                {{ character.abilities[ability] }}
            </span>
        </div>
        <div class="text-[0.5rem] self-end justify-self-center">MODIF</div>
        <div v-for="ability in Object.keys(character.abilities)" class="flex self-center">
            <span class="box text-primary" v-if="character.abilitiesModifiers[ability] != null"> {{
                `${character.abilitiesModifiers[ability] > 0 ? "+" : ""}${character.abilitiesModifiers[ability]}` }}
            </span>
            <span class="box" v-else> </span>
        </div>
    </div> -->
</template>

<script setup lang="ts">
import { character } from "../character";
</script>