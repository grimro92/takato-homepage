<template>
  <v-container class="hobby-container py-12">
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <div class="content-wrapper pa-6">
          <p class="p-main text-center mb-8">{{$t('hobby.title')}}</p>

          <p class="body-text text-center mb-8">
            {{$t('hobby.intro')}}
          </p>

          <div class="hobby-entry mb-10">
            <v-row class="align-center">
              <v-col cols="12" md="5">
                <v-img
                  :src="photoHobbyJpg"
                  alt="趣味：写真を撮ること"
                  class="hobby-photo mx-auto elevation-3"
                  cover
                ></v-img>
              </v-col>
              <v-col cols="12" md="7">
                <p class="p-sub mb-4 text-center text-md-left">{{$t('hobby.photoTitle')}}</p>
                <p class="body-text">{{$t('hobby.photoDesc')}}</p>
              </v-col>
            </v-row>
          </div>

          <v-divider class="my-8"></v-divider> <div class="hobby-entry mb-10">
            <v-row class="align-center">
              <v-col cols="12" md="5" class="order-md-2">
                 <v-img
                  :src="pcgameHobbyJpg"
                  alt="趣味：パソコンゲーム"
                  class="hobby-photo mx-auto elevation-3"
                  cover
                ></v-img>
              </v-col>
              <v-col cols="12" md="7" class="order-md-1">
                <p class="p-sub mb-4 text-center text-md-left">{{$t('hobby.pcgameTitle')}}</p>
                <p class="body-text">{{$t('hobby.pcgameDesc')}}</p>
              </v-col>
            </v-row>
          </div>

           <v-divider class="my-8"></v-divider> <div class="hobby-entry mb-10">
            <v-row class="align-center">
              <v-col cols="12" md="5">
                <v-img
                  :src="landscapeHobbyJpg"
                  alt="趣味：きれいな風景を見ること"
                  class="hobby-photo mx-auto elevation-3"
                  cover
                ></v-img>
              </v-col>
              <v-col cols="12" md="7">
                <p class="p-sub mb-4 text-center text-md-left">{{$t('hobby.landscapeTitle')}}</p>
                <p class="body-text">{{$t('hobby.landscapeDesc')}}</p>
              </v-col>
            </v-row>
          </div>

           <v-divider class="my-8"></v-divider> <div class="hobby-entry mb-10">
            <v-row class="align-center">
               <v-col cols="12" md="5" class="order-md-2">
                 <v-img
                  :src="movieHobbyJpg"
                  alt="趣味：映画鑑賞"
                  class="hobby-photo mx-auto elevation-3"
                  cover
                ></v-img>
              </v-col>
              <v-col cols="12" md="7" class="order-md-1">
                <p class="p-sub mb-4 text-center text-md-left">{{$t('hobby.movieTitle')}}</p>
                <p class="body-text">{{$t('hobby.movieDesc')}}</p>
              </v-col>
            </v-row>
          </div>

          <v-divider class="my-8"></v-divider> <div class="hobby-entry mb-10">
            <v-row class="align-center">
              <v-col cols="12" md="5">
                <v-img
                  :src="programHobbyJpg"
                  alt="趣味：プログラム作成"
                  class="hobby-photo mx-auto elevation-3"
                  cover
                ></v-img>
              </v-col>
              <v-col cols="12" md="7">
                <p class="p-sub mb-4 text-center text-md-left">{{$t('hobby.programTitle')}}</p>
                <p class="body-text">{{$t('hobby.programDesc')}}</p>
              </v-col>
            </v-row>
          </div>


          <div class="text-center mt-8">
             <v-btn color="primary" to="/" large>
               {{$t('hobby.backHome')}}
             </v-btn>
             <v-btn color="secondary" to="/work" large class="ml-4">
               {{$t('hobby.backWork')}}
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

// ★★★ 各趣味の実際の写真ファイルに合わせて修正してください ★★★
// 例: src/assets/jpg/hobby_photo.jpg など
import photoHobbyJpg from '@/assets/jpg/mail.jpg'; // 写真を撮ること
import pcgameHobbyJpg from '@/assets/jpg/mail.jpg';
import landscapeHobbyJpg from '@/assets/jpg/mail.jpg';
import movieHobbyJpg from '@/assets/jpg/mail.jpg';
import programHobbyJpg from '@/assets/jpg/mail.jpg';

</script>

<style scoped>
/* 他のページから共通で使うと思われるスタイルをコピー */
.p-main {
  font-size: 38px;
  font-family: brandon-grotesque;
  font-weight: 700;
}

.p-sub {
  font-size: 24px;
  font-family: brandon-grotesque;
  font-weight: 700; /* 見出しなので太字 */
  color: #333; /* 見やすい色 */
  /* 下線やインデントはここでは共通にしない */
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

/* 各趣味エントリのスタイル */
/* .hobby-entry { */
    /* 各趣味ブロックの下に余白 */
    /* mb-10 は Vuetify のクラスを使用 */
/* } */

.hobby-photo {
    width: 100%; /* カラム幅いっぱいに */
    max-width: 300px; /* 最大幅を設定 */
    height: 200px; /* 高さを固定または調整 */
    object-fit: cover; /* アスペクト比を維持してコンテナにフィット */
    border-radius: 8px; /* 角を丸く */
    /* elevation-3 は Vuetify のクラス */
}


/* 必要に応じて、このページ固有のスタイルを追加 */
.hobby-container {
    max-width: 1500px; /* コンテンツの最大幅を制限 */
}

/* 細かい調整 */
.mb-10 { margin-bottom: 2.5rem !important; } /* 余白調整 */
.mb-8 { margin-bottom: 2rem !important; }
.mb-4 { margin-bottom: 1rem !important; }
.ml-4 { margin-left: 1rem !important; } /* ボタン間の余白 */
.my-8 { margin-top: 2rem !important; margin-bottom: 2rem !important; } /* v-divider の余白 */


/* スマホ表示時の調整 */
@media (max-width: 960px) { /* Vuetify の md ブレークポイント */
  .p-main {
    font-size: 32px; /* スマホでは少し小さく */
  }
  .p-sub {
     font-size: 20px; /* スマホでは少し小さく */
  }
  .hobby-photo {
     max-width: 250px; /* スマホでは最大幅を小さく */
     margin-bottom: 1.5rem !important; /* 写真の下に余白 */
  }
  /* スマホでは写真が上、テキストが下になるように order-md-2, order-md-1 を使用 */
  /* テキスト中央寄せ */
  .hobby-entry .text-md-left {
      text-align: center !important;
  }
}

</style>