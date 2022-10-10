<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted() {
    this.getAllCountry()
  },
  methods: {
    getAllCountry(){
      axios.get("https://restcountries.com/v3.1/all").then((response) => {
        console.log(response.data)
      })
    }
  },
}
</script>
