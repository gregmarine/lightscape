<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Read" href="/tabs/read">
          <ion-icon :icon="book" />
          <ion-label>Read</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Commentary" href="/tabs/commentary">
          <ion-icon :icon="reader" />
          <ion-label>Commentary</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Plans" href="/tabs/plans">
          <ion-icon :icon="checkbox" />
          <ion-label>Plans</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="More" href="/tabs/more">
          <ion-icon :icon="menu" />
          <ion-label>More</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import {
  ellipse,
  square,
  triangle,
  home,
  book,
  reader,
  checkbox,
  menu,
} from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse,
      square,
      triangle,
      home,
      book,
      reader,
      checkbox,
      menu,
    };
  },
};
</script>
