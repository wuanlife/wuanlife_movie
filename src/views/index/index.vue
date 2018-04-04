<template>
  <div class="index-container">
    <section>
      <ribbon-card title="keke">
        <div>
          wanse
        </div>
      </ribbon-card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['user'])
  },
  created () {}
}
</script>
