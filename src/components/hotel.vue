<template>
    <div class="container">
        <h2 class="h2">
            <ruby>旅館<rt>りょかん</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。
        </h2>
        <hr>
        <div class="text">
            これ<ruby>昔<rt>むかし</rt></ruby>ながらの<ruby>和風<rt>わふ</rt></ruby>ホテルです。
            <ruby>主<rt>おも</rt></ruby>に<ruby>温泉旅行<rt>おんせんりょこ</rt></ruby>で<ruby>利用<rt>りよう</rt></ruby>しています。
            <div class="description-gallery">
                <a data-fancybox="gallery" :href="require('@/assets/hotel-main-view.jpg')" class="image">
                    <span><ruby>前<rt>まえ</rt></ruby>に<ruby>旅館<rt>りょかん</rt></ruby></span>
                    <img :src="require('@/assets/hotel-main-view.jpg')" alt="awdawd">
                </a>
                <a data-fancybox="gallery" :href="require('@/assets/hotel-main-view-2.jpg')" class="image">
                    <span><ruby>前<rt>まえ</rt></ruby>に<ruby>旅館<rt>りょかん</rt></ruby></span>
                    <img :src="require('@/assets/hotel-main-view-2.jpg')" alt="awdawd">
                </a>
                <a data-fancybox="gallery" :href="require('@/assets/hotel-in.jpg')" class="image">
                    <span><ruby>中<rt>なか</rt></ruby>に<ruby>旅館<rt>りょかん</rt></ruby></span>
                    <img :src="require('@/assets/hotel-in.jpg')" alt="awdawd">
                </a>
                <a data-fancybox="gallery" :href="require('@/assets/hotel-in-shop.jpg')" class="image">
                    <span><ruby>旅館<rt>りょかん</rt>の<ruby>中<rt>なか</rt></ruby>にお<ruby>土産<rt>みやげ</rt></ruby>のお<ruby>店<rt>みせ</rt></ruby></ruby></span>
                    <img :src="require('@/assets/hotel-in-shop.jpg')" alt="awdawd">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hotel'
}
</script>

<style scoped>

</style>
