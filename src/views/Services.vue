<template>
    <div>
        <h1>Services</h1>
    </div>
</template>

<script>
import HealthClient from "@/clients/HealthClient";

HealthClient.getStatus();

export default {
    name: 'Services',
    props: {}
}
</script>

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
