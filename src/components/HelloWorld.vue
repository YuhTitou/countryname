<template>
  <div class="hello">
    <h1>Welcome to the game !</h1>
    <h2>
      Dans ce jeu, vous allez avoir une liste de drapeau de pays et il faut que vous écriviez le nom de ces pays pour gagner un point.
    </h2>
    <p>Appuyez sur "Jouer" Pour commencer à jouer, ou bien sur "Score" pour voir le classement.</p>
   

    <router-link to="/jouer">
      <button id="btnjouer">JOUER</button>
    </router-link>
    <router-link to="/score">
      <button id="btnscore">SCORE</button>
    </router-link>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
button{
  background-color: #42b983;
  color: #2c3e50;
  padding: 10px;
  margin: 10px;
  font-size: larger;
  border-radius: 5px;
}
</style>
