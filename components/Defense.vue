<template>
    <div class="flex flex-col justify-between">
        <div class="flex w-full items-end space-x-2">
            <Box label="PV" />
            <span class="text-primary font-bold text-xl">
                / {{ PV }}
            </span>
        </div>
        <div class="flex items-end gap-2">
            <div class="boxPrimary px-2">
                {{ character.armure.nom }}
            </div>
            <Box label="Puissance" class="px-2" :value="character.armure.puissance_armure" />
            <Box label="Résillence" class="px-2" :value="character.armure.resillience_armure" />
        </div>
        <div class="flex items-end w-full gap-1">
            <Box label="CA" :value="CA" /> = 10 +
            <Box label="DEX" :value="character.armure.max_dex" /> +
            <BoxProficiency :proficiency="character.armure.maitrise" /> +
            <Box label="Armure" :value="character.armure.puissance_armure" /> +
            <Box label="Divers" :value="character.armure.bonus_divers" />
        </div>
        <div class="flex flex-col gap-1">
            <div v-for="save in character.jds" class="flex justify-between items-end w-full">
                <span class="boxPrimary w-[80px]">{{ save.nom }}</span>
                <Box :label="save.nom == 'Réflexe' ? 'Total' : ''"
                    :value="getAbilityModifier(save.carac) + getProficiencyBonus(save.maitrise) + save.bonus_divers" />
                =
                <BoxProficiency :hideLabel="save.nom != 'Réflexe'" :proficiency="save.maitrise" />
                +
                <Box :label="save.nom == 'Réflexe' ? 'Carac' : ''" :value="getAbilityModifier(save.carac)" />
                +
                <Box :label="save.nom == 'Réflexe' ? 'Divers' : ''" :value="save.bonus_divers" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { character, getAbilityModifier, getProficiencyBonus } from "../character";
import Box from "./Box.vue";

const CA = computed(() => {
    console.log(character.value.armure.max_dex)
    return 10 + Math.max(character.value.armure.max_dex, getAbilityModifier("DEX")) + getProficiencyBonus(character.value.armure.maitrise) + character.value.armure.bonus_divers
})

const PV = computed(() => {
    return character.value.classe.pv_initiaux + character.value.niveau * (getAbilityModifier("CON") + character.value.heritage.pv_par_niveau)
})
</script>