<template>
  <div>
    <NavBar/>
    <div class="error">
      <div class="e404">
        <div class="errno"><h1>404</h1></div>
        <div class="errmsg">
          <p v-if="error.statusCode === 404">It seems that you're looking for something that's... "gone".</p>
          <p v-else>An error occurred</p>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
.error {
  display: flex;
  /*flex-wrap: wrap-reverse;*/
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: url("~assets/img/error-bg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.e404 {
  align-items: center;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.errno h1 {
  font-size: 100px;
  color: white;
}

.errmsg {
  font-size: 18px;
  color: white;
}
</style>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar},
  props: ['error'],
  layout: 'empty'
}
</script>
