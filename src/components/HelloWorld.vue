<i18n>
{
  "en": {
    "hello": "🇬🇧 Hello!"
  },
  "nl": {
    "hello": "🇳🇱 Hallo!"
  }
}
</i18n>

<template>
  <div class="hello">
    <h1>{{ $t('hello') }}</h1>
    <a href="#" @click.prevent="switchMetricSystem('km')">
      {{$t('metrics.kilometers')}}
    </a>
     |
    <a href="#" @click.prevent="switchMetricSystem('mi')">
      {{$t('metrics.miles')}}
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    switchMetricSystem(metric) {
      this.$store.commit('setMetricSystem', metric);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
