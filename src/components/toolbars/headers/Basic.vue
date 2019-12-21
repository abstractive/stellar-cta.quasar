<template>
  <q-header>
    <q-toolbar color="primary">
      <q-btn
        flat dense round
        @click="toggleDrawer"
        aria-label="Navigation">
        <q-icon name="fas fa-bars" />
      </q-btn>
      <q-toolbar-title>
        <q-btn size=lg no-caps flat type='a' class='cursor-pointer' to='/#'>
          {{$t('presence.name')}}
        </q-btn>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
import { openURL } from 'quasar'
export default {
  methods: {
    openURL,
    toggleDrawer () {
      this.$store.dispatch('toggleDrawer')
    }
  }
}
</script>
