<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Lightscape - SignIn</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="flex h-full justify-center items-center">
        <div>
          <ion-item>
            <ion-label position="fixed">Email</ion-label>
            <ion-input v-model="email" placeholder="Email" />
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Password</ion-label>
            <ion-input
              v-model="password"
              placeholder="Password"
              type="password"
            />
          </ion-item>
          <ion-item>
            <ion-button @click="signIn">Sign In</ion-button>
            <router-link :to="{ name: 'SignUp' }"> or Sign Up!</router-link>
          </ion-item>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRouter, RouterLink } from "vue-router";

import useFirebase from "../composables/firebase";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
    RouterLink,
  },

  setup() {
    const email = ref<string>("");
    const password = ref<string>("");
    const { signInWithEmailPassword } = useFirebase();
    const { push } = useRouter();

    const signIn = async () => {
      await signInWithEmailPassword(email.value, password.value);
      push({ name: "Home" });
    };

    return {
      email,
      password,
      signIn,
    };
  },
});
</script>
