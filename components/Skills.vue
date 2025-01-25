<template>
    <div class="w-full flex flex-col justify-between">
        <div v-for="skill in character.competences" class="flex items-end w-full justify-between">
            <div class="w-[200px] boxPrimary">
                {{ skill.nom }}
            </div>
            <div>
                <Box :label="skill.nom == 'Acrobaties' ? 'Total' : ''"
                    :value="getAbilityModifier(skill.carac) + getProficiencyBonus(skill.maitrise) + skill.bonus_divers" />
            </div>
            <span>
                =
            </span>
            <span class="w-[30px]">
                {{ skill.carac }}
            </span>
            <div>
                <Box :label="skill.nom == 'Acrobaties' ? 'Carac.' : ''" :value="getAbilityModifier(skill.carac)">
                </Box>
            </div>
            <BoxProficiency :hideLabel="skill.nom != 'Acrobaties'" :proficiency="skill.maitrise" />
            <span>
                +
            </span>
            <Box :label="skill.nom == 'Acrobaties' ? 'Divers.' : ''" :value="skill.bonus_divers"></Box>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { character, getAbilityModifier, getProficiencyBonus } from "../character";
</script>