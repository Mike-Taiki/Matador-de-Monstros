new Vue({
  el: '#app',
  data: {
    nome: 'Michael',
    start: false,
    reiniciar: false,
    ataqueMonstro: 0,
    ataqueJogador: 0,
    vidaJogador: '100',
    vidaMonstro: '100',
    perdeu: false,
    venceu: false,
    dano: false,
    cura: 0,
    danos: []
  },
  methods: {
    ataque() {
      this.ataqueMonstro = Math.floor(Math.random() * 20);
      this.ataqueJogador = Math.floor(Math.random() * 17);
    
      this.vidaJogador -= this.ataqueMonstro;
      this.vidaMonstro -= this.ataqueJogador;

      this.dano = !this.dano;

      if(this.ataqueMonstro == 0 || this.ataqueJogador == 0) {
        this.ataqueJogador = 5;
        this.ataqueMonstro = 9;
        this.vidaJogador -= this.ataqueMonstro;
        this.vidaMonstro -= this.ataqueJogador;
      }

      if(this.vidaJogador <= 0) {
        this.vidaJogador = '0';
        this.perdeu = true;
      } else if(this.vidaMonstro <= 0) {
        this.vidaMonstro = '0';
        this.venceu = true;
      }
    },
    ataqueEspecial() {
      this.ataqueMonstro = Math.floor(Math.random() * 20);
      this.ataqueJogador = Math.floor(Math.random() * 23);

      this.vidaJogador -= this.ataqueMonstro;
      this.vidaMonstro -= this.ataqueJogador;

      if(!this.dano) {
        this.dano = true;
      }

      if(this.ataqueMonstro == 0 || this.ataqueJogador == 0) {
        this.ataqueJogador = 12;
        this.ataqueMonstro = 7;
        this.vidaJogador -= this.ataqueMonstro;
        this.vidaMonstro -= this.ataqueJogador;
      }

      if(this.vidajogador <= 0) {
        this.vidaJogador = '0';
        this.perdeu = true;
      } else if(this.vidaMonstro <= 0) {
        this.vidaMonstro = '0';
        this.venceu = true;
      }
    },
    curar() {

      if(this.vidaJogador == '100') {
        this.vidaJogador = '100';
      } else {
        this.ataqueMonstro = Math.floor(Math.random() * 20);
        this.cura = Math.floor(Math.random() * 23);
  
        this.vidaJogador += this.cura;
        this.vidaJogador -= this.ataqueMonstro;
  
        if(!this.dano) {
          this.dano = true;
        }
  
        if(this.ataqueMonstro == 0) {
          this.ataqueMonstro = 8;
          this.vidaJogador -= this.ataqueMonstro;
        }
  
        if(this.vidaJogador <= 0) {
          this.vidaJogador = '0';
          this.perdeu = true;
        }else if(this.vidaMonstro <= 0) {
          this.vidaMonstro = '0';
          this.venceu = true;
        }
      }

    },
    desistir() {
      this.start = false,
      this.ataqueMonstro = 0,
      this.ataqueJogador = 0,
      this.vidaJogador = '0',
      this.vidaMonstro = '100',
      this.venceu = false,
      this.dano = false,
      this.cura = 0,
      this.danos = []
    },
    reiniciar() {

    }
  }

});