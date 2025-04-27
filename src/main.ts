import { createApp } from 'vue';
import App from './App.vue';
// 必要に応じてルーターやストアもインポート

// --- ここから Vuetify のインポートと設定 ---
import 'vuetify/styles'; // Vuetify のスタイルシート
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// アイコンフォントのスタイルシートをインポート（@mdi/font をインストールした場合）
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
  // ここにテーマやデフォルト設定などのオプションを追加できます
  // 例: アイコンセットの指定
  icons: {
    defaultSet: 'mdi',
  },
});
// --- ここまで Vuetify の設定 ---


const app = createApp(App);

// Vuetify プラグインをアプリケーションに登録
app.use(vuetify);
// 必要に応じてルーターやストアも登録
// app.use(router);
// app.use(pinia);


app.mount('#app');