<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-col gap-1" v-for="attack in character.attacks">
            <div class="flex items-end gap-1 justify-between">
                <span class="box bg-black text-white p-3">{{ attack.name }}</span>
                <Box label="Total" :value="getAttackBonus(attack)" /> =
                <Box label="Carac." :value="character.abilitiesModifiers[attack.ability]" /> +
                <BoxProficiency :proficiency="attack.proficiency" /> +
                <Box label="Bonus" :value="attack.attackBonus" />
            </div>
            <div class="flex justify-between">
                <span class="box p-2 rounded-full">{{ attack.dices }} + {{ attack.damageBonus }}</span>
                <div class="flex gap-2">
                    <span v-for="trait in attack.traits" class="box p-2">
                        {{ trait }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { character, getProficiencyBonus } from "../character";

function getAttackBonus(attack: any) {
    return attack.attackBonus + character.abilitiesModifiers[attack.ability] + getProficiencyBonus(attack.proficiency)
}
</script>