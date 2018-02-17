<template>
  <div class="blog">
    <div class="hero is-primary is-bold is-small">
      <div class="container">
        <h1 class="title" v-text="$metaInfo.title"></h1>
      </div>
    </div>
      <section class="container">
        <div class="postsNavigation">
          <template v-for="(post, key) in posts">
            <nuxt-link class="postLink card has-shadow" tag="li" :key="key" exact :to="`/posts/${post.slug}`">
              <a class="title" v-text="post.title"></a>
              <div class="post-detail tags" v-if="post.tags" >
                <template v-for="(tag, index) in post.tags">
                  <div class="tag">{{tag}}</div>
                </template>
              </div>
            </nuxt-link>
          </template>
        </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  head () {
    return {
      title: 'Blog Posts'
    }
  },
  async asyncData ({ app }) {
    const {data} = await axios.get('https://fire-tests.firebaseio.com/posts.json')
    return {
      posts: data
    }
  }
}
</script>
