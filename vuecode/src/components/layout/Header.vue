<template>
  <header id="header">
    <h1 class="logo">
      <a href="#"><span class="sr-only">EUNDII</span></a>
    </h1>
    <nav class="gnb">
      <ul class="gnb-menu">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">SKILL</a>
        </li>
        <li>
          <a href="#">PROJECT</a>
        </li>
      </ul>
    </nav>
  </header>
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
</style>
