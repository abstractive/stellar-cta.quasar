<template>
  <div>
    <q-page class="stellar-landing full-height full-width fluid justify-center text-center column q-pa-lg"
      :style="{ backgroundImage: `url('${background}')` }">
        <div class="text-center q-mb-md">
          <slot></slot>
          <q-btn v-if='button_enable' size=lg push clickable no-caps
            :class='button_class'
            :icon-right="button_icon"
            :color='button_color'
            @click='scrollChoice(target)'
            :label='button_label'>
          </q-btn>
        </div>
    </q-page>
  </div>
</template>
<script>

export default {
  props: {
    target: String,
    background: String,
    button_class: {
      type: String,
      default: 'text-left q-px-lg'
    },
    button_color: {
      type: String,
      default: 'grey-9'
    },
    button_enable: {
      type: Boolean,
      default: true
    },
    button_label: {
      type: String,
      default: 'Read More'
    },
    button_icon: {
      type: String,
      default: 'fas fa-caret-down'
    }
  },
  methods: {
    scrollChoice(target) {
      switch(target) {
        case 'one-page':
          this.scrollOnePage()
          break
        default:
          this.scrollToElement(target)
      }
    }
  }
}
</script>

<style scoped>
.stellar-landing {
  background-size: cover;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
