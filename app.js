new Vue({
  el: '#app',
  data: {
    nome: 'Michael',
    start: false,
    ataqueMonstro: 0,
    ataqueJogador: 0,
    vidaJogador: '100',
    vidaMonstro: '100',
    perdeu: false,
    dano: false,
    danos: {
      jogador: [],
      monstro: []
    }
  },
  methods: {
    ataque() {
      this.ataqueMonstro = Math.floor(Math.random() * 20)
      this.ataqueJogador = Math.floor(this.ataqueMonstro/3) * 2
    
      this.vidaJogador -= this.ataqueMonstro
      this.vidaMonstro -= this.ataqueJogador

      this.dano = !this.dano;

      this.danos.jogador.push(this.ataqueMonstro);
      this.danos.monstro.push(this.ataqueJogador);

      console.log(this.danos);

      if(this.vidaJogador <= 0) {
        this.vidaJogador = '0'
        this.perdeu = true
      }
    }
  }
});