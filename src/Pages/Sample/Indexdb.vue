<template>
  <div>
    <div v-if="!isOnline">
      <i class="fas fa-plug fa-3x"></i>

      <h1>I'm offline</h1>
    </div>
    <div v-else>
      <i class="fas fa-wifi fa-3x" style="color:green"></i>

      <h1>I'm online</h1>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>
