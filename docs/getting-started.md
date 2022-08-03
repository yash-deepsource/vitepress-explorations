---
layout: doc
---

<script setup>
import IconActivity from '~icons/lucide/activity'

// Image components
import ZPicture from '@/components/ZPicture.vue'

// image
import BoatyBoi from '@/assets/images/boaty-boi.jpg?preset=defaultHd'
</script>


# <icon-activity style="display: inline;" /> Let's get started with Vitepress

<div class="mt-5 animate-bounce">
Bouncy text
</div>


### As markdown

![Boaty boi](assets/images/boaty-boi.jpg)

### As image tag

<z-picture :srcs="BoatyBoi"/>
