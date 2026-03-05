<template>
  <v-app>

    <v-app-bar app height="100" color="#102E5D">
      <v-toolbar-title @click="goToHome" class="clickable-logo">
        <v-img class="nav-logo" :src="logoJaJpg" cover position="center"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer> <!-- spacer between logo and nav -->
      <!-- 言語切り替えはナビボタンの前 -->
      <v-menu class="mx-2">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" class="ma-2" elevation="2">
            <v-icon>mdi-earth</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="changeLanguage('ja')">
            <v-list-item-title>日本語</v-list-item-title>
          </v-list-item>
          <v-list-item @click="changeLanguage('en')">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="d-none d-md-flex">
        <v-btn class="font-style" to="/about">{{ $t('nav.about') }}</v-btn>
        <v-btn class="font-style" to="/work">{{ $t('nav.work') }}</v-btn>
        <v-btn class="font-style" to="/hobby">{{ $t('nav.hobby') }}</v-btn>
        <v-btn class="font-style" to="/overseas">{{ $t('nav.overseas') }}</v-btn>
        <v-btn class="font-style" to="/likes">{{ $t('nav.likes') }}</v-btn>
        <v-btn class="font-style" to="/jic">{{ $t('nav.jic') }}</v-btn>
        <v-btn class="font-style" to="/links">{{ $t('nav.links') }}</v-btn>
        <v-btn class="font-style" to="/contact">{{ $t('nav.contact') }}</v-btn>
      </div>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary right>
      <v-list>
        <v-list-item @click="drawer = false" to="/about">{{ $t('nav.about') }}</v-list-item>
        <v-list-item @click="drawer = false" to="/work">{{ $t('nav.work') }}</v-list-item>
        <v-list-item @click="drawer = false" to="/hobby">{{ $t('nav.hobby') }}</v-list-item>
        <v-list-item @click="drawer = false" to="/overseas">{{ $t('nav.overseas') }}</v-list-item>
        <v-list-item @click="drawer = false" to="/likes">{{ $t('nav.likes') }}</v-list-item>
        <v-list-item @click="drawer = false" to="/jic">{{ $t('nav.jic') }}</v-list-item>
        <v-list-item @click="drawer = false" to="/links">{{ $t('nav.links') }}</v-list-item>
        <v-list-item @click="drawer = false" to="/contact">{{ $t('nav.contact') }}</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="text-center d-flex flex-column">
      <v-btn @click="scrollToTop">{{ $t('footer.backToTop') }}</v-btn>
      <div class="pad-12"></div>
      <div class="pt-0">2025 Takato Aihara / 無断転載を禁じます</div>
    </v-footer>

  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import logoJaJpg from "@/assets/jpg/logo_ja.png";

const router = useRouter();
const drawer = ref(false);
const { locale } = useI18n();

const goToHome = () => {
  router.push('/'); // ホーム('/')へ遷移
  if (drawer.value) { // ドロワーが開いている場合は閉じる (任意)
    drawer.value = false;
  }
};

const changeLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('language', lang);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0, // ページの最上部 (垂直方向の位置)
    behavior: 'smooth' // スムーズなアニメーションでスクロール
  });
};
</script>

<style scoped>
.nav-logo {
  height: 100px;
  width: 200px;
  display: inline-block;
}
.v-toolbar-title {
  white-space: nowrap;
}

.font-style {
  font-size: 19px;
  font-family: brandon-grotesque;
  font-weight: 700;
}

.pad-12 {
  padding: 12px;
}

.clickable-logo {
  cursor: pointer; /* カーソルをポインターにする */
}
</style>
