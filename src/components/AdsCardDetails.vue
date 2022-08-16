<template>
  <div>{{ adsCard.name }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { AdsCardType } from '@/types/index';

export default defineComponent({
  name: 'AdsCardDetails',
  props: {
    adsCard: {
      required: true,
      type: {} as PropType<AdsCardType>,
    },
  },
  setup: (props) => {
    const { adsCard: adsCardProp } = toRefs(props);

    return {
      adsCardProp,
    };
  },
});
</script>

<style scoped></style>
