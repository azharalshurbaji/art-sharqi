// Composables
import user from '@/store/user'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
        meta: { transition: 'slide-right' },
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/CartView.vue'),
        meta: {
          //* auth => authenticated
          guard: 'auth' 
        }
      },
      {
        path: '/blogs',
        name: 'Blogs',
        component: () => import(/* webpackChunkName: "Blogs" */'@/views/BlogsView.vue'),

      },
      {
        path: '/blogs-details/:id',
        name: 'blogs-details',
        component: () => import(/* webpackChunkName: "BlogsDetails" */ '@/views/BlogsDetailsView.vue'),
      },
      {
        path: '/buy-naw-details/:id',
        name: 'buy-naw-details',
        component: () => import(/* webpackChunkName: "BuyNaw" */ '@/views/BuyNawDetailsView.vue'),
        meta: {
          //* auth => authenticated
          guard: 'auth' 
        }
      },
      {
        path: '/boards',
        name: 'Boards',
        component: () => import(/* webpackChunkName: "Boards" */ '@/views/BoardsView.vue'),
        meta: { transition: 'slide-left' },
      },
      {
        path: '/art-board-details/:id',
        name: 'art-board-details',
        component: () => import(/* webpackChunkName: "ArtBoardDetails" */ '@/views/ArtBoardDetailsView.vue'),
        meta: {
          guard: 'auth'
        },
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "ArtBoardDetails" */ '@/views/LoginView.vue'),
        meta: {
          guard: 'public' 
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "ArtBoardDetails" */ '@/views/ProfileView.vue'),
        meta: {
          //* auth => authenticated
          guard: 'auth' 
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === "production" ? "/art-sharqi/" : "/"),
  routes,
  scrollBehavior(to ,from ,savedPosition)
  {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
    // console.log(savedPosition);
    // if(savedPosition) {
    //   return savedPosition
    // } else if(to.hash) {
    //   return {
    //     selector: to.hash,
    //     behavior: "somooth"
    //   }
    // } else {
    //   return { x: 0, y: 0 }
    // }
  }
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})


router.beforeEach( function (to ,from ,next) {
  // console.log(to.meta.guard)

      //Store Name
  const store = user() 
  // console.log(store);

  if(to.meta.guard === 'auth' && !store.isLoggedIn) {
    next('/login' , '/cart')
  } 
  else if(to.meta.guard === 'public' && store.isLoggedIn) {
    next('/profile')
  }
  else {
    next()
  }
})

export default router
