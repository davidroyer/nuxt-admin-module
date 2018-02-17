<template>
  <section class="blogPost">

    <h1 v-text="post.title"></h1>
    <div class=" container content" v-html="post.content"></div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  head () {
    return {
      title: this.post.title
    }
  },
  async asyncData({app, params, payload}) {
    const {data} = await axios.get(`https://fire-tests.firebaseio.com/posts.json?orderBy="slug"&equalTo="${params.slug}"&print=pretty`)
    const keys = Object.keys(data)
    const post = data[keys[0]]

    return {
      post
    }
  }
}
</script>
