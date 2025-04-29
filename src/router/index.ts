import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/WorkView.vue'),
    },
    {
      path: '/hobby',
      name: 'Hobby',
      component: () => import('../views/HobbyView.vue'),
    },
    {
      path: '/overseas',
      name: 'Overseas',
      component: () => import('../views/OverseasView.vue'),
    },
    {
      path: '/likes',
      name: 'Likes',
      component: () => import('../views/LikesView.vue'),
    },
    {
      path: '/links',
      name: 'Links',
      component: () => import('../views/LinksView.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
  ],
  // ★ ページ遷移時のスクロール挙動を定義する scrollBehavior オプションを追加 ★
  scrollBehavior(to, from, savedPosition) {
    // 常にページの最上部 (top: 0) にスクロールする
    // スムーズなスクロールが必要な場合は { top: 0, behavior: 'smooth' } を返す
    return { top: 0 };

    // もし、ブラウザのデフォルトのスクロール復元挙動を優先したい場合は
    // savedPosition が存在するかチェックし、あればそれを返すようにします
    // if (savedPosition) {
    //   return savedPosition;
    // } else {
    //   return { top: 0 }; // 保存された位置がない場合は最上部へ
    // }
  },
});

export default router;
