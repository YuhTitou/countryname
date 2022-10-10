<template>
    <div class="jouer">
        <h1>Quiz</h1>
        <h2>A quel pays appartient ce drapeau ?</h2>

        <input placeholder="Votre Réponse">

        <button>Réponse</button>
    </div>
</template>

<script>
export default {
  name: 'JouerView',
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