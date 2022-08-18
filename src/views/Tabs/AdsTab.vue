<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar class="ads-toolbar">
        <div class="wrap">
          <ion-img :src="Logo" class="logo" />
          <ion-input class="search-input" placeholder="Search Ads" />
          <div class="avatar" @click="openModal = true">
            A
            <!-- Details Modal -->
            <ion-modal :is-open="openModal" :backdrop-dismiss="false">
              <ion-toolbar>
                <ion-buttons slot="start">
                  <ion-button color="light" @click="openModal = false">
                    <ion-icon class="modal-icon" :icon="closeOutline" />
                  </ion-button>
                </ion-buttons>
              </ion-toolbar>
              <ion-content>
                <ion-img :src="Logo" class="modal-logo" />
                <div class="ion-padding">
                  <div class="modal-flex">
                    <div class="modal-avatar">A</div>
                    <div class="sec-modal">
                      <h5 class="white-text ion-no-margin">
                        AbdulAzeez Olanrewaju
                      </h5>
                      <h6 class="grey-text ion-no-margin">
                        oabdulazeez70@gmail.com
                      </h6>
                    </div>
                  </div>
                </div>
              </ion-content>
            </ion-modal>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <AdsCard :ads="adsArray" />
      <FabModal />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonInput,
  IonImg,
  IonModal,
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/vue';
import AdsCard from '@/components/Ads.vue';
import FabModal from '@/components/FabModal.vue';
import { adsArray } from '@/data/index';

import Logo from '@/assets/images/logo.svg';
import { closeOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'AdsPage',
  components: {
    IonHeader,
    IonToolbar,
    IonContent,
    IonPage,
    IonInput,
    IonImg,
    IonModal,
    IonButton,
    IonButtons,
    IonIcon,

    AdsCard,
    FabModal,
  },
  setup: () => {
    const openModal = ref<boolean>(false);
    return {
      adsArray,
      Logo,
      closeOutline,
      openModal,
    };
  },
});
</script>

<style scoped>
.ads-toolbar {
  --background: #121212;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row !important;
}

.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding-inline: 20px;
}

.logo {
  width: 25px;
  height: 25px;
}

.search-input {
  --background: #323232;
  border-radius: 10px;
  --color: #e2e2e2;
  font-size: 13px;
}

.avatar {
  width: 28.7px;
  height: 28.7px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #121212;
  font-weight: 600;
}

ion-modal {
  --height: 50%;
  --border-radius: 16px;
}

.modal-logo {
  width: 30px;
  height: 30px;
  margin: 0 auto;
}

ion-modal ion-content {
  padding-top: 0px !important;
}

.modal-flex {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.modal-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #121212;
  font-weight: 600;
  font-size: 23px;
}

.modal-icon {
  font-size: 30px;
}

.sec-modal h5 {
  font-size: 14.5px;
}

.sec-modal h6 {
  font-size: 11.3px;
  color: #cbcbcb;
}
</style>
