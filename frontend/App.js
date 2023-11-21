export default {
    /*html*/
    template: `
    <h1>Hello App!</h1>
    <p>
      <router-link to="/cars">Go to Cars List</router-link>
      <router-link to="/sellers">Go to Sellers Lists</router-link>
    </p>
    <router-view></router-view>
    `,
    components: {
    }
}