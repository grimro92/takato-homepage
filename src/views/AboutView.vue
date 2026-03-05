<template>
  <v-container class="about-container py-12">
    <v-row class="align-center justify-center">

      <v-col cols="12" md="4" class="text-center">
        <v-img :src="myPhotoJpg" alt="Takato Aihara's Photo" class="my-photo mx-auto elevation-5" cover></v-img>
      </v-col>

      <v-col cols="12" md="7" class="mt-6 mt-md-0">
        <div class="content-wrapper pa-6">
          <p class="p-main text-center text-md-left mb-4">{{ $t('about.title') }}</p>

          <p class="p-sub text-center text-md-left mb-4">
            {{ $t('about.welcome') }}
          </p>

          <p class="body-text mb-3">
            {{ $t('about.nameLabel') }}：{{ $t('about.name') }}<br>
            {{ $t('about.hometownLabel') }}：{{ $t('about.hometown') }}<br>
            {{ $t('about.ageLabel') }}：{{ $t('about.age') }}<br>
            {{ $t('about.jobLabel') }}：{{ $t('about.job') }}<br>
            {{ $t('about.favoriteworkdsLabel') }}：{{ $t('about.favoritewords') }}
          </p>

          <p class="body-text">
            {{ $t('about.description1') }}
          </p>
          <p class="body-text mb-3">
            {{ $t('about.description2') }}
          </p>

          <p class="body-text mb-6">
            {{ $t('about.description3') }}
          </p>

          <div class="text-center text-md-left">
            <v-btn color="primary" to="/" class="mt-4">
              {{ $t('about.backHome') }}
            </v-btn>
          </div>
        </div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// ★★★ あなたの実際の写真ファイルに合わせて修正してください ★★★
// 例: src/assets/jpg/my_photo.jpg に置いた場合
import myPhotoJpg from '@/assets/jpg/mycat.jpg';

// その他の Composition API ロジックがあればここに記述

</script>

<style scoped>
/* HomeView から共通で使うと思われるスタイルをコピー */
.p-main {
  font-size: 38px;
  font-family: brandon-grotesque;
  font-weight: 700;
}

.p-sub {
  font-size: 24px;
  font-family: brandon-grotesque;
  font-weight: 400;
  color: #555;
  /* 少し控えめな色 */
}

.body-text {
  font-size: 18px;
  font-family: 'Noto Sans JP', sans-serif;
  /* 日本語フォントを指定 */
  line-height: 1.6;
  color: #333;
}


.content-wrapper {
  /* HomeView からコピーしたスタイルをベースに調整 */
  display: flex;
  flex-direction: column;
  /* align-items: center; /* HomeViewでは中央寄せでしたが、Aboutでは左寄せも考慮 */
  /* justify-content: center; */
  /* text-align: center; /* HomeViewでは中央寄せでしたが、Aboutでは左寄せも考慮 */
  background-color: #FAF8F6;
  /* HomeView と同じ背景色 */
  height: 100%;
  /* 親要素に合わせる */
  width: 100%;
  /* 親要素に合わせる */
  /* padding は親要素の pa-6 で指定 */
  border-radius: 8px;
  /* 角を少し丸く */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 影を追加 */
}

/* 写真のスタイル */
.my-photo {
  width: 250px;
  /* 写真の幅を調整 */
  height: 250px;
  /* 写真の高さを幅に合わせる（円形にする場合） */
  border-radius: 50%;
  /* 写真を円形にする場合はこれを追加 */
  object-fit: cover;
  /* 写真のアスペクト比を維持してコンテナにフィット */
  border: 4px solid #fff;
  /* 白い枠線 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* 写真に影 */
}

/* 必要に応じて、このページ固有のスタイルを追加 */
.about-container {
  max-width: 1500px;
  /* コンテンツの最大幅を制限 */
}

/* スマホ表示時に写真の下に余白を追加 */
@media (max-width: 960px) {

  /* Vuetify の md ブレークポイント */
  .my-photo {
    margin-bottom: 1.5rem;
    /* 下に余白 */
  }

  .p-main,
  .p-sub,
  .body-text {
    text-align: center;
    /* スマホでは中央寄せに */
  }

  .content-wrapper .text-center.text-md-left {
    text-align: center !important;
    /* ボタンも中央寄せに */
  }
}
</style>
