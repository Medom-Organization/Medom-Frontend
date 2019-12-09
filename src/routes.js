import Dashboard from './components/Dashboard/wrapper/dashboard.vue'
import addDoctor from './components/Dashboard/wrapper/Doctors/addDoctor.vue';
import listDoctor from './components/Dashboard/wrapper/Doctors/doctorsList.vue';


export default [
    {path: '/', component: Dashboard},
    {path: '/addDoctor', component: addDoctor},
    {path: '/listDoctors', component: listDoctor}
]