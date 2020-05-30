<template>
  <div>
    <input type="text" name="name" />
    <footer id="footer">hello , {{ data1 }}</footer>
<div>
    <span @click="onClickChild">asd</span>
</div>
  </div>
</template>

<script>
export default {
  methods: {
      onClickChild (value) {
          console.log(value) // someValue
      }
  },
    // To use props, they must be declared
    props: ["data1"]
   
};
</script>
