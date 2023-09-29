<template>
  <div class="article-card">
    <NuxtLink :to="slug">
      <h3>{{ title }}</h3>
    </NuxtLink>
    <div class="author">
      <p>Por {{ author }}</p>
      <small>Fecha de publicacion: {{ date }}</small>
    </div>
    <figure>
      <img :src="cover" alt="cover">
    </figure>
    <p>{{ description }}</p>
    <div class="actions">
      <NuxtLink class="btn" :to="slug">Ir al post</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    slug: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      default: ''
    },
    cover: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.article-card {
  @apply block bg-white sm:border sm:rounded-lg p-4;
  h3 {
    @apply font-bold text-xl mb-2 mt-0;
  }
  div.author {
    @apply my-2;
    p {
      @apply m-0;
    }
    small {
      @apply italic;
    }
  }
  figure {
    img {
      @apply w-full;
    }
  }
  p {
    @apply my-4 font-serif;
  }
  div.actions {
    @apply flex gap-2;
    .btn {
      @apply w-full text-center border rounded-full px-8 py-2 bg-gray-200 hover:bg-gray-300;
    }
  }
}
</style>
