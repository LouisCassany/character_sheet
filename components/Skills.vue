<template>
    <div class="w-full flex flex-col justify-between">
        <div v-for="skill in character.skills" class="flex items-end w-full justify-between">
            <div class="w-[200px] box bg-black text-white">
                {{ skill.name }}
            </div>
            <div>
                <Box :label="skill.name == 'Acrobaties' ? 'Total' : ''" :value="1"></Box>
            </div>
            <span>
                =
            </span>
            <span class="w-[30px]">
                {{ skill.ability }}
            </span>
            <div>
                <Box :label="skill.name == 'Acrobaties' ? 'Carac.' : ''"
                    :value="character.abilitiesModifiers[skill.ability]"></Box>
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
import { character } from "../character";
</script>