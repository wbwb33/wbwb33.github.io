var app = new Vue({
  el: '#app',
  data: {
    message: '',
    messageWas: ''
  },
  methods: {
    validateInput: function () {
      return this.message.length > 0
    },
    sendMessage: function () {
      if (this.validateInput()) {
        axios
          .get(`http://34.101.171.51:5000/?msg=${this.message}`, { crossdomain: true })
          .then(response => (this.messageWas = response.data))
          .catch(err => console.log(err))
        this.messageWas = this.message
        this.message = ''
      } else {
        console.log("input name and text")
      }
    }

  }
})