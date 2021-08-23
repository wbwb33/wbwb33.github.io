var app = new Vue({
  el: '#app',
  data: {
    message2: 'Hello Vue.js!',
    message: '',
    messageWas: ''
  },
  methods: {
    reverseMessage: function () {
      this.message2 = this.message2.split('').reverse().join('')
    },
    sendMessage: function () {
      d3.json('https://postman-echo.com/get').then((data) => {
        console.log(data);
      })
      // axios
      //   .get('https://postman-echo.com/get', { crossdomain: true })
      //   .then(response => (this.messageWas = response))
      //   .catch(err => console.log(err))
      // this.messageWas = this.message
      this.message = ''
    }

  }
})