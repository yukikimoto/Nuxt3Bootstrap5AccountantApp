<template>
  <div>
    <div class="container">
      <h1>財務会計アプリへようこそ！</h1>
      <p>このアプリは、財務会計の基本的な機能を備えたアプリです。</p>
      <NuxtLink to="/auth/signup">
        <button class="btn btn-primary">初めての方はこちら</button>
      </NuxtLink>
      <NuxtLink to="/auth/login">
        <button class="btn btn-primary">登録済みの方はこちら</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // ここにVue.jsのコードを追加してください
};
</script>

<style scoped>
/* ここにスタイルを追加してください */
</style>
