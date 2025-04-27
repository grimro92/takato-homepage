<template>
  <v-app>

    <v-app-bar app height="100" color="#102E5D">
      <v-toolbar-title>
        <v-img class="nav-logo" :src="logoJaJpg" cover position="center"></v-img>
      </v-toolbar-title>
      <div class="d-none d-md-flex">
        <v-btn class="font-style">自己紹介</v-btn>
        <v-btn class="font-style">仕事</v-btn>
        <v-btn class="font-style">趣味</v-btn>
        <v-btn class="font-style">海外について</v-btn>
        <v-btn class="font-style">好きなこと</v-btn>
        <v-btn class="font-style">各種リンク</v-btn>
        <v-btn class="font-style">連絡</v-btn>
      </div>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary right>
      <v-list>
        <v-list-item @click="drawer = false">自己紹介</v-list-item>
        <v-list-item @click="drawer = false">仕事</v-list-item>
        <v-list-item @click="drawer = false">趣味</v-list-item>
        <v-list-item @click="drawer = false">海外について</v-list-item>
        <v-list-item @click="drawer = false">好きなこと</v-list-item>
        <v-list-item @click="drawer = false">各種リンク</v-list-item>
        <v-list-item @click="drawer = false">連絡</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <HomeView />
    </v-main>

    <v-footer class="text-center d-flex flex-column">
      <v-btn> トップに戻る </v-btn>
      <div class="pad-12"></div>
      <div class="pt-0">2025 Takato Aihara / 無断転載を禁じます</div>
    </v-footer>

    </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue"; // ナビゲーションドロワー制御用
import logoJaJpg from "@/assets/jpg/logo_ja.png"; // ロゴ画像は App.vue で使うので残す

// 新しく作成した HomeView コンポーネントをインポート
import HomeView from "@/views/HomeView.vue";

// ナビゲーションドロワーの表示/非表示を制御する変数
const drawer = ref(false);

// App.vue 固有のその他の Composition API ロジックがあればここに記述

</script>

<style scoped>
/* App.vue の全体レイアウトや共通要素に関するスタイル */

.nav-logo {
  height: 100px;
  width: 200px;
}

.font-style {
  font-size: 19px;
  font-family: brandon-grotesque;
  font-weight: 700;
}

.pad-12 {
  padding: 12px; /* フッターで使用されているため残す */
}

/* App.vue 固有のその他のスタイル */

</style>