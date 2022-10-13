<template>
    <div class="jouer">
      <table>
        <tr>
          <th>Nom</th>
          <th>Score</th>
        </tr>
        <div v-for="(nom,index) in this.$store.state.tabj" :key="index">
            <tr>
              <td>{{nom}}</td>
              <td>{{this.$store.state.rep[index]}}</td>
            </tr>
        </div>
      </table>
    </div>
</template>

<script>
export default {
  name: 'ScoreView',
  
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
table, th, td {
  border: 1px solid;
  display: flex;
  /* margin: 10px; */
  padding: 10px;
}
div{
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>