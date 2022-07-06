<template>
  <main class="layout layout-default">
    <Nuxt />
    <PartialsModal v-if="this.$store.state.modal"/>
  </main>
</template>
<script>
export default {
  data(){
    return {
      scripts: false
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Fast Health Help',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'erc, helpers, specialists, keywords, words',
        },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: '#ffffff',
        },
      ]
    }
  },
  mounted(){
    setTimeout(() => {
      this.scripts = true
    },1000)
  },
  beforeCreate(){
    this.script = true
  }
}
</script>
<style lang="scss">
.layout-default{
  height: 100vh;
  position: relative;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
  *{
    font-family: 'Montserrat', sans-serif;
  }
  .container {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
    @media (min-width: 768px) {
      max-width: 768px;
    }
    @media (min-width: 992px) {
      max-width: 992px;
    }
    @media (min-width: 1200px) {
      max-width: 1200px;
      padding-left: 0;
      padding-right: 0;
    }
  }
  .scripts{
    display: none;
  }
}
</style>