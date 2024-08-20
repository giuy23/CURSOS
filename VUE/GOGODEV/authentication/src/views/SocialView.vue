<script lang="ts" setup>
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

const loginGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credentials = GoogleAuthProvider.credentialFromResult(result);
      const token = credentials?.accessToken;
      
      alert("Éxito");
    })
    .catch((error) => {
      alert("Failed" + error.message);
    });
};

const loginFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const credentials = FacebookAuthProvider.credentialFromResult(result);
      const token = credentials?.accessToken;

      alert("Éxito");
    })
    .catch((error) => {
      alert("Failed" + error.message);
    });
};

const loginGithub = () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      const credentials = GithubAuthProvider.credentialFromResult(result);
      const token = credentials?.accessToken;

      alert("Éxito");
    })
    .catch((error) => {
      alert("Failed" + error.message);
    });
}
</script>

<template>
  <div class="text-center p-8 text-lg">
    <h1>Social Login</h1>
    <button class="bg-orange-200 rounded mb-4 w-1/5" @click="loginGoogle">
      Login with Google
    </button>
    <br />
    <button class="bg-orange-200 rounded mb-4 w-1/5" @click="loginFacebook">
      Login with Facebook
    </button>
    <br />
    <button class="bg-orange-200 rounded mb-4 w-1/5">Login with Twitter</button>
    <br />
    <button class="bg-orange-200 rounded mb-4 w-1/5" @click="loginGithub">Login with Github</button>
  </div>
</template>

<style scoped></style>
