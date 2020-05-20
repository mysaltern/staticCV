<template>
  <div class="container h-100">
    <div v-bind:class="{ diccounect: !isOnline }">
      <div class="row h-100 justify-content-center align-items-center">
        <div v-if="!isOnline" class="col-12">
          <i class="fas fa-plug fa-3x"></i>

          <h5>I'm offline</h5>
        </div>
        <div v-else class="col-12">
          <i class="fas fa-wifi fa-3x" style="color:green"></i>

          <h5>I'm online</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // attachClass: true
    };
  },
  computed: {
    // list: function() {
    //   return this.$store.state.transaction.list;
    // }
  }
};
</script>
