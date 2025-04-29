<template>
  <v-container class="work-container py-12">
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <div class="content-wrapper pa-6">
          <p class="p-main text-center mb-8">仕事について</p>

          <div class="mb-8">
            <p class="p-sub mb-4">■ 得意業務</p>
            <ul class="body-text ml-6">
              <li>Java (SpringBoot), C#, TypeScript (Vue.js) による Web アプリケーション開発</li>
              <li>既存コードの解析・改修および流用による新規開発</li>
              <li>詳細設計から実装、テストまで一貫したシステム開発</li>
            </ul>
          </div>

          <div class="mb-8">
            <p class="p-sub mb-4">■ 職務経歴サマリー</p>
            <p class="body-text mb-3">
              これまで、複数のプロジェクトでシステムエンジニアとして Web アプリケーション開発に携わってまいりました。主に Java や TypeScript (Vue.js) を用いた開発を得意としております。
            </p>
            <p class="body-text">
              多様なフェーズ（要件定義、設計、実装、テスト、保守、運用、障害対応など）を経験し、特に詳細設計以降の工程、既存システムの解析・改修において強みがあります。また、プロジェクトにおける新規参画者への教育経験もございます。
            </p>
          </div>

          <div class="mb-8">
            <p class="p-sub mb-4">■ 開発経歴</p>

            <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">地方自治体向け総合行政システムの追加機能開発/改修</p>
              <p class="mb-2"><span class="font-weight-bold">期間:</span> 1年9ヶ月 （2021年01月 ～ 2022年09月）</p>
              <p class="mb-2"><span class="font-weight-bold">概要:</span> 住民記録・印鑑登録機能に関する小規模改修、法改正対応など</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ:</span> 要件定義/基本設計/詳細設計/実装/テスト/運用保守</p>
              <p class="mb-2"><span class="font-weight-bold">技術環境:</span> Java, Oracle SQL, PL/SQL, JavaScript, Seasar2, JSP, Oracle DB, Tomcat, Eclipse, SVN 他</p>
              <p><span class="font-weight-bold">役割/規模:</span> 設計・開発メンバー / 6名</p>
            </div>

             <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">地方自治体向け総合行政システム 標準化対応</p>
              <p class="mb-2"><span class="font-weight-bold">期間:</span> 1年 （2022年10月 ～ 2023年10月）</p>
              <p class="mb-2"><span class="font-weight-bold">概要:</span> 法改正や共通仕様に基づく自治体間運用統一支援（住民記録・印鑑登録機能担当）</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ:</span> 基本設計/詳細設計/実装/テスト</p>
              <p class="mb-2"><span class="font-weight-bold">技術環境:</span> Java, TypeScript, Node.js, SpringBoot, SpringBatch, Vue.js 3, Storybook, Oracle, PostgreSQL, Eclipse, Git, SVN, Docker 他</p>
              <p><span class="font-weight-bold">役割/規模:</span> 設計・開発メンバー / 6名</p>
            </div>

            <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">既存部品管理 Web アプリケーションマイグレーション対応</p>
              <p class="mb-2"><span class="font-weight-bold">期間:</span> 9ヶ月 （2024年01月 ～ 2024年09月）</p>
              <p class="mb-2"><span class="font-weight-bold">概要:</span> 現行システムのマイグレーションに向けた詳細設計、分析（プロジェクト遅延により離任）</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ:</span> 詳細設計</p>
              <p class="mb-2"><span class="font-weight-bold">技術環境:</span> Java6, Oracle SQL, Struts 1.1 (現行) / Java 21, Macchinetta Framework, Vue.js 3 (マイグレーション後想定)</p>
              <p><span class="font-weight-bold">役割/規模:</span> 設計・開発メンバー / 8名</p>
            </div>

            <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">医療業界向け倉庫管理 Web アプリ 新規開発（構想段階）</p>
              <p class="mb-2"><span class="font-weight-bold">期間:</span> 1ヶ月 （2024年10月 ～ 2024年11月）</p>
              <p class="mb-2"><span class="font-weight-bold">概要:</span> 新規開発に向けた開発環境構築、技術調査、設計方針検討（要件整理途中で案件終了）</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ:</span> 開発環境構築/技術調査・検討/設計方針検討</p>
               <p class="mb-2"><span class="font-weight-bold">技術環境:</span> TypeScript 5.5.4, C# 12.0, Node.js 22, .NET 8.0, Vue 3.3.4, ASP.NET Core MVC, Vite 4.4.5, Element Plus 2.9.1, PostgreSQL 16.2, Docker, Volta 他</p>
              <p><span class="font-weight-bold">役割/規模:</span> 設計・開発メンバー / 22名</p>
            </div>

             <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">製薬業界向け倉庫管理 Web アプリ 新規開発</p>
              <p class="mb-2"><span class="font-weight-bold">期間:</span> 5ヶ月 （2024年11月 ～ 2025年4月）</p>
              <p class="mb-2"><span class="font-weight-bold">概要:</span> 製薬材料の発注・入荷・管理・製造・出荷等の業務デジタル化システム構築</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ:</span> 基本設計/詳細設計/実装/テスト</p>
               <p class="mb-2"><span class="font-weight-bold">技術環境:</span> TypeScript 5.5.4, C# 12.0, Node.js 22, .NET 8.0, Vue 3.3.4, ASP.NET Core MVC, Vite 4.4.5, Element Plus 2.9.1, PostgreSQL 16.2, Docker, Volta 他</p>
              <p><span class="font-weight-bold">役割/規模:</span> 設計・開発メンバー / 22名</p>
            </div>

            <div class="project-entry body-text mb-6 pa-4">
              <p class="font-weight-bold mb-2">クラウドサービスの老朽化に伴う新規開発</p>
              <p class="mb-2"><span class="font-weight-bold">期間:</span> 1ヶ月 （2025年4月 ～ 2025年5月）</p>
              <p class="mb-2"><span class="font-weight-bold">概要:</span> 現行サービスのマイグレーションに向けた仕様検討、基本設計（契約内容相違により離任）</p>
              <p class="mb-2"><span class="font-weight-bold">担当フェーズ:</span> 仕様検討/基本設計</p>
               <p class="mb-2"><span class="font-weight-bold">技術環境:</span> Go 1.23.4, Vue.js 3.5.13, PostgreSQL, Eclipse, VSCode, Auth0/OIDC, Redis, AWS S3 他</p>
              <p><span class="font-weight-bold">役割/規模:</span> 設計・開発メンバー / 10名</p>
            </div>

          </div>


          <div class="mb-8">
            <p class="p-sub mb-4">■ テクニカルスキル</p>
            <div class="body-text ml-4">
                <p class="mb-2"><span class="font-weight-bold">OS:</span> Windows / Ubuntu / Linux</p>
                <p class="mb-2"><span class="font-weight-bold">言語:</span> Java / JavaScript / TypeScript / C# / Go / OracleSQL / PL/SQL / PostgreSQL<br>(独学中: Python)</p>
                <p class="mb-2"><span class="font-weight-bold">フレームワーク:</span> Seasar2 / Vue.js / Spring Boot / Spring Batch / ASP.NET Core MVC / Macchinetta Framework</p>
                <p class="mb-2"><span class="font-weight-bold">データベース:</span> ORACLE DB / PostgreSQL</p>
                <p class="mb-2"><span class="font-weight-bold">その他 (ミドルウェア, サーバー, ツール等):</span> Docker / Node.js / Vite / Element Plus / Pinia / i18n / Eclipse / VSCode / Visual Studio / Git / SVN / SourceTree / Tomcat / Apache / Nginx / Hyper-V / Auth0/OIDC / Redis / AWS S3 / Volta / scoop 他</p>
            </div>
          </div>

           <div class="mb-8">
            <p class="p-sub mb-4">■ 取得資格</p>
             <div class="body-text ml-4">
                <p>・Java SE Bronze (2022年06月)</p>
             </div>
          </div>


          <div class="mb-8">
            <p class="p-sub mb-4">■ 自己PR</p>
            <div class="body-text ml-4">
                <p class="mb-3">
                  より多くの知識を得ることを意識して業務をしております。疑問点はなるべく細かな部分まで納得するまで調べ、解決が難しい場合は、プロジェクト工数から逆算し、早めに有識者の方に質問し問題解決することを心がけております。慣れてきた業務に関しては、プロジェクトの新規参画者に対し業務知識を教えております。
                </p>
                <p class="mb-3">
                  特に詳細設計以降の工程に強みがあり、既存のコードを解析し、問題点の洗い出しや改修を行う作業、また、既存実装を参考にした新機能の追加などにおいて多くの経験があります。複雑な既存システムの仕様把握や設計書作成、API設計、テスト設計などの経験も積んでおり、着実に成果を出すことを意識しています。
                </p>
                 <p class="mb-3">
                  また、業務の中で理不尽な状況や仕様の齟齬に直面した際にも冷静に状況を分析し、必要に応じて関係者へ明確に報告・相談を行ってきました。技術面だけでなく、職場内での立ち振る舞いや責任感のある判断も心がけております。
                </p>
                 <p>
                   このホームページでは、私の技術的な興味や趣味、経験などを合わせてご紹介しています。システム開発以外の面も含めて、私という人間を知っていただけたら嬉しいです。
                </p>
            </div>
          </div>

          <div class="mb-8"> <p class="p-sub mb-4">■ 職務経歴書ダウンロード</p>
             <p class="body-text mb-4">私の職務経歴書をダウンロードいただけます。</p>

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
               ホームに戻る
             </v-btn>
             <v-btn color="secondary" to="/about" large class="ml-4">
               自己紹介に戻る
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