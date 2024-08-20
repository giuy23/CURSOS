import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNtSRE3FmV_X_xB8j9ANUPH9-Ni209vnE",
  authDomain: "curso-vue-666ef.firebaseapp.com",
  projectId: "curso-vue-666ef",
  storageBucket: "curso-vue-666ef.appspot.com",
  messagingSenderId: "1076042300594",
  appId: "1:1076042300594:web:8396a47b2885cddd2a9dab",
  measurementId: "G-4QDEPH6SFY"
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')