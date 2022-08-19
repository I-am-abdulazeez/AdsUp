<template>
  <!-- Profile Modal -->
  <ion-modal :is-open="isOpenProp" :backdrop-dismiss="false">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="onCloseProp">
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
            <h5 class="white-text ion-no-margin">AbdulAzeez Olanrewaju</h5>
            <h6 class="grey-text ion-no-margin">oabdulazeez70@gmail.com</h6>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-modal>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from 'vue';

import {
  IonModal,
  IonContent,
  IonToolbar,
  IonButtons,
  IonButton,
  IonImg,
  IonIcon,
} from '@ionic/vue';

import Logo from '@/assets/images/logo.svg';
import { closeOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'ProfileModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
  components: {
    IonModal,
    IonContent,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonImg,
  },
  setup: (props) => {
    const { isOpen: isOpenProp, onClose: onCloseProp } = toRefs(props);
    onMounted(() => {
      console.log('ProfileModal mounted');
    });
    return {
      Logo,
      closeOutline,
      isOpenProp,
      onCloseProp,
    };
  },
});
</script>

<style scoped>
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
  color: white;
}

.sec-modal h5 {
  font-size: 14.5px;
}

.sec-modal h6 {
  font-size: 11.3px;
  color: #cbcbcb;
}
</style>
