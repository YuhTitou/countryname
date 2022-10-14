<template>
    <div class="pays">
        <h2>Les Pays :</h2>
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
            name:[]
        },
        pays:[],
        
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
                    
                }
                console.log(this.resPays.name)
                console.log(this.resPays.url)
            });
        },
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
</style>