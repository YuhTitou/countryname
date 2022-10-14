<template>
    <div>
        <h1>Information du Pays :</h1>

        <div>
            <img :src="resPays.url">
            <p>Nom : {{resPays.name}}</p>
            <p>Nom d'Origine : {{resPays.originname}}</p>
            <p>Capital : {{resPays.capital}}</p>
            <p>Population : {{resPays.pop.toLocaleString()}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'PaysView',
    data(){
    return {
        resPays:{
            url:"",
            name:"",
            originname:"",
            capital:"",
            pop:0
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
                this.resPays.url = this.pays[this.$route.params.id]["flags"]["png"];
                this.resPays.name = this.pays[this.$route.params.id]["translations"]["fra"]["common"];
                this.resPays.capital = this.pays[this.$route.params.id]["capital"][0]
                this.resPays.pop = this.pays[this.$route.params.id]["population"]
                this.resPays.originname = this.pays[this.$route.params.id]["name"]["nativeName"]["isl"]["common"]
                
                    
                // console.log(this.resPays.name)
                // console.log(this.resPays.url)
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