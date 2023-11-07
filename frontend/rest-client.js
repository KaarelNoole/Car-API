    import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
    import ChildComp from './ChildComp.js'
    const app = createApp({
        components: {
            ChildComp
        },
    data() {
      return {
        carInModal:{id:null,brand:null,model:null,year:null,origin:null},
        cars: [],
        childMsg: 'No child msg yet'
      }
    },
    async created(){
      this.cars = await (await fetch("http://localhost:8080/cars")).json()
    },
    methods: {
          getCar: async function(id) {
              this.carInModal = await (await fetch("http://localhost:8080/cars/" + id)).json()
              let carInfoModal = new bootstrap.Modal(document.getElementById("carInfoModal"), {})
              carInfoModal.show()
          }
    }
  })
  app.mount('#app')