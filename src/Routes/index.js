import TodoPage from "../Page/todoPage.vue"
import CovidTrackerPage from "../Page/CovidTracker.vue"
export default [
    {
        path: '/',
        component:TodoPage
    },
    {
        path: '/covid',
        component:CovidTrackerPage
    }
]