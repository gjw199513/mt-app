<template>
  <div class=""/>
</template>

<script>
export default {
  layout: 'blank',
  // 到达页面自动执行
  middleware: async (ctx) => {
    let { status, data } = await ctx.$axios.get('/users/exit')
    if (status === 200 && data && data.code === 0) {
      window.location.href = '/'
    }
  }
}
</script>
