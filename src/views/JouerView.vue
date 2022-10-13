<template>
    <div class="jouer">
        <h1>Quiz</h1>
        <h2>A quel pays appartient ce drapeau ?</h2>

        <div v-if="this.countQ>9">
          <p>Le jeu est fini</p>
          <h2>Quel est ton nom ?</h2>

          <input v-model="namej" placeholder="Votre Nom">

          <router-link to="/score">
            <button v-on:click="getscore()">VOIR LES SCORES</button>
          </router-link>
          
        </div>

        <div v-else>
            <img :src="resPays.url">

            <p>Réponse : {{resPays.name}} </p>
            <input v-model="rep" placeholder="Votre Réponse">

            <button v-on:click="next()">Réponse</button>
        </div>
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
        rep:"",
        namej:"",
        tabj:[],
        countQ:0,
        countRep:0,
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
      let rd = Math.floor(Math.random()*250);
      this.resPays.url = this.pays[rd]["flags"]["png"];
      this.resPays.name = this.pays[rd]["translations"]["fra"]["common"];
    },
    next(){
      this.countQ++
      if(this.resPays.name == this.rep){
        this.res.push(this.rep)
        console.log(this.res)
        this.countRep++
      }
      this.Questions();
      this.rep="";
      
    },
    getscore(){

      if(this.$store.state.rep == "" && this.$store.state.tabj == ""){
        let resultc = []
        let resultj = []

        resultc.push(this.countRep)
        resultj.push(this.namej)
      

        this.$store.commit("setRep",resultc)
        this.$store.commit("setTabj",resultj)

      }else{
        let resultc = this.$store.state.rep
        let resultj = this.$store.state.tabj


        resultc.push(this.countRep)
        resultj.push(this.namej)
        

        this.$store.commit("setRep",resultc)
        this.$store.commit("setTabj",resultj)
      }


      // this.countRep = ""
      // this.namej=""
    

      // this.$store.commit("setRep",this.countRep)
      // this.$store.commit("setTabj",this.namej)

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