<template>
  <q-img
    @click="openSignIn"
    class='cursor-pointer text-center'
    :src="insignia"
    spinner-color="white"
    sizes="(max-width: 260px) 260w,
          (min-width: 260px) and (max-width: 800px) 800w,
          (min-width: 800px) and (max-width: 1200px) 1200w,
          (min-width: 1200px) 1600w"
    style="min-height: 260px; min-width: 260px"
  />
</template>
<script>
export default {
  props: ['insignia'],
}
</script>
