import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);
app.config.globalProperties.$IVG = 18

app.config.errorHandler = (error) => {
  console.log(error, ':v');
}


app.mount("#app");
// const footer = createApp(Footer)
// footer.mount('#footer')
