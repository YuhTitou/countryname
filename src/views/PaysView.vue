<template>
    <div class="pays">
        <h2>Les Pays :</h2>
        <input v-model="continent" placeholder="Nom de continent :">
        <button v-on:click="filtre()">Filtre</button>
        <table>
            <tr>
                <th>Nom</th>
                <th>Drapeau</th>
            </tr>

            <tr v-for="(unpays,index) in this.resPays.name" :key="index">
                <td>{{this.resPays.name[index]}}</td>
                <router-link :to="{name : 'unpays', params : { id : index}}">
                    <td><img :src="this.resPays.url[index]"></td>
                </router-link>
            </tr>

        </table>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'PaysView',
    data(){
    return {
        resPays:{
            url:[],
            name:[],
            continents:[]
        },
        pays:[],
        result:[],
        continent:""
        
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
                for (let index = 0; index < this.pays.length; index++) {
                    this.resPays.url.push(this.pays[index]["flags"]["png"]);
                    this.resPays.name.push(this.pays[index]["translations"]["fra"]["common"]);
                    this.resPays.continents.push(this.pays[index]["continents"][0])
                    
                }
                console.log(this.resPays.continents)
                
                
            });
        },
        filtre(){
            this.resPays.url = []
            this.resPays.name = []
            this.resPays.continents= []
            axios.get("https://restcountries.com/v3.1/all").then((response) => {
                console.log(response.data)
                this.pays=response.data
                for (let index = 0; index < this.pays.length; index++) {
                    if(this.continent == this.pays[index]["continents"][0]){
                        this.resPays.url.push(this.pays[index]["flags"]["png"]);
                        this.resPays.name.push(this.pays[index]["translations"]["fra"]["common"]);
                        this.resPays.continents.push(this.pays[index]["continents"][0])
                    }
                    else if(this.continent == ""){
                        this.resPays.url.push(this.pays[index]["flags"]["png"]);
                        this.resPays.name.push(this.pays[index]["translations"]["fra"]["common"]);
                        this.resPays.continents.push(this.pays[index]["continents"][0])
                    }
                    
                    
                }
                console.log(this.resPays)
                
                
            });
        }
    }
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
.pays{
    width: 100%;
}
table, th, td {
  border: 1px solid;
  /* margin: 10px; */
  padding: 10px;
}
div{
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
input{
    font-size: large;
    padding: 10px;
    
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