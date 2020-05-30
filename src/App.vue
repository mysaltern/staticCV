<template>
  <div id="app">
    <app-header></app-header>

    <!--/header-->
    <transition enter-active-class="animated bounceInUp">
      <router-view> </router-view>
    </transition>

    <app-footer :data1="data1"  />

    <!--/Footer-->
  </div>
</template>

<script>
import AppHeader from "./Pages/Shared/Header";
import AppFooter from "./Pages/Shared/Footer";
export default {
  name: "app",

  components: {
    appHeader: AppHeader,
    AppFooter: AppFooter
  },
  data() {
    return {
     
        data1: "matt2"
     
    };
  }
};
</script>
