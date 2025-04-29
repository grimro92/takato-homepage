<template>
  <v-container class="overseas-container py-12">
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <div class="content-wrapper pa-6">
          <p class="p-main text-center mb-8">海外への憧れ</p>

          <div class="body-text mb-8 ml-4">
            <p class="mb-4">
              こんにちは！このページでは、私の海外に対する尽きない興味と、これからの冒険についてお話ししたいと思います。
            </p>
            <p class="mb-4">
              私はずっと昔から、日本を飛び出して海外へ行ってみたいという強い憧れを抱いています。異国の地で新しい人々と出会い、未知の体験をし、そこで生活してみる。日本にいるだけでは決して味わうことのできない文化や価値観の違いに触れることで、人生をもっと豊かに、もっと深くしたいと考えています。
            </p>
            <p class="mb-4">
              旅行ガイドやインターネットの写真、動画を見るだけでも楽しいですが、私の本当にやりたいことは、**実際にその場所に自分の足で行き、五感を通して体験すること**です。その場の空気を感じ、人々と直接話し、その文化にどっぷり浸かってみたい。
            </p>
            <p>
              将来的には、海外に拠点を置いて生活したり、バックパッカーになって世界中を気の向くままに旅したりすることが夢です。
            </p>
          </div>

          <v-row class="mb-8 justify-center">
              <v-col cols="12" md="4" class="text-center">
                  <v-img :src="overseasPhoto1" alt="海外風景イメージ1" class="overseas-photo elevation-3 mx-auto" cover></v-img>
              </v-col>
               <v-col cols="12" md="4" class="text-center">
                  <v-img :src="overseasPhoto2" alt="海外風景イメージ2" class="overseas-photo elevation-3 mx-auto" cover></v-img>
              </v-col>
               <v-col cols="12" md="4" class="text-center">
                  <v-img :src="overseasPhoto3" alt="海外風景イメージ3" class="overseas-photo elevation-3 mx-auto" cover></v-img>
              </v-col>
          </v-row>

          <div class="body-text mb-8 ml-4">
             <p class="p-sub mb-4">■ これからの計画と、行きたい国</p>
             <p class="mb-4">
                そして、その第一歩として、<span class="font-weight-bold text-blue-darken-2">来年（2026年）1月からニュージーランドへのワーキングホリデー</span>に行く予定です！初めての長期海外滞在、とてもワクワクしています。向こうでたくさんの新しい友達を作り、様々な経験を積んで、自分の視野を広げたいと思っています。
             </p>
             <p class="mb-4">
                ニュージーランドでの生活を通して、将来的にもっと色々な国を訪れたいです。今特に「行ってみたいな！」と思っている国・地域は以下の通りです。
             </p>
             <ul class="body-text ml-6 mb-6">
               <li>ニュージーランド (これから！)</li>
               <li>カナダ</li>
               <li>オーストラリア</li>
               <li>スイス</li>
               <li>アメリカ</li>
               <li>アフリカ (※特定の国というより、大陸全体に興味があります)</li>
             </ul>
             <p>
                これらの国や地域について詳しい方、行ったことがある方がいれば、ぜひお話を聞かせてください！もちろん、これらの場所以外にも、おすすめの国や旅の話があれば教えてもらえると嬉しいです。
             </p>
          </div>


          <div class="text-center mt-8">
             <v-btn color="primary" to="/" large>
               ホームに戻る
             </v-btn>
             <v-btn color="secondary" to="/hobby" large class="ml-4">
               趣味に戻る
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

// ★★★ 各イメージの実際の写真ファイルに合わせて修正してください ★★★
// 旅行や海外の風景など、イメージに合う写真を用意してください。
// 例: src/assets/jpg/travel_scene1.jpg など
import overseasPhoto1 from '@/assets/jpg/mail.jpg';
import overseasPhoto2 from '@/assets/jpg/mail.jpg';
import overseasPhoto3 from '@/assets/jpg/mail.jpg';

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

ul.body-text {
    list-style: disc; /* リストの点を表示 */
    padding-left: 40px; /* リストの左余白 */
    margin-bottom: 1rem;
}

ul.body-text li {
    margin-bottom: 8px; /* リストアイテム間の余白 */
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

/* 写真のスタイル */
.overseas-photo {
    width: 100%; /* カラム幅いっぱいに */
    max-width: 350px; /* 最大幅を設定 */
    height: 200px; /* 高さを固定または調整 */
    object-fit: cover; /* アスペクト比を維持してコンテナにフィット */
    border-radius: 8px; /* 角を丸く */
    /* elevation-3 は Vuetify のクラス */
}


/* 必要に応じて、このページ固有のスタイルを追加 */
.overseas-container {
    max-width: 1500px; /* コンテンツの最大幅を制限 */
}

/* 細かい調整 */
.mb-8 { margin-bottom: 2rem !important; } /* 余白調整 */
.mb-6 { margin-bottom: 1.5rem !important; }
.mb-4 { margin-bottom: 1rem !important; }
.ml-4 { margin-left: 1rem !important; } /* ボタン間の余白 */


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
  ul.body-text {
    padding-left: 20px; /* スマホではリスト余白を減らす */
  }
   .body-text.ml-4 { /* body-text と ml-4 が同時に指定されている場合 */
      margin-left: 0 !important; /* スマホでは左余白をなくす */
  }
  .overseas-photo {
      margin-bottom: 1.5rem !important; /* スマホでは写真の下に余白 */
  }
}

</style>