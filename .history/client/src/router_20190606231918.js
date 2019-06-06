import Vue from "vue";
import Router from "vue-router";
 
Vue.use(Router);
 
export default new Router({
  mode: "history",
  routes: [
      
    /*{
      path: "/",
      name: "customers",
      alias: "/customer",
      component: CustomersList,
      children: [
        {
          path: "/customer/:id",
          name: "customer-details",
          component: Customer,
          props: true
        }
      ]
    }*/
  ]
});