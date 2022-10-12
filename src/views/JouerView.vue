<template>
    <div class="jouer">
        <h1>Quiz</h1>
        <h2>A quel pays appartient ce drapeau ?</h2>

        <img :src="resPays.url">

        <p>Réponse :{{resPays.name}}</p>
        <input placeholder="Votre Réponse">

        <button>Réponse</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'JouerView',
  data(){
    return {
        resPays:{
            url:"",
            name:""
        },
        pays:[],
        res:[],
        choixname:"",
        count:0,
    }
  },
  mounted() {
    this.getAllCountry();
  },
  methods: {
    getAllCountry(){
      axios.get("https://restcountries.com/v3.1/all").then((response) => {
        console.log(response.data)
        this.pays=response.data
        this.Questions();
      });
      
    },
    Questions(){
      let rd = Math.floor(Math.random()*1);
      this.resPays.url = this.pays[rd]["flags"]["png"];
      this.resPays.name = this.pays[rd]["translations"]["fra"]["common"];
      console.log(this.resPays.url)
      console.log(this.resPays.name)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button{
  background-color: #42b983;
  color: #2c3e50;
  padding: 10px;
  margin: 10px;
  font-size: larger;
  border-radius: 5px;
}
</style>