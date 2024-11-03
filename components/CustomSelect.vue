<template>
    <div class="w-1/2 mx-auto">
        <div class="dropdown dropdown-bottom w-full">
            <input tabindex="0" role="button" type="text" placeholder="Rechercher un don, un sort etc."
                class="input input-bordered input-primary w-full outline-none bg-transparent !cursor-text"
                v-model="query" />
            <div v-if="results.length > 0" tabindex="0"
                class="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-4 shadow border border-primary">
                <template v-for="(result, index) of results">
                    <hr v-if="index > 0" class="border-primary my-2 ">
                    <div class="group hover:text-primary hover:font-bold text-base flex justify-between cursor-pointer"
                        @click="$emit('add', result)">
                        <span>{{ result.name }}</span>
                        <Add class="hidden bg-primary text-white rounded-full group-hover:flex" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Searcher } from "fast-fuzzy"

type Option = {
    [key: string]: any
    name: string
}

const props = defineProps<{
    options: Option[]
}>()

const query = ref("")
const searcher = new Searcher(props.options, { keySelector: (obj) => obj.name })

const results = computed(() => {
    if (query.value.length < 2) return []
    const results = searcher.search(query.value, { returnMatchData: true }).map((result) => result.item)
    return results.slice(0, 5)
})


</script>