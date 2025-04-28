import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // HomeView をインポート

// RouteRecordRaw はルート定義の型
const routes: Array<RouteRecordRaw> = [
  {
    path: '/', // トップページのパス
    name: 'Home',
    component: HomeView, // パスに対応するコンポーネント
  },
  {
    path: '/about', // 自己紹介ページのパス
    name: 'About',
    // ルートコンポーネントを遅延ロード（必要な時にだけ読み込む）
    // Vite では /* webpackChunkName: "about" */ のようなコメントは不要です
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  // 他のページが必要になったらここに追加
  // {
  //   path: '/work',
  //   name: 'Work',
  //   component: () => import('../views/WorkView.vue'),
  // }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 履歴モード（通常はこちらを使用）
  routes, // 定義したルート
});

export default router; // ルーターインスタンスをエクスポート