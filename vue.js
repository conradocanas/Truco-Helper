const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
      theme: { dark: true },
    }),
    data: () => ({
      drawer: null,
      titulo: 'Truco Helper',
      contEllos: 0,
      contNos: 0
    }),
    methods: {
      aumentarNos(){
        if(this.contNos >= 0 && this.contNos < 30){
          this.contNos++
        }else if(this.contNos < 0){
          this.contNos = 0;
        }else if(this.contNos >= 30){
          this.contNos = 30;
        }
      },
      aumentarEllos(){
        if(this.contEllos >= 0 && this.contEllos < 30){
          this.contEllos++
        }else if(this.contEllos < 0){
          this.contEllos = 0;
        }else if(this.contEllos >= 30){
          this.contEllos = 30;
        }
      },
      disminuirNos(){
        this.contNos--
      },
      disminuirEllos(){
        if(this.contEllos > 0){
          this.contEllos--
        }

      },
      reiniciar(){
        this.contEllos = 0;
        this.contNos = 0;
      }
    },
  })