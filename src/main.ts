import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import './style.css'
import Router from './api/router'
// import store from './store'
// import axios from 'axios'
import * as Icons from '@element-plus/icons'
import App from './App.vue'

const app = createApp(App)

for (const name in Icons){
	app.component(name,(Icons as any)[name])
}
app.use(ElementPlus)
app.use(Router)
app.mount('#app')

