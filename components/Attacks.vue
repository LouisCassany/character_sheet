<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-col gap-3" v-for="attack in character.attacks">
            <div class="flex items-end gap-1">
                <span class="boxPrimary p-3">{{ attack.name }}</span>
                <Box label="Total" :value="getAttackBonus(attack)" /> =
                <Box label="Carac." :value="getAbilityModifier(attack.ability)" /> +
                <BoxProficiency :proficiency="attack.proficiency" /> +
                <Box label="Bonus" :value="attack.attackBonus" />
                <span class="rounded-full whitespace-nowrap px-2 ml-6 bg-primary text-white">
                    {{ attack.dices }}
                </span>
            </div>
            <div class="flex w-full gap-2">
                <span v-for="trait in attack.traits" class="box p-2 rounded-md">
                    {{ trait }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { character, getAbilityModifier, getProficiencyBonus } from "../character";

function getAttackBonus(attack: any) {
    return attack.attackBonus + getAbilityModifier(attack.ability) + getProficiencyBonus(attack.proficiency)
}
</script>