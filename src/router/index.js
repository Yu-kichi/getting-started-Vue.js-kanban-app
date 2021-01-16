import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import {authorizenToken} from './guards'

Vue.use(Router)

const router = new Router({routes})
router.beforeEach(authorizenToken)

export default router
