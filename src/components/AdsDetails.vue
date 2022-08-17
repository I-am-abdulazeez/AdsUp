<template>
  <h4 v-for="ad in adsArray" :key="ad.id">
    {{ ad.name }}
  </h4>
</template>

<script lang="ts">
import { adsArray } from '@/data/index';
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'AdsDetails',
  setup: () => {
    const route = useRoute();
    const userId = computed(() => {
      return route.params.userId;
    });

    console.log(userId);

    return {
      userId,
      adsArray,
    };
  },
});
</script>

<style scoped></style>
