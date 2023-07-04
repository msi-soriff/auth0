import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { createAuth0 } from '@auth0/auth0-vue';


const app = createApp(App);
app.use(
    createAuth0({
        domain:"dev-2hbi1j0fpdgg01tq.us.auth0.com",
        clientId:"yoXPHmzOXBeyI2GNIDqHCX17zkCoEsoy",
        authorizationParams:{
            redirect_uri: window.location.origin
        }
    })
)
app.mount('#app')
