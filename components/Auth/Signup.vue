<template>
  <div class="container">
    <div class="signup-container">
      <h3 class="signup-title">財務会計サイト - サインアップ</h3>
      <form class="signup-form">
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
          <label for="email">メールアドレス</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="メールアドレスを入力してください"
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
        <button type="submit" class="btn btn-primary">サインアップ</button>
        <div class="text-center">
          <p>アカウントを既にお持ちですか？ <NuxtLink to="/auth/login">ログイン</NuxtLink></p>
        </div>
      </form>
    </div>
  </div>
</template>
