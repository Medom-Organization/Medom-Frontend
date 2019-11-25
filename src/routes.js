import Dashboard from './components/dashboard/wrapper/dashboard.vue';
import addDoctor from './components/dashboard/wrapper/Doctors/addDoctor.vue';
import listDoctor from './components/dashboard/wrapper/Doctors/doctorsList.vue';


export default [
    {path: '/', component: Dashboard},
    {path: '/addDoctor', component: addDoctor},
    {path: '/listDoctors', component: listDoctor}
]