<script setup>
import { useCounterStore } from '@/store'

// access the `store` variable anywhere in the component ✨
const store = useCounterStore()
</script>

<template>
    <div>
        {{ store.doubleCount }}
    </div>
</template>
