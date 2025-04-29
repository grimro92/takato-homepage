<template>
  <v-container class="links-container py-12">
    <v-row class="justify-center">
      <v-col cols="12" md="8">
        <div class="content-wrapper pa-6">
          <p class="p-main text-center mb-8">各種リンク</p>

          <p class="body-text text-center mb-8">
            私のオンラインでの活動や情報発信はこちらからご覧いただけます。
          </p>

          <v-row class="justify-center">
            <v-col cols="auto">
              <v-btn
                href="[あなたのGitHubプロフィールのURL]"
                target="_blank"
                color="black"
                large
                class="ma-2"
              >
                <v-icon left>mdi-github</v-icon>
                GitHub
              </v-btn>
            </v-col>

            <v-col cols="auto">
              <v-btn
                href="[あなたのX(Twitter)プロフィールのURL]"
                target="_blank"
                color="#1DA1F2"
                dark
                large
                class="ma-2"
              >
                 <v-icon left>mdi-twitter</v-icon>
                X (Twitter)
              </v-btn>
            </v-col>

            <v-col cols="auto">
              <v-btn
                href="[あなたのZennプロフィールのURL]"
                target="_blank"
                color="#3EA8FF"
                dark
                large
                class="ma-2"
              >
                 Zenn
              </v-btn>
            </v-col>

            </v-row>


          <div class="text-center mt-8">
             <v-btn color="primary" to="/" large>
               ホームに戻る
             </v-btn>
              <v-btn color="secondary" to="/likes" large class="ml-4">
               好きなこと に戻る
             </v-btn>
           </div>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// 特にこのページ固有のリアクティブデータやロジックは不要であれば追加しない
// import { ref } from 'vue';
</script>

<style scoped>
/* 他のページから共通で使うと思われるスタイルをコピー */
.p-main {
  font-size: 38px;
  font-family: brandon-grotesque;
  font-weight: 700;
}

.body-text {
    font-size: 18px;
    font-family: 'Noto Sans JP', sans-serif; /* 日本語フォントを指定 */
    line-height: 1.7; /* 行間を広げて読みやすく */
    color: #333;
}

.content-wrapper {
  /* AboutView や HomeView からコピーしたスタイルをベースに調整 */
  display: flex;
  flex-direction: column;
  /* text-align は各要素で指定 */
  background-color: #FAF8F6; /* HomeView/AboutView と同じ背景色 */
  width: 100%;
  /* padding は親要素の pa-6 で指定 */
  border-radius: 8px; /* 角を少し丸く */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 影を追加 */
}


/* 必要に応じて、このページ固有のスタイルを追加 */
.links-container {
    max-width: 1500px; /* コンテンツの最大幅を制限 */
}

/* 細かい調整 */
.mb-8 { margin-bottom: 2rem !important; } /* 余白調整 */
.ma-2 { margin: 0.5rem !important; } /* ボタン間の余白 (Vuetify 標準クラス) */
.ml-4 { margin-left: 1rem !important; } /* ボタン間の余白 */
.mt-8 { margin-top: 2rem !important; } /* ボタンブロックの上の余白 */


/* スマホ表示時の調整 */
@media (max-width: 600px) { /* Vuetify の sm ブレークポイント */
  .p-main {
    font-size: 32px; /* スマホでは少し小さく */
  }
  /* ボタンを縦に並べる場合は v-row の justify-center と v-col の cols="auto" で調整されます */
}

</style>