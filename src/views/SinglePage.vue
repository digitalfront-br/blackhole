<template lang="pug">
div
  h5 O endereço ip {{ hole.ip }} foi 
    span(v-if="hole.status === true")
      span.uk-text-success
        | Ativo 
    span(v-else)
      span.uk-text-danger
        | Bloqueado 
    | por {{ hole.motivo }} no dia {{ hole.data }}
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    ...mapState({ ip }),
    return {
      hole: {
        ip: this.$route.params.ip,
        status: true,
        motivo: 'ip em conformidade com as normas de conduta',
        data: '2005-08-15T15:52:01+00:00'
      }
    }
  },
  mounted() {
    console.log(this.$route.params);
  }
}
</script>