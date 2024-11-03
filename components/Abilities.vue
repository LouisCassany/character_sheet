<template>
    <div class="flex flex-col gap-2">
        <div class="flex justify-between" v-for="ability in ability">
            <div>
                <div v-if="ability == 'FOR'" class="text-[0.5rem]">Carac.</div>
                <div class="boxPrimary w-[50px]">
                    {{ ability }}
                </div>
            </div>
            <div>
                <div v-if="ability == 'FOR'" class="text-[0.5rem]">Valeur</div>
                <div class="box">
                    {{ character.abilities[ability] }}
                </div>
            </div>
            <div>
                <div v-if="ability == 'FOR'" class="text-[0.5rem]">Total</div>
                <div class="box font-bold text-primary">
                    {{ getAbilityModifier(ability) > 0 ? `+${getAbilityModifier(ability)}` :
                        getAbilityModifier(ability) }}
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ability, character, getAbilityModifier } from "../character";
</script>