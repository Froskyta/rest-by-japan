<template>
    <div class="container">
        <h2 class="h2">
            <ruby>温泉<rt>おんせん</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。
        </h2>
        <hr>
        <div class="text">
            <span class="bold"><ruby>温<rt>ゆたか（おん）</rt></ruby></span> -「<ruby>暖<rt>あった</rt></ruby>かい、<ruby>熱<rt>あつ</rt></ruby>い」という<ruby>意味<rt>いみ</rt></ruby>。
            <br>
            <br>
            <span class="bold"><ruby>泉<rt>いずみ（せん）</rt></ruby></span> -「<ruby>源流<rt>げんるい</rt></ruby>、キー、<ruby>噴泉<rt>ふんせん</rt></ruby>」という<ruby>意味<rt>いみ</rt></ruby>。
        </div>
        <div class="description-gallery">
            <a data-fancybox="gallery" :href="require('@/assets/vapor.jpg')" class="image">
                <span>温</span>
                <img :src="require('@/assets/vapor.jpg')" alt="awdawd">
            </a>
            <a data-fancybox="gallery" :href="require('@/assets/natural-source.jpg')" class="image">
                <span>泉</span>
                <img :src="require('@/assets/natural-source.jpg')" alt="awdawd">
            </a>
            <a data-fancybox="gallery" :href="require('@/assets/hot-spring.jpg')" class="main-image image">
                <span>温泉</span>
                <img :src="require('@/assets/hot-spring.jpg')" alt="awdawd">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Description'
}
</script>

<style scoped lang="scss">
br {
    margin: 0 10px;
}
</style>
