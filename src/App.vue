<template>
  <div id="app">
    <app-header></app-header>
    <!--/header-->
    <transition enter-active-class="animated bounceInUp">
      <router-view></router-view>
    </transition>

    <!--/Footer-->
  </div>
</template>

<script>

import AppHeader from "./Pages/Shared/Header"; 

export default {

  components: {
    
    appHeader: AppHeader
  },
  watch:{
    
  }
};
</script>

