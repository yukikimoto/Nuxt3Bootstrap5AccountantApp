<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">財務会計アプリ</NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">ホーム</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#">取引履歴</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#">設定</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
        <h1>Homeページ</h1>
        <!-- ここからHomeを作っていく -->
        <!-- 財務会計に必要な要素を入れていく -->
        

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // ここにVue.jsのコードを追加してください
}
</script>

<style scoped>
/* ここにスタイルを追加してください */
</style>
