<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  srcs: Array<{
    type: string;
    srcset: string;
    sizes: string;
    loading?: string;
    src?: string;
  }>;
}>();

const imgSrc = computed(
  () =>
    props.srcs.pop() as {
      type: string;
      srcset: string;
      sizes: string;
      loading?: string;
      src: string;
    }
);
</script>
<template>
  <picture :key="imgSrc.src">
    <source
      v-for="(src, index) in srcs"
      :key="index"
      :srcset="src.srcset"
      :type="src.type"
      :sizes="src.sizes"
    />
    <img
      :src="imgSrc.src"
      :srcset="imgSrc.srcset"
      :loading="imgSrc.loading"
      :type="imgSrc.type"
      :sizes="imgSrc.sizes"
    />
  </picture>
</template>
