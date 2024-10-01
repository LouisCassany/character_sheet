<template>
    <div class="flex w-full flex-col">
        <span v-if="spell.RangeFR">Portée :{{ spell.RangeFR }}</span>
        <span v-if="spell.TimeFR">Actions : {{ spell.TimeFR }}</span>
        <div v-html="spell.description"></div>
    </div>
</template>

<script lang="ts" setup>

defineProps({
    spell: {
        type: Object,
        required: true
    }
})
</script>