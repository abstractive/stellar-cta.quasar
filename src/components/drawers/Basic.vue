<template>
  <div>
    <q-drawer
      elevated bordered
      :mini="!fullDrawer"
      show-if-above
      v-model="showDrawer"
      :breakpoint="500"
      content-class="bg-grey-4">
        <q-list highlight link>
          <template v-for='option in options'>
            <template v-if='option == "separator"'>
              <q-separator v-bind:key='option.type' />
            </template>
            <template v-else>
              <q-item v-bind:key='option.label'
                clickable class='q-my-md'
                v-bind='routeOption(option)'
                v-on:click='clickOption(option)'>
                <q-item-section side avatar>
                  <q-icon class='text-grey-10' :name="option.icon" />
                </q-item-section>
                <q-item-section class='text-grey-8'>{{option.label}}</q-item-section>
                <q-tooltip
                  v-if='showDrawerTooltip'
                  content-class="q-pa-sm q-px-lg bg-deep-orange-6"
                  content-style="font-size: 16px"
                  anchor="center right"
                  self="center left"
                  :offset="[10, 10]">
                  {{option.label}}
                </q-tooltip>
              </q-item>
            </template>
          </template>
          <q-separator />
          <q-item clickable
            @click.capture='toggleSidebar'>
            <q-item-section class='q-my-md' side avatar>
              <q-icon class='text-grey-6'
                :name='(!fullDrawer) ? "fas fa-chevron-right" : "fas fa-chevron-left"' />
            </q-item-section>
            <q-item-section class='text-grey-6'>{{$t('drawer.collapse')}}</q-item-section>
            <q-tooltip
              v-if='showDrawerTooltip'
              content-class="q-pa-sm q-px-lg  bg-deep-orange-6"
              content-style="font-size: 16px"
              anchor="center right"
              self="center left"
              :offset="[10, 10]">
              {{$t('drawer.collapse')}}
            </q-tooltip>
          </q-item>
        </q-list>
    </q-drawer>
  </div>
</template>
<script>
export default {
  props: ['options'],
  methods: {
    clickOption (o) {
      if ('click' in o) {
        o.click()
      }
    },
    routeOption (o) {
      if ('to' in o) {
        return {
          to: o.to
        }
      }
    },
    toggleSidebar (e) {
      if (!this.fullDrawer){
        this.$store.dispatch('fullDrawer')
      } else {
        this.$store.dispatch('miniDrawer')
      }
      e.stopPropagation()
    }
  },
  computed: {
    showDrawer () {
      return this.$store.getters.showDrawer
    },
    fullDrawer () {
      return this.$store.getters.fullDrawer
    },
    showDrawerTooltip () {
      return !this.fullDrawer
    }
  }
}
</script>
