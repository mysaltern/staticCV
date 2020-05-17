<template>
  <div>
    <div v-if="Math.random() > 0.5">
      <i class="fas fa-plug fa-3x"></i>
    </div>
    <div v-else>
      <i class="fas fa-wifi fa-3x" style="color:green"></i>
    </div>
  </div>
</template>



<script>
export default {
    
}
</script>