<template>
  <div class="login">
    <div class="container">
      <div class="login-container">
        <h3 class="login-title">財務会計サイト - ログイン</h3>
        <form class="login-form">
          <div class="form-group">
            <label for="username">ユーザー名</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="ユーザー名を入力してください"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">パスワード</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="パスワードを入力してください"
              required
            />
          </div>
          <NuxtLink type="submit" class="btn btn-primary" to="user/">ログイン</NuxtLink>
          <div class="text-center">
            <a href="#" class="forgot-link">パスワードをお忘れですか？</a>
          </div>
          <div class="text-center">
            <p>アカウントをまだお持ちではありませんか？ <NuxtLink to="/auth/signup">サインアップ</NuxtLink></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
