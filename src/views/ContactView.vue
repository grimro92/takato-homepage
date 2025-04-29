<template>
  <v-container class="contact-container py-12">
    <v-row class="justify-center">
      <v-col cols="12" md="8">
        <div class="content-wrapper pa-6 text-center"> <p class="p-main mb-8">お問い合わせ</p>

          <p class="body-text mb-6">
            私へのご連絡はこちらのメールアドレスにお願いいたします。
          </p>

          <p class="p-sub mb-8">
            <a href="mailto:[あなたのメールアドレス]" class="email-link">[あなたのメールアドレス]</a>
          </p>

          <p class="body-text">
            ※ スパム対策のため、お手数ですが上記アドレスをコピー＆ペーストしてご利用ください。
          </p>


          <div class="text-center mt-8">
             <v-btn color="primary" to="/" large>
               ホームに戻る
             </v-btn>
              <v-btn color="secondary" to="/links" large class="ml-4">
               各種リンク に戻る
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

/* メールアドレス部分に p-sub スタイルを適用 */
.p-sub {
  font-size: 24px;
  font-family: brandon-grotesque;
  font-weight: 700; /* 太字 */
  color: #333; /* 見やすい色 */
  /* 下線やインデントはここでは適用しない */
}


.body-text {
    font-size: 18px;
    font-family: 'Noto Sans JP', sans-serif; /* 日本語フォントを指定 */
    line-height: 1.7; /* 行間を広げて読みやすく */
    color: #333;
}

.content-wrapper {
  /* AboutView や HomeView から共通で使うと思われるスタイルをコピー */
  display: flex;
  flex-direction: column;
  /* text-align は親要素の text-center で指定 */
  background-color: #FAF8F6; /* HomeView/AboutView と同じ背景色 */
  width: 100%;
  /* padding は親要素の pa-6 で指定 */
  border-radius: 8px; /* 角を少し丸く */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 影を追加 */
}


/* 必要に応じて、このページ固有のスタイルを追加 */
.contact-container {
    max-width: 800px; /* コンテンツの最大幅を制限 */
}

/* メールアドレスリンクのスタイル */
.email-link {
    color: #007BFF; /* リンクの色 */
    text-decoration: none; /* 下線なし */
    /* :hover などでスタイルを追加することも可能 */
}

.email-link:hover {
    text-decoration: underline; /* ホバー時に下線を表示 */
}


/* 細かい調整 */
.mb-8 { margin-bottom: 2rem !important; } /* 余白調整 */
.mb-6 { margin-bottom: 1.5rem !important; }
.ml-4 { margin-left: 1rem !important; } /* ボタン間の余白 */
.mt-8 { margin-top: 2rem !important; } /* ボタンブロックの上の余白 */


/* スマホ表示時の調整 */
@media (max-width: 600px) { /* Vuetify の sm ブレークポイント */
  .p-main {
    font-size: 32px; /* スマホでは少し小さく */
  }
   .p-sub {
     font-size: 20px; /* スマホでは少し小さく */
  }
}

</style>