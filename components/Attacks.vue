<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-col gap-3" v-for="attack in character.attaques">
            <div class="flex items-end gap-1">
                <span class="boxPrimary p-3">{{ attack.nom }}</span>
                <Box label="Total" :value="getAttackBonus(attack)" /> =
                <Box label="Carac." :value="getAbilityModifier(attack.carac)" /> +
                <BoxProficiency :proficiency="attack.maitrise" /> +
                <Box label="Bonus" :value="attack.bonus_attaque" />
                <span class="rounded-full whitespace-nowrap px-2 ml-6 bg-primary text-white">
                    {{ attack.des }}
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
    return attack.bonus_attaque + getAbilityModifier(attack.carac) + getProficiencyBonus(attack.maitrise)
}
</script>