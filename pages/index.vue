<template>
  <div class="container">
    <AboutMe />
    <div class="content">
      <main>
        <ArticleCard
          v-for="article in articles"
          :key="article.slug"
          v-bind="article"
        />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: [],
    }
  },
  async mounted() {
    const baseUrl = location.hostname === "localhost" ? 'http://localhost:9999' : 'https://nuxt-miniblog-course.netlify.app'
    const url = `${baseUrl}/.netlify/functions/articles`
    const { articles } = await this.$http.$get(url)
    this.articles = articles.map((a) => ({
      ...a,
      author: a['author-name'][0],
      date: new Date(a.updated),
      cover: a.cover[0]?.thumbnails.large.url
    }))
  }
}
</script>

<style lang="scss">
.container {
  @apply m-auto;
}

.container .content {
  @apply flex flex-col justify-center items-center sm:p-2 md:p-4 lg:p-8 xl:p-16;
  main {
    @apply max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6;
  }
}
</style>
