<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- ここにロゴを追加する -->
      <div class="logo">
        <NuxtLink class="navbar-brand" to="/">
          <img src="~/assets/img/logo.png" alt="logo" width="40" height="40"/>
        </NuxtLink>
      </div>
      <!-- <NuxtLink class="navbar-brand" to="/">財務会計アプリ</NuxtLink> -->
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/auth/login">ログイン</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/auth/signup">サインアップ</NuxtLink>
        </li>
      </ul>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/home">ホーム</NuxtLink>
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
</template>
