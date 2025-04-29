<template>
  <v-container class="likes-container py-12">
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <div class="content-wrapper pa-6">
          <p class="p-main text-center mb-8">私の「特別」な好き</p>

          <p class="body-text text-center mb-8">
            私の心の中で特別な位置を占める、大切な「好き」をいくつかご紹介します。これらは、私の過去と未来に深く結びついています。
          </p>

          <div class="theme-section christmas-theme mb-10 pa-6 elevation-2">
            <p class="p-sub mb-4 text-center">■ クリスマス</p>
             <v-row class="align-center">
                <v-col cols="12" md="6">
                    <div class="theme-images text-center mb-4 mb-md-0">
                       <v-img :src="christmasPhoto1" alt="クリスマスのイメージ1" class="theme-photo elevation-3 mx-auto mb-4" cover></v-img>
                       <v-img :src="christmasPhoto2" alt="クリスマスのイメージ2" class="theme-photo elevation-3 mx-auto" cover></v-img>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="theme-text">
                        <p class="body-text mb-3">
                          私にとってクリスマスは、子どもの頃の温かい、楽しい思い出が一番に蘇る特別な日です。
                        </p>
                         <p class="body-text mb-3">
                          雪が降り積もる日に、家族と夢中で雪合戦をしたこと。その時のきんと冷えた空気、目の前に広がる雪景色の美しさ。遊び疲れて家に帰り、ストーブの前で雪まみれの靴下を脱いで、凍える足を温めているときの、あの何とも言えない心地よさ、じんわりと体温が戻ってくる感覚。
                        </p>
                         <p class="body-text">
                           そして、おばあちゃんが淹れてくれた温かいコーヒーのぬくもり。そのすべてが、私の心の中に今でも鮮明に残る、かけがえのない思い出です。クリスマスは、そんな大切な記憶を呼び起こしてくれる、私にとって特別な季節です。
                        </p>
                    </div>
                </v-col>
             </v-row>
          </div>

          <v-divider class="my-8"></v-divider> <div class="theme-section diner-theme mb-10 pa-6 elevation-2">
             <p class="p-sub mb-4 text-center">■ ダイナー</p>
             <v-row class="align-center">
                <v-col cols="12" md="6" class="order-md-2">
                     <div class="theme-images text-center mb-4 mb-md-0">
                        <v-img :src="dinerPhoto1" alt="ダイナーのイメージ1" class="theme-photo elevation-3 mx-auto mb-4" cover></v-img>
                        <v-img :src="dinerPhoto2" alt="ダイナーのイメージ2" class="theme-photo elevation-3 mx-auto" cover></v-img>
                     </div>
                </v-col>
                 <v-col cols="12" md="6" class="order-md-1">
                    <div class="theme-text">
                        <p class="body-text mb-3">
                          ダイナーは、私の長年の憧れの場所です。
                        </p>
                        <p class="body-text mb-3">
                          映画『メン・イン・ブラック』で、主人公が深く考え事をしたり、大切な会話をしたりするシーンで登場するのが印象的でした。ピカピカのカウンター、レトロな雰囲気、そして気取らないジャンキーな料理。色々な背景を持つ人々が気軽に立ち寄り、親しみやすい雰囲気に包まれている場所。それが、私の抱くダイナーのイメージです。
                        </p>
                        <p class="body-text">
                          特別な高級レストランではなく、日常の中に溶け込み、誰でも受け入れてくれるような、あの独特の居心地の良さにずっと憧れています。いつか本場アメリカのダイナーに行って、大きなハンバーガーとミルクシェイクを頼んでみたいです。
                        </p>
                    </div>
                </v-col>
             </v-row>
          </div>

          <v-divider class="my-8"></v-divider> <div class="theme-section scenery-theme mb-10 pa-6 elevation-2">
             <p class="p-sub mb-4 text-center">■ 壮大できれいな風景</p>
             <v-row class="align-center">
                <v-col cols="12" md="6">
                    <div class="theme-images text-center mb-4 mb-md-0">
                       <v-img :src="sceneryPhoto1" alt="風景のイメージ1" class="theme-photo elevation-3 mx-auto mb-4" cover></v-img>
                       <v-img :src="sceneryPhoto2" alt="風景のイメージ2" class="theme-photo elevation-3 mx-auto" cover></v-img>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="theme-text">
                        <p class="body-text mb-3">
                          世界には、息をのむほど壮大で美しい風景がたくさんあります。写真や映像でそれらを見るたび、いつか必ずこの目で見てみたいという思いが募ります。
                        </p>
                         <p class="body-text mb-3">
                          見渡す限り緑に覆われた、まるで無限に続くかのような広大な草原。一面が真っ白な雪で覆われた、静寂に包まれた冬景色。山の頂上から見下ろす、まるで海のようにおびただしい量の雲海。そして、どこまでも青く、下まで透き通って見えるような広大な海。
                        </p>
                         <p class="body-text">
                           そんな場所に立つことを想像するだけで、心が震えます。これらの風景は、私にとって単なる景色ではなく、日々の努力の先にある目標であり、未来への希望そのものです。いつの日か、これらの場所を訪れることを楽しみに、今を大切に過ごしています。
                        </p>
                    </div>
                </v-col>
             </v-row>
          </div>

          <div class="text-center mt-8">
             <v-btn color="primary" to="/" large>
               ホームに戻る
             </v-btn>
             <v-btn color="secondary" to="/overseas" large class="ml-4">
               海外についてに戻る
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

// ★★★ 各テーマの実際の写真ファイルに合わせて修正してください ★★★
// 各テーマに合うイメージの写真を2枚ずつ用意しました。
// 例: src/assets/jpg/christmas_memory1.jpg など
import christmasPhoto1 from '@/assets/jpg/mail.jpg';
import christmasPhoto2 from '@/assets/jpg/mail.jpg';

import dinerPhoto1 from '@/assets/jpg/mail.jpg';
import dinerPhoto2 from '@/assets/jpg/mail.jpg';

import sceneryPhoto1 from '@/assets/jpg/mail.jpg';
import sceneryPhoto2 from '@/assets/jpg/mail.jpg';

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
  border-bottom: 2px solid #eee; /* 下線で見出し感を出す */
  padding-bottom: 4px; /* 下線との間に少し隙間 */
  display: inline-block; /* 下線がテキスト幅になるように */
  margin-left: 12px; /* 左に少しインデント */
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

/* --- テーマセクションの特別なスタイル --- */
.theme-section {
    border-radius: 12px; /* 外枠を少し大きく丸く */
    /* padding は Vuetify の pa-6 */
    /* elevation-2 は Vuetify のクラス */
}

/* 各テーマブロックに異なる背景色や枠線 */
.christmas-theme {
    background-color: #E8F5E9; /* 薄い緑系 */
    border: 1px solid #C8E6C9;
}

.diner-theme {
    background-color: #FFF3E0; /* 薄いオレンジ系 */
     border: 1px solid #FFE0B2;
}

.scenery-theme {
     background-color: #E3F2FD; /* 薄い青系 */
     border: 1px solid #BBDEFB;
}


.theme-images .theme-photo {
    width: 100%; /* カラム幅いっぱいに */
    max-width: 250px; /* 最大幅を設定 */
    height: 180px; /* 高さを固定または調整 */
    object-fit: cover; /* アスペクト比を維持してコンテナにフィット */
    border-radius: 8px; /* 角を丸く */
     /* elevation-3 は Vuetify のクラス */
}

/* .theme-text { */
    /* テキストブロックのスタイル調整 */
/* } */


/* 必要に応じて、このページ固有のスタイルを追加 */
.likes-container {
    max-width: 1500px; /* コンテンツの最大幅を制限 */
}

/* 細かい調整 */
.mb-10 { margin-bottom: 2.5rem !important; } /* 余白調整 */
.mb-8 { margin-bottom: 2rem !important; }
.mb-4 { margin-bottom: 1rem !important; }
.mb-3 { margin-bottom: 0.75rem !important; }
.ml-4 { margin-left: 1rem !important; } /* ボタン間の余白 */
.my-8 { margin-top: 2rem !important; margin-bottom: 2rem !important; } /* v-divider の余白 */


/* スマホ表示時の調整 */
@media (max-width: 960px) { /* Vuetify の md ブレークポイント */
  .p-main {
    font-size: 32px; /* スマホでは少し小さく */
  }
  .p-sub {
     font-size: 20px; /* スマホでは少し小さく */
     margin-left: 0; /* スマホでは左インデントをなくす */
     text-align: center; /* スマホでは中央寄せに */
     display: block; /* スマホではブロック要素に */
  }
  .theme-images .theme-photo {
      max-width: 200px; /* スマホでは最大幅を小さく */
      margin-bottom: 1rem !important; /* 写真の下に余白 */
  }
   /* スマホでは写真が上、テキストが下になるように */
  .theme-section .row .col:first-child { /* 最初のカラム (写真) */
      order: 1 !important;
  }
   .theme-section .row .col:last-child { /* 最後のカラム (テキスト) */
      order: 2 !important;
  }

  /* テキスト中央寄せ */
  .theme-text .text-md-left {
      text-align: center !important;
  }
}

</style>