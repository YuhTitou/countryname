<template>
    <div class="jouer">
        <h2>{{this.$store.state.tabj}}</h2>
        <h2>{{this.$store.state.rep}}/10</h2>
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
</style>