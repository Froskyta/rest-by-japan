<template>
    <div class="home">
        <HelloWorld/>
        <Description/>
        <Procedure/>
        <hotel/>
        <HotSpringTypes/>
        <hr>
        <div class="end-site">
            <h1 class="h1">ご<ruby>覧<rt>らん</rt></ruby>いただきありがとうございます!</h1>
            <div class="icons">
                <img :src="require('@/assets/icons/hot.svg')" alt="">
                <img :src="require('@/assets/icons/hot-spring.svg')" alt="">
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Description from '@/components/Description'
import Procedure from '@/components/Procedure'
import hotel from '@/components/hotel'
import HotSpringTypes from '@/components/HotSpringTypes'

export default {
    name: 'Home',
    components: {
        HelloWorld,
        Description,
        Procedure,
        hotel,
        HotSpringTypes
    }
}
</script>
<style scoped lang="scss">
.end-site {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .icons{
        width: 100px;
        height: 100px;
    }
}
</style>
