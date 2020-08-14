<template lang="pug">
form(action='')
  .uk-flex.uk-flex-center
    .uk-card.uk-card-default.uk-card-body.uk-width-1-3.uk-flex
      div
        vue-ip(:ip='ip', :on-change='change', theme='material')
  h1
    | {{ ip }}
</template>
<script>
import vueIp from "vue-ip";
import { mapMutations } from 'vuex'
import api from "@/services/api.js";

export default {
  data() {
    return {
      ip: '',
      status: null
    }
  },
  components: {
    vueIp
  },
  methods: {
    ...mapMutations([
      'SET_IP'
    ]),
    change(ip, port, valid) {
      if(valid === true){
        this.SET_IP(ip)
        this.$router.push({ name: 'Single', params: { ip }  })
        console.log(this);
      }
            
    },
    verificaIp(){
      if(this.ip !== '' && this.ip.length >= 7) {
        console.log('ip valido')
        api.get('todos')
          .then( res => console.log('retorno do response: ', res))
          .catch(error => console.log(error))
      } else {
        console.log('ip con')
      }
    }
  }
}
</script>
