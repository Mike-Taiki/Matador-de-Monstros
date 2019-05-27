new Vue({
  el: '#app',
  data: {
    nome: 'Michael',
    start: false,
    ataqueMonstro: 0,
    ataqueJogador: 0,
    porcentagem: '100'
  },
  methods: {
    ataque() {
      this.ataqueMonstro = Math.floor(Math.random() * 20);
      this.ataqueJogador = Math.floor(this.ataqueMonstro/3) * 2;
    }
  }
})