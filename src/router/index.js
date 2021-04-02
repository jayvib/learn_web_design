import Vue from 'vue'
import VueRouter from "vue-router";
import Chapter05 from '../components/Chapter05/Chapter05.vue'
import Chapter06 from '../components/Chapter06/Chapter06'
import JenKitchenHome from "../components/Chapter06/Exercises/JenKitchen/JenKitchenHome";
import JenKitchenAbout from "../components/Chapter06/Exercises/JenKitchen/JenKitchenAbout";
import NotFound from "../components/404"
import RecipeSalmon from "../components/Chapter06/Exercises/JenKitchen/Recipe/RecipeSalmon";
import RecipeTapenade from "../components/Chapter06/Exercises/JenKitchen/Recipe/RecipeTapenade";
import PastaCouscous from "../components/Chapter06/Exercises/JenKitchen/Recipe/Pasta/PastaCouscous";
import PastaLinguine from "../components/Chapter06/Exercises/JenKitchen/Recipe/Pasta/PastaLinguine";
import Chapter07 from "../components/Chapter07/Chapter07";
import BlackGooseBistroGalleryHome
  from "../components/Chapter07/Exercises/BlackGooseBistroGallery/BlackGooseBistroGalleryHome";
import BlackGooseBistroGalleryBread from "../components/Chapter07/Exercises/BlackGooseBistroGallery/BlackGooseBistroGalleryBread"
import BlackGooseBistroGalleryBurger
  from "../components/Chapter07/Exercises/BlackGooseBistroGallery/BlackGooseBistroGalleryBurger";
import BlackGooseBistroGalleryFish
  from "../components/Chapter07/Exercises/BlackGooseBistroGallery/BlackGooseBistroGalleryFish";
import BlackGooseBistro from "../components/Chapter07/Exercises/BlackGooseBistro/BlackGooseBistro";
import Chapter08 from "../components/chapter08/Chapter08";
import Chapter09 from "../components/Chapter09/Chapter09";
import Chapter10 from "../components/Chapter10/Chapter10";
import Chapter11 from "../components/Chapter11/Chapter11";
import Chapter12 from "../components/Chapter12/Chapter12";
import Chapter13 from "../components/Chapter13/Chapter13";

Vue.use(VueRouter)

const jenKitchenRoutes = [
  {
    path: '/jenkitchen',
    component: JenKitchenHome
  },
  {
    path: '/jenkitchen/about',
    component: JenKitchenAbout,
  },
  {
    path: '/jenkitchen/recipe/salmon',
    component: RecipeSalmon,
  },
  {
    path: '/jenkitchen/recipe/tapenade',
    component: RecipeTapenade,
  },
  {
    path: '/jenkitchen/recipe/pasta/couscous',
    component: PastaCouscous,
  },
  {
    path: '/jenkitchen/recipe/pasta/linguine',
    component: PastaLinguine,
  }
]

const blackGooseBistroGallery = [
  {
    path: '/blackgoosebistrogallery',
    component: BlackGooseBistroGalleryHome
  },
  {
    path: '/blackgoosebistrogallery/bread',
    component: BlackGooseBistroGalleryBread,
  },
  {
    path: '/blackgoosebistrogallery/burger',
    component: BlackGooseBistroGalleryBurger,
  },
  {
    path: '/blackgoosebistrogallery/fish',
    component: BlackGooseBistroGalleryFish,
  }
]

const blackGooseBistro = [
  {
    path: '/blackgoosebistro',
    component: BlackGooseBistro
  }
]

const routes = [
  ...jenKitchenRoutes,
  ...blackGooseBistro,
  ...blackGooseBistroGallery,
  {
    path: '/ch05',
    component: Chapter05
  },
  {
    path: '/ch06',
    component: Chapter06
  },
  {
    path: '/ch07',
    component: Chapter07,
  },
  {
    path: '/ch08',
    component: Chapter08
  },
  {
    path: '/ch09',
    component: Chapter09
  },
  {
    path: '/ch10',
    component: Chapter10
  },
  {
    path: '/ch11',
    component: Chapter11
  },
  {
    path: '/ch12',
    component: Chapter12
  },
  {
    path: '/ch13',
    component: Chapter13,
  },
  {
    path: '*',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router