<template>
    <div class="flex flex-col items-center justify-end">
        <span class="text-[0.5rem]" v-if="!hideLabel">Maîtrise</span>
        <div class="flex items-end gap-1">
            <div v-for="prof in proficiencies" class="flex flex-col mt-auto items-center">
                <div class="text-[0.5rem]">{{ prof }}</div>
                <div v-if="proficiency != prof" class="h-2 w-2 border-2 border-black" />
                <div v-else class="h-2 w-2 bg-black" />
            </div>
            <div class="box">
                {{ getProficiencyBonus(proficiency) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getProficiencyBonus } from '~/character';

const proficiencies = ["Q", "E", "M", "L"];

defineProps<{
    proficiency: string,
    hideLabel?: boolean
}>()
</script>