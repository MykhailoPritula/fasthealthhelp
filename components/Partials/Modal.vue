<template>
  <section class="modal" :class="{ 'modal-active': anim }">
    <button class="close-modal-bg" @click="closeModal"></button>
    <div class="modal-inner">
      <button class="close-modal" @click="closeModal">+</button>
      <div v-html="this.$store.state.modal"></div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      anim: false
    }
  },
  computed: {
    modal(){
      return this.$store.state.modal
    }
  },
  methods: {
    closeModal(e){
      e.preventDefault();
      this.$store.commit('setModal', false)
      document.documentElement.style.overflowY = 'auto'
    }
  },
  created(){
    setTimeout(()=>{
      this.anim = true;
    }, 250);
  },
  destroyed(){
    this.anim = false;
  }
}
</script>