<template>
  <v-container class="jic-container py-12">
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <div class="content-wrapper pa-6">
          <p class="p-main text-center mb-8">{{ $t('jic.title') }}</p>

          <p class="body-text text-center mb-8">
            {{ $t('jic.intro') }}
          </p>

          <div class="theme-section ninichan-theme mb-10 pa-6 elevation-2">
            <p class="p-sub mb-4 text-center">■ {{ $t('jic.ninichan.title') }}</p>
             <v-row class="align-center">
                <v-col cols="12" md="6">
                    <div class="theme-images text-center mb-4 mb-md-0">
                      <v-row class="justify-center">
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.2ch.sc/" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="nichanPhoto1" alt="2ch image 1" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://hatarakitakunai.blog/aa/" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="nichanPhoto2" alt="2ch image 2" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.youtube.com/channel/UC0yQ2h4gQXmVUFWZSqlMVOA" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="nichanPhoto3" alt="2ch image 3" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.youtube.com/@gamelive" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="nichanPhoto4" alt="2ch image 4" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                      </v-row>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="theme-text">
                        <p class="body-text mb-3">
                          {{ $t('jic.ninichan.p1') }}
                        </p>
                         <p class="body-text mb-3">
                          {{ $t('jic.ninichan.p2') }}
                        </p>
                         <p class="body-text">
                           {{ $t('jic.ninichan.p3') }}
                        </p>
                    </div>
                </v-col>
             </v-row>
          </div>

          <v-divider class="my-8"></v-divider>

          <div class="theme-section niconico-theme mb-10 pa-6 elevation-2">
             <p class="p-sub mb-4 text-center">■ {{ $t('jic.niconico.title') }}</p>
             <v-row class="align-center">
                <v-col cols="12" md="6" class="order-md-2">
                     <div class="theme-images text-center mb-4 mb-md-0">
                      <v-row class="justify-center">
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.nicovideo.jp/" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="niconicoPhoto1" alt="Niconico image 1" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.nicovideo.jp/watch/sm38668379" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="niconicoPhoto2" alt="Niconico image 2" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.nicovideo.jp/watch/sm23225630" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="niconicoPhoto3" alt="Niconico image 3" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.nicovideo.jp/watch/sm34915576" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="niconicoPhoto4" alt="Niconico image 4" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                      </v-row>
                     </div>
                </v-col>
                 <v-col cols="12" md="6" class="order-md-1">
                    <div class="theme-text">
                        <p class="body-text mb-3">
                          {{ $t('jic.niconico.p1') }}
                        </p>
                        <p class="body-text mb-3">
                          {{ $t('jic.niconico.p2') }}
                        </p>
                        <p class="body-text">
                          {{ $t('jic.niconico.p3') }}
                        </p>
                    </div>
                </v-col>
             </v-row>
          </div>

          <v-divider class="my-8"></v-divider>

          <div class="theme-section vtuber-theme mb-10 pa-6 elevation-2">
             <p class="p-sub mb-4 text-center">■ {{ $t('jic.vtuber.title') }}</p>
             <v-row class="align-center">
                <v-col cols="12" md="6">
                    <div class="theme-images text-center mb-4 mb-md-0">
                      <v-row class="justify-center">
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.youtube.com/@AIChannel" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="vtuberPhoto1" alt="VTuber image 1" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.youtube.com/watch?v=GxJ_j1MrTmw" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="vtuberPhoto2" alt="VTuber image 2" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="vtuberPhoto3" alt="VTuber image 3" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                        <v-col cols="6" sm="6" class="pa-2">
                          <a href="https://www.twitch.tv/videos/2713337241" target="_blank" rel="noopener noreferrer" class="photo-link">
                            <v-img :src="vtuberPhoto4" alt="VTuber image 4" class="theme-photo elevation-3" cover></v-img>
                          </a>
                        </v-col>
                      </v-row>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="theme-text">
                        <p class="body-text mb-3">
                          {{ $t('jic.vtuber.p1') }}
                        </p>
                         <p class="body-text mb-3">
                          {{ $t('jic.vtuber.p2') }}
                        </p>
                         <p class="body-text">
                           {{ $t('jic.vtuber.p3') }}
                        </p>
                    </div>
                </v-col>
             </v-row>
          </div>

          <v-divider class="my-8"></v-divider>

          <!-- リンクセクション -->
          <div class="links-section mb-10 pa-6">
            <p class="p-sub mb-6 text-center">■ {{ $t('jic.links') }}</p>
            <v-row class="justify-center">
              <v-col cols="12" sm="6" md="4" class="text-center">
                <v-btn
                  href="https://www.youtube.com/watch?v=1gYm7TeViQw"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="outlined"
                  size="large"
                  class="btn-link"
                >
                  {{ $t('jic.vtuber.akamikarubi3dlive') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="text-center">
                <v-btn
                  href="https://www.youtube.com/watch?v=meuHvFd55tM"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="outlined"
                  size="large"
                  class="btn-link"
                >
                  {{ $t('jic.vtuber.akamikarubiuta') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="text-center">
                <v-btn
                  href="https://www.youtube.com/watch?v=z2V8U4CV6yQ&list=RDz2V8U4CV6yQ&start_radio=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="outlined"
                  size="large"
                  class="btn-link"
                >
                  {{ $t('jic.vtuber.akamikarubiuta2') }}
                </v-btn>
              </v-col>
            </v-row>
          </div>

          <div class="text-center mt-8">
             <v-btn color="primary" to="/" large>
               {{ $t('jic.backHome') }}
             </v-btn>
             <v-btn color="secondary" to="/likes" large class="ml-4">
               {{ $t('jic.backLikes') }}
             </v-btn>
           </div>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// 各テーマの実際の写真ファイルに合わせて修正してください
import nichanPhoto1 from '@/assets/jpg/2ch.png';
import nichanPhoto2 from '@/assets/jpg/aa.jpg';
import nichanPhoto3 from '@/assets/jpg/hiroyuki.jpg';
import nichanPhoto4 from '@/assets/jpg/higeoyaji.jpg';

import niconicoPhoto1 from '@/assets/jpg/niconico.jpg';
import niconicoPhoto2 from '@/assets/jpg/ado.jpg';
import niconicoPhoto3 from '@/assets/jpg/yonezu.jpg';
import niconicoPhoto4 from '@/assets/jpg/wawawa.jpg';

import vtuberPhoto1 from '@/assets/jpg/kizunaai.png';
import vtuberPhoto2 from '@/assets/jpg/iincho.jpg';
import vtuberPhoto3 from '@/assets/jpg/gawrgura.jpg';
import vtuberPhoto4 from '@/assets/jpg/karubi.jpg';
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
  font-weight: 700;
  color: #333;
  border-bottom: 2px solid #eee;
  padding-bottom: 4px;
  display: inline-block;
  margin-left: 12px;
}

.body-text {
    font-size: 18px;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.7;
    color: #333;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  background-color: #FAF8F6;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* --- テーマセクションの特別なスタイル --- */
.theme-section {
    border-radius: 12px;
}

/* 各テーマブロックに異なる背景色や枠線 */
.ninichan-theme {
    background-color: #F3E5F5;
    border: 1px solid #E1BEE7;
}

.niconico-theme {
    background-color: #FCE4EC;
    border: 1px solid #F8BBD0;
}

.vtuber-theme {
    background-color: #E0F2F1;
    border: 1px solid #B2DFDB;
}

.theme-images .theme-photo {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.2s ease;
}

.photo-link {
    display: block;
    text-decoration: none;
}

.photo-link:hover .theme-photo {
    transform: scale(1.05);
}

.links-section {
    background-color: #CC5761;
    border-radius: 12px;
    border: 1px solid yellow;
}

.btn-link {
    width: 100%;
    max-width: 200px;
}

.jic-container {
    max-width: 1500px;
}

/* 細かい調整 */
.mb-10 { margin-bottom: 2.5rem !important; }
.mb-8 { margin-bottom: 2rem !important; }
.mb-4 { margin-bottom: 1rem !important; }
.mb-3 { margin-bottom: 0.75rem !important; }
.ml-4 { margin-left: 1rem !important; }
.my-8 { margin-top: 2rem !important; margin-bottom: 2rem !important; }

/* スマホ表示時の調整 */
@media (max-width: 960px) {
  .p-main {
    font-size: 32px;
  }
  .p-sub {
     font-size: 20px;
     margin-left: 0;
     text-align: center;
     display: block;
  }
  .theme-images .theme-photo {
      max-width: 200px;
      margin-bottom: 1rem !important;
  }
  .theme-section .row .col:first-child {
      order: 1 !important;
  }
   .theme-section .row .col:last-child {
      order: 2 !important;
  }

  .theme-text .text-md-left {
      text-align: center !important;
  }
}
</style>
