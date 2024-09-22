<template>
    <div class="flex flex-col justify-between">
        <div class="flex w-full items-end space-x-2">
            <Box label="PV" />
            <span class="text-primary font-bold text-xl">
                / {{ character.health }}
            </span>
        </div>
        <div class="flex items-end gap-2">
            <div class="boxPrimary px-2">
                {{ character.CA.armor }}
            </div>
            <Box label="Bonus CA" :value="character.CA.CABonus" />
            <Box label="Divers" :value="character.CA.bonus" />
        </div>
        <div class="flex items-end w-full gap-1">
            <Box label="CA" :value="CA" /> = 10 +
            <Box label="DEX" :value="character.CA.maxDex" /> +
            <BoxProficiency :proficiency="character.CA.proficiency" /> +
            <Box label="Divers" :value="character.CA.bonus" />
        </div>
        <div class="flex flex-col gap-1">
            <div v-for="save in character.saves" class="flex justify-between items-end w-full">
                <span class="boxPrimary w-[80px]">{{ save.name }}</span>
                <Box :label="save.name == 'Réflexe' ? 'Total' : ''"
                    :value="getAbilityModifier(save.ability) + getProficiencyBonus(save.proficiency) + save.bonus" />
                =
                <BoxProficiency :hideLabel="save.name != 'Réflexe'" :proficiency="save.proficiency" />
                +
                <Box :label="save.name == 'Réflexe' ? 'Carac' : ''" :value="getAbilityModifier(save.ability)" />
                +
                <Box :label="save.name == 'Réflexe' ? 'Divers' : ''" :value="save.bonus" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { character, getAbilityModifier, getProficiencyBonus } from "../character";

const CA = computed(() => {
    return 10 + character.value.CA.CABonus + character.value.CA.maxDex + getProficiencyBonus(character.value.CA.proficiency) + character.value.CA.bonus
})
</script>