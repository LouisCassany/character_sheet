<template>
    <div class="text-red-800 text-4xl font-mono">
        Louis
    </div>
    <div class="flex flex-col">
        <span>
            Classe : {{ character.class }}
        </span>
        <span>
            Héritage : {{ character.ancestry }}
        </span>
        <span>
            Niveau : {{ character.level }}
        </span>
        <span>
            Langues : {{ character.languages }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import { character } from "../character";
</script>