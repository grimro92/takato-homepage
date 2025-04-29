<template>
  <v-container class="hobby-container py-12">
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <div class="content-wrapper pa-6">
          <p class="p-main text-center mb-8">趣味</p>

          <p class="body-text text-center mb-8">
            私の日々の生活を彩る、いくつかの趣味をご紹介します。
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
                <p class="p-sub mb-4 text-center text-md-left">写真を撮ること</p>
                <p class="body-text">
                  日常のスナップから風景、ポートレートまで、様々な被写体を撮影するのが好きです。一枚の写真に物語や感情を捉えることに面白みを感じます。特に光の使い方や構図にこだわりながら、その瞬間にしか撮れない一枚を追求しています。撮影した写真は、このホームページの他の場所でも使っているものがあります。
                </p>
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
                <p class="p-sub mb-4 text-center text-md-left">パソコンゲーム</p>
                <p class="body-text">
                  様々なジャンルのPCゲームをプレイします。オープンワールドRPGの世界に没頭したり、戦略シミュレーションで頭を使ったり、時にはオンラインゲームで友人と協力したり。ゲームは私にとって、現実とは異なる世界を体験し、リフレッシュできる大切な時間です。最新技術を駆使したゲームのグラフィックや、練り込まれたストーリーに触れるのも刺激になります。
                </p>
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
                <p class="p-sub mb-4 text-center text-md-left">きれいな風景を見ること</p>
                <p class="body-text">
                  国内外問わず、美しい景色を見るために旅に出るのが好きです。雄大な自然景観、歴史を感じさせる街並み、光と影が織りなす一瞬の表情など、心惹かれる風景を探し求めています。旅行先で見る風景は、私の感性を刺激し、新たな発見やリフレッシュを与えてくれます。その感動を写真に残すことも、この趣味の一部です。
                </p>
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
                <p class="p-sub mb-4 text-center text-md-left">映画鑑賞</p>
                <p class="body-text">
                  幅広いジャンルの映画を観ます。ストーリーテリングの妙、役者の演技、映像表現、音楽など、様々な角度から映画の世界を楽しむのが好きです。時には深く考えさせられたり、時にはただただ娯楽として楽しんだり。映画から得られるインスピレーションは、日常生活やプログラミングにおけるアイデアにも繋がることがあります。
                </p>
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
                <p class="p-sub mb-4 text-center text-md-left">プログラム作成</p>
                <p class="body-text">
                  仕事以外でも、個人的な興味や学習のためにプログラムを書くのが好きです。新しい技術を試してみたり、日々のちょっとした作業を自動化するツールを作ったり、アイデアを形にしたり。趣味としてのプログラミングは、仕事とは異なる自由な発想で取り組めるため、純粋な技術的な探求心を刺激してくれます。このホームページ自体も、趣味の延長線上にあるものです。
                </p>
              </v-col>
            </v-row>
          </div>


          <div class="text-center mt-8">
             <v-btn color="primary" to="/" large>
               ホームに戻る
             </v-btn>
             <v-btn color="secondary" to="/work" large class="ml-4">
               仕事に戻る
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