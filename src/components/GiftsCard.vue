<template>
    <div class="col-6 col-md-2 my-3 bg-white elevation-2 rounded p-3 selectable">
        <img src="{{gift.url}}" alt="" class="img-fluid rounded-top">
        <p class="text-center">{{ gift.tag }}</p>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Gift } from '../models/Gift';
export default {
    props: { gift: Gift },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>

</style>