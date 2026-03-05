<template>
  <v-container class="work-container py-12">
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <div class="content-wrapper pa-6">
          <p class="p-main text-center mb-8">{{$t('work.title')}}</p>

          <div class="mb-8">
            <p class="p-sub mb-4">{{$t('work.skillsHeading')}}</p>
            <ul class="body-text ml-6">
              <li>{{$t('work.skillsBullet1')}}</li>
              <li>{{$t('work.skillsBullet2')}}</li>
              <li>{{$t('work.skillsBullet3')}}</li>
            </ul>
          </div>

          <div class="mb-8">
            <p class="p-sub mb-4">{{$t('work.summaryHeading')}}</p>
            <p class="body-text mb-3">{{$t('work.summaryPara1')}}</p>
            <p class="body-text">{{$t('work.summaryPara2')}}</p>
          </div>

          <div class="mb-8">
            <p class="p-sub mb-4">{{$t('work.historyHeading')}}</p>

            <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">{{$t('work.project1Title')}}</p>
              <p class="mb-2"><span class="font-weight-bold">{{$t('nav.work')}} (期間/Duration):</span> {{$t('work.project1Duration')}}</p>
              <p class="mb-2"><span class="font-weight-bold">概要/Overview:</span> {{$t('work.project1Overview')}}</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ/Phase:</span> {{$t('work.project1Phase')}}</p>
              <p class="mb-2"><span class="font-weight-bold">技術環境/Tech:</span> {{$t('work.project1Tech')}}</p>
              <p><span class="font-weight-bold">役割/規模/Role:</span> {{$t('work.project1Role')}}</p>
            </div>

             <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">{{$t('work.project2Title')}}</p>
              <p class="mb-2"><span class="font-weight-bold">{{$t('nav.work')}} (期間/Duration):</span> {{$t('work.project2Duration')}}</p>
              <p class="mb-2"><span class="font-weight-bold">概要/Overview:</span> {{$t('work.project2Overview')}}</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ/Phase:</span> {{$t('work.project2Phase')}}</p>
              <p class="mb-2"><span class="font-weight-bold">技術環境/Tech:</span> {{$t('work.project2Tech')}}</p>
              <p><span class="font-weight-bold">役割/規模/Role:</span> {{$t('work.project2Role')}}</p>
            </div>

            <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">{{$t('work.project3Title')}}</p>
              <p class="mb-2"><span class="font-weight-bold">{{$t('nav.work')}} (期間/Duration):</span> {{$t('work.project3Duration')}}</p>
              <p class="mb-2"><span class="font-weight-bold">概要/Overview:</span> {{$t('work.project3Overview')}}</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ/Phase:</span> {{$t('work.project3Phase')}}</p>
              <p class="mb-2"><span class="font-weight-bold">技術環境/Tech:</span> {{$t('work.project3Tech')}}</p>
              <p><span class="font-weight-bold">役割/規模/Role:</span> {{$t('work.project3Role')}}</p>
            </div>

            <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">{{$t('work.project4Title')}}</p>
              <p class="mb-2"><span class="font-weight-bold">{{$t('nav.work')}} (期間/Duration):</span> {{$t('work.project4Duration')}}</p>
              <p class="mb-2"><span class="font-weight-bold">概要/Overview:</span> {{$t('work.project4Overview')}}</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ/Phase:</span> {{$t('work.project4Phase')}}</p>
               <p class="mb-2"><span class="font-weight-bold">技術環境/Tech:</span> {{$t('work.project4Tech')}}</p>
              <p><span class="font-weight-bold">役割/規模/Role:</span> {{$t('work.project4Role')}}</p>
            </div>

             <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">{{$t('work.project5Title')}}</p>
              <p class="mb-2"><span class="font-weight-bold">{{$t('nav.work')}} (期間/Duration):</span> {{$t('work.project5Duration')}}</p>
              <p class="mb-2"><span class="font-weight-bold">概要/Overview:</span> {{$t('work.project5Overview')}}</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ/Phase:</span> {{$t('work.project5Phase')}}</p>
               <p class="mb-2"><span class="font-weight-bold">技術環境/Tech:</span> {{$t('work.project5Tech')}}</p>
              <p><span class="font-weight-bold">役割/規模/Role:</span> {{$t('work.project5Role')}}</p>
            </div>

             <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">{{$t('work.project6Title')}}</p>
              <p class="mb-2"><span class="font-weight-bold">{{$t('nav.work')}} (期間/Duration):</span> {{$t('work.project6Duration')}}</p>
              <p class="mb-2"><span class="font-weight-bold">概要/Overview:</span> {{$t('work.project6Overview')}}</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ/Phase:</span> {{$t('work.project6Phase')}}</p>
               <p class="mb-2"><span class="font-weight-bold">技術環境/Tech:</span> {{$t('work.project6Tech')}}</p>
              <p><span class="font-weight-bold">役割/規模/Role:</span> {{$t('work.project6Role')}}</p>
            </div>

          </div>


          <div class="mb-8">
            <p class="p-sub mb-4">{{$t('work.technicalHeading')}}</p>
            <div class="body-text ml-4">
                <p class="mb-2">{{$t('work.skillsOS')}}</p>
                <p class="mb-2">{{$t('work.skillsLang')}}</p>
                <p class="mb-2">{{$t('work.skillsFramework')}}</p>
                <p class="mb-2">{{$t('work.skillsDB')}}</p>
                <p class="mb-2">{{$t('work.skillsOther')}}</p>
            </div>
          </div>

           <div class="mb-8">
            <p class="p-sub mb-4">{{$t('work.qualificationsHeading')}}</p>
             <div class="body-text ml-4">
                <p>{{$t('work.qualificationList')}}</p>
             </div>
          </div>


          <div class="mb-8">
            <p class="p-sub mb-4">{{$t('work.prHeading')}}</p>
            <div class="body-text ml-4">
                <p class="mb-3">{{$t('work.prPara1')}}</p>
                <p class="mb-3">{{$t('work.prPara2')}}</p>
                 <p class="mb-3">{{$t('work.prPara3')}}</p>
                 <p>{{$t('work.prPara4')}}</p>
            </div>
          </div>

          <div class="mb-8"> <p class="p-sub mb-4">{{$t('work.resumeHeading')}}</p>
             <p class="body-text mb-4">{{$t('work.resumeDesc')}}</p>

             <v-row>
                <v-col cols="auto">
                   <v-btn
                     href="/download/resume/職務経歴書.docx"
                     download="職務経歴書.docx"
                     color="blue-grey"
                     large
                     class="ma-2"
                   >
                     <v-icon left>mdi-file-word</v-icon>
                     Word (.docx)
                   </v-btn>
                </v-col>
                 <v-col cols="auto">
                   <v-btn
                     href="/download/resume/職務経歴書.pdf"
                     download="職務経歴書.pdf"
                     color="red-darken-3"
                     large
                     class="ma-2"
                   >
                      <v-icon left>mdi-file-pdf</v-icon>
                     PDF (.pdf)
                   </v-btn>
                </v-col>
             </v-row>
          </div>

          <div class="text-center mt-8">
             <v-btn color="primary" to="/" large>
               {{$t('work.backHome')}}
             </v-btn>
             <v-btn color="secondary" to="/about" large class="ml-4">
               {{$t('work.backAbout')}}
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
/* AboutView や HomeView から共通で使うと思われるスタイルをコピー */
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

/* 開発経歴の各案件エントリのスタイル */
.project-entry {
    border: 1px solid #eee; /* 薄い枠線 */
    border-radius: 4px; /* 角を丸く */
    margin-bottom: 1.5rem !important; /* 各案件の下に余白 */
    background-color: #fff; /* 各案件ブロックは白背景 */
}


/* 必要に応じて、このページ固有のスタイルを追加 */
.work-container {
    max-width: 1500px; /* コンテンツの最大幅を制限 */
}

/* 細かい調整 */
.mb-8 { margin-bottom: 2rem !important; } /* 余白調整 */
.mb-6 { margin-bottom: 1.5rem !important; }
.mb-4 { margin-bottom: 1rem !important; }
.mb-3 { margin-bottom: 0.75rem !important; }
.mb-2 { margin-bottom: 0.5rem !important; }
.ml-6 { margin-left: 1.5rem !important; }
/* .ml-4 { margin-left: 1rem !important; } project-entry 内で pa-4 に変更*/

/* ボタン間の余白 (Vuetify ma-2 クラスも使用) */
.ma-2 { margin: 0.5rem !important; }
.ml-4 { margin-left: 1rem !important; }
.mt-8 { margin-top: 2rem !important; }


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
}

</style>
