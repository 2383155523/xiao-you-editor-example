import { createApp } from "vue"
import App from "./App.vue"
import xiaoYouEditor from "xiao-you-editor"
import router from "./router"
import defineCustomElementsAll from "./customComponents/index"

createApp(App).use(xiaoYouEditor).use(router).mount("#app")
defineCustomElementsAll()
