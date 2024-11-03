<template>
    <div class="flex flex-col items-center justify-end">
        <span class="text-[0.5rem]">{{ label }}</span>
        <div class="box">
            {{ value }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    value?: number
}>()
</script>