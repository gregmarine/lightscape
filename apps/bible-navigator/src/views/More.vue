<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lightscape - More</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="doSignOut">Sign Out</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ExploreContainer name="More page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";

import { useRouter } from "vue-router";
import useFirebase from "../composables/firebase";

export default {
  name: "Plans",
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonButton,
  },
  setup() {
    const { push } = useRouter();
    const { signOut } = useFirebase();

    const doSignOut = async () => {
      await signOut();
      push({ name: "SignIn" });
    };

    return {
      doSignOut,
    };
  },
};
</script>
