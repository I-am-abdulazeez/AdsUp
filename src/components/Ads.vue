<template>
  <ion-card v-for="advert in adsProp" :key="advert.id">
    <ion-img :src="advert.image" class="card-image" />
    <ion-card-header>
      <div class="title-wrap">
        <ion-card-title class="card-title">{{ advert.name }}</ion-card-title>
        <ion-buttons>
          <ion-button size="small">Feedback</ion-button>
          <ion-icon :icon="arrowRedoOutline" class="icon-sm" />
        </ion-buttons>
      </div>
      <ion-card-subtitle class="card-sub">{{
        advert.timestamp
      }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content class="card-desc">{{
      advert.description
    }}</ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/vue';
import { arrowRedoOutline } from 'ionicons/icons';

import { AdsType } from '@/types/index';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AdsComponent',
  props: {
    ads: {
      required: true,
      type: Array as PropType<AdsType[]>,
    },
  },
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
    IonButton,
    IonButtons,
    IonIcon,
  },
  setup: (props) => {
    const router = useRouter();
    const { ads: adsProp } = toRefs(props);

    return {
      adsProp,
      arrowRedoOutline,
      router,
    };
  },
});
</script>

<style scoped>
.card-image {
  width: auto;
  height: 200px;
  object-fit: cover;
}
.card-title {
  font-size: 1.2rem;
  color: #fff;
}
.card-sub {
  font-size: 12px;
  color: #dadada;
  margin-top: 3px;
}

.card-link {
  text-decoration: none;
}

.card-desc {
  color: #e4e4e4;
}

.title-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.title-wrap > ion-buttons > ion-button {
  --border-radius: 20px;
  height: 28px;
  --background: none;
  font-size: 10px;
  color: #fff;
}

.icon-sm {
  font-size: 18px;
  color: #e2e2e2;
}

ion-card {
  box-shadow: none;
  border-radius: 10px;
  border: 1px solid #474747;
  margin-bottom: 20px;
  margin-top: 0px;
  margin-inline: 0px;
}
</style>
