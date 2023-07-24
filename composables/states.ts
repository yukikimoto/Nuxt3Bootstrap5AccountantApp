export const useLoginUser = () =>
  useState("login-user", () => {
    console.log("retrieving user info...");
    return {
      id: "012345",
      name: "zaki",
      mail: "nuxt-developer@example.com",
      password: "zakizaki",
    };
  });