<template>
  <div class="container-fluid">
    <section class="row justify-content-evenly">
      <!-- <div class="col-6 col-md-2 my-3 bg-white elevation-2 rounded p-3 selectable">
        <img
          src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
          alt="" class="img-fluid">
        <p class="text-center">Tag / Description</p>
      </div> -->

      <!-- <div class="col-3 my-3 bg-white elevation-2 rounded p-2 selectable"
        onclick="app.giftsController.openPresent('${g.id}')">
        <img src="https://thumbs.gfycat.com/CheerfulDefensiveBoa-size_restricted.gif" alt="" class="img-fluid">
        <p class="text-center">${g.tag}</p>
      </div> -->
    </section>
  </div>
  <GiftsCard v-for="g in gifts" :gifts="m" />
</template>

<script>
import { giftsService } from '../services/GiftsService'
import { onMounted } from 'vue'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'

export default {
  setup() {
    onMounted(() => {
      getGifts();
    });
    async function getGifts() {
      try {
        await giftsService.getGifts();
      }
      catch (error) {
        logger.log(error);
        Pop.error(error);
      }
    }
    return {
      gifts: computed(() => AppState.gifts)
    };
  },
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
