<template>
  <div class="comment">
    <p class="meta">
      <span>{{ author }} - {{ authorEmail }}</span>
      <span>{{ new Date(created).toLocaleString() }}</span>
    </p>
    <p class="content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    author: {
      type: String,
      default: 'Anonimo',
    },
    authorEmail: {
      type: String,
      default: 'unknown email',
    },
    content: {
      type: String,
      default: '',
    },
    created: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.comment {
  @apply bg-white px-4 py-4;
  .meta {
    @apply flex flex-col md:flex-row justify-between items-start md:items-center text-gray-400;
  }
  .content {
    @apply mt-2;
  }
}
</style>
