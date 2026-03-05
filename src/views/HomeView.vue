<template>
  <div class="position-relative">
    <v-img class="hummus-img" :src="japanJpg" cover position="center" max-height="900px"></v-img>
    <div class="overlay-content pa-3">
      <v-row>
        <v-col>
          <p class="p-main">{{ $t('home.welcome') }}</p>
          <p class="p-sub">{{ $t('home.subtitle') }}</p>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn variant="flat" to="/about">{{ $t('home.aboutButton') }}</v-btn>
        </v-col>
        </v-row>
    </div>
  </div>


  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-row class="d-flex flex-column center-content">
          <v-col class="pb-0">
            <v-img :src="workJpg" cover></v-img>
          </v-col>
          <v-col class="pt-0">
            <div class="bottom-text bgc-red">
            <p class="p-sub">{{ $t('home.workDesc') }}</p>
            <p class="p-main">{{ $t('home.workTitle') }}</p>
            <div class="pad-12"></div>
            <v-btn to="/work">{{ $t('home.workButton') }}</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <v-row class="d-flex flex-column center-content">
          <v-col class="pb-0">
            <v-img :src="mJpg"></v-img>
          </v-col>
          <v-col class="pt-0">
            <div class="bottom-text bgc-blue">
              <p class="p-sub">{{ $t('home.hobbyDesc') }}</p>
              <p class="p-main">{{ $t('home.hobbyTitle') }}</p>
              <div class="pad-12"></div>
              <v-btn to="/hobby">{{ $t('home.hobbyButton') }}</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="center-content ex-cont" cols="12">
        <div class="content-wrapper">
          <p class="p-main">{{ $t('home.overseasTitle') }}</p>
          <p class="p-sub">{{ $t('home.overseasDesc') }}</p>
          <div class="pad-12"></div>
          <v-btn to="/overseas">{{ $t('home.overseasButton') }}</v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4" order="3" order-md="1" class="center-content pt-0 pt-md-3">
        <div class="content-wrapper">
          <p class="p-main">{{ $t('home.likesTitle') }}</p>
          <p class="p-sub">{{ $t('home.likesDesc') }}</p>
          <div class="pad-12"></div>
          <v-btn to="/likes">{{ $t('home.likesButton') }}</v-btn>
        </div>
      </v-col>

      <v-col cols="6" md="4" order="1" order-md="2" class="pr-0  pb-0 pb-md-3">
        <v-img :src="diner" position="bottom" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
      </v-col>
      <v-col cols="6" md="4" order="2" order-md="3" class="ps-0 pb-0 pb-md-3">
        <v-img :src="christomas" position="center" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
      </v-col>
    </v-row>

    <!-- 日本のインターネット文化 セクション -->
    <v-row class="text-center">
      <v-col class="center-content ex-cont" cols="12">
        <div class="content-wrapper">
          <p class="p-main">{{ $t('home.jicTitle') }}</p>
          <p class="p-sub">{{ $t('home.jicDesc') }}</p>
          <div class="pad-12"></div>
          <v-btn to="/jic">{{ $t('home.jicButton') }}</v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pb-0 pb-md-3" cols="12" md="8" order="1" order-md="1">
        <v-img :src="connect" position="bottom" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
      </v-col>
      <v-col class="center-content pt-0 pt-md-3" cols="12" md="4" order="2" order-md="2">
        <div class="content-wrapper">
          <p class="p-main">{{ $t('home.linksTitle') }}</p>
          <p class="p-sub">{{ $t('home.linksDesc') }}</p>
          <div class="pad-12"></div>
          <v-btn to="/links">{{ $t('home.linksButton') }}</v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="center-content pt-0 pt-md-3" cols="12" md="4" order="2" order-md="1">
        <div class="content-wrapper">
          <p class="p-main">{{ $t('home.contactTitle') }}</p>
          <p class="p-sub">{{ $t('home.contactDesc') }}</p>
          <div class="pad-12"></div>
          <v-btn to="/contact">{{ $t('home.contactButton') }}</v-btn>
        </div>
      </v-col>
      <v-col class="pb-0 pb-md-3" cols="12" md="8" order="1" order-md="2">
        <v-img :src="mailJpg" max-height="400px" class="bg-grey-lighten-2" cover></v-img>
      </v-col>
    </v-row>

  </v-container>

</template>

<script setup lang="ts">
// Composition API の機能が必要ならここでインポート
// import { ref, onMounted } from 'vue';

// HomePage のコンテンツで使用する画像などをインポート
import japanJpg from "@/assets/jpg/japan.jpg";
import workJpg from "@/assets/jpg/work.jpg";
import mJpg from "@/assets/jpg/25402141_m.jpg";
import christomas from "@/assets/jpg/pexels-brett-sayles-1708601.jpg";
import diner from "@/assets/jpg/diner.jpg";
import connect from "@/assets/jpg/connect.jpg";
import mailJpg from "@/assets/jpg/mail.jpg";

// コンテンツ固有のリアクティブデータやメソッドがあればここに記述
// const exampleData = ref('');
// function exampleMethod() { ... }

</script>

<style scoped>
/* App.vue から HomePage のコンテンツに関するスタイルを移動 */

.p-main {
  font-size: 38px;
  font-family: brandon-grotesque;
  font-weight: 700;
}

.p-sub {
  font-size: 24px;
  font-family: brandon-grotesque;
  font-weight: 400;
}

.position-relative {
  position: relative;
  /* 子要素の absolute を有効にする */
}

.overlay-content {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  height: 100%;
  width: 100%;
}

.hummus-img {
  filter: brightness(80%);
}

.bottom-text {
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bgc-red {
  /* background-color: #D41C1F; */
  background-color: #FAF8F6;
}

.bgc-blue {
  /* background-color: #158B99; */
  background-color: #FAF8F6;
}

.center-content {
  display: flex;
  /* フレックスボックス適用 */
  flex-direction: column;
  /* 縦方向に並べる */
  align-items: center;
  /* 横方向の中央揃え */
  justify-content: center;
  /* 縦方向の中央揃え */
  text-align: center;
}

.content-wrapper {
  display: flex;
  /* フレックスボックス適用 */
  flex-direction: column;
  /* 縦方向に並べる */
  align-items: center;
  /* 横方向の中央揃え */
  justify-content: center;
  /* 縦方向の中央揃え */
  text-align: center;
  background-color: #FAF8F6;
  height: 100%;
  width: 100%;
  padding: 12px;
}

.pad-12 {
  padding: 12px;
}

/* HomeView 固有のその他のスタイル */

</style>