<template>
    <div class="text">
        <ruby>同<rt>おな</rt></ruby>じ
        <ruby>露天風呂<rt>とれんぶろ</rt></ruby>ですが、
        <ruby>完全貸切<rt>かしきり</rt></ruby>です。
        <div class="description-gallery">
            <a data-fancybox="gallery" :href="require('@/assets/kashikirirotenburo.jpg')" class="image">
                <span><ruby>中<rt>なか</rt></ruby>に</span>
                <img :src="require('@/assets/kashikirirotenburo.jpg')" alt="awdawd">
            </a>
        </div>
        <div class="table">
            <div>
                <h4 class="h4 bold">メリット</h4>
                <ol>
                    <li>あなたとあなたのパートナーだけで</li>
                    <li><ruby>衛生的<rt>えいせいてえき</rt></ruby>な</li>
                    <li>いつでも<ruby>利用可能<rt>りようかのう</rt></ruby></li>
                    <li><ruby>美<rt>いつく</rt></ruby>しいインテリア</li>
                </ol>
            </div>
            <div>
                <h4 class="h4 bold">デメリット</h4>
                <ol>
                    <li><ruby>価格<rt>かかく</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'kashikirirotenburo'
}
</script>

<style scoped>

</style>
