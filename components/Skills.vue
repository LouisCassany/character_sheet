<template>
    <div class="w-full flex flex-col justify-between">
        <div v-for="skill in character.skills" class="flex items-end w-full justify-between">
            <div class="w-[200px] boxPrimary">
                {{ skill.name }}
            </div>
            <div>
                <Box :label="skill.name == 'Acrobaties' ? 'Total' : ''"
                    :value="getAbilityModifier(skill.ability) + getProficiencyBonus(skill.proficiency) + skill.bonus" />
            </div>
            <span>
                =
            </span>
            <span class="w-[30px]">
                {{ skill.ability }}
            </span>
            <div>
                <Box :label="skill.name == 'Acrobaties' ? 'Carac.' : ''" :value="getAbilityModifier(skill.ability)">
                </Box>
            </div>
            <BoxProficiency :hideLabel="skill.name != 'Acrobaties'" :proficiency="skill.proficiency" />
            <span>
                +
            </span>
            <Box :label="skill.name == 'Acrobaties' ? 'Divers.' : ''" :value="skill.bonus"></Box>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { character, getAbilityModifier, getProficiencyBonus } from "../character";
</script>