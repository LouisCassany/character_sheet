<template>
    <div class="p-4">
        <div class="w-full flex justify-between">
            <h2 class="text-2xl font-bold text-primary mb-2">{{ data.name }}</h2>
            <Remove
                class="text-primary h-8 w-8 bg-primary bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-20"
                @click="$emit('remove', data)" />
        </div>
        <div class="flex w-full flex-col">
            <span v-if="data.RangeFR">Portée :{{ data.RangeFR }}</span>
            <span v-if="data.TimeFR">Actions : {{ data.TimeFR }}</span>
            <hr class="">
            <div v-html="data.description"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>

defineProps({
    data: {
        type: Object,
        required: true
    }
})

</script>