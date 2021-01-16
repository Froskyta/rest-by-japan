<template>
    <div class="text">
        これは<ruby>野外<rt>やがい</rt></ruby>や<ruby>屋外<rt>おくがい</rt></ruby>に<ruby>設置<rt>せっち</rt></ruby>された
        <ruby>屋根<rt>やね</rt></ruby>や<ruby>囲<rt>かこ</rt></ruby>いを<ruby>設<rt>もう</rt></ruby>けない
        <ruby>風呂<rt>ふろ</rt></ruby>である。
        <div class="description-gallery">
            <a data-fancybox="gallery" :href="require('@/assets/rotenburo.jpg')" class="image">
                <span><ruby>中<rt>なか</rt></ruby>に</span>
                <img :src="require('@/assets/rotenburo.jpg')" alt="awdawd">
            </a>
        </div>
        <div class="table">
            <div>
                <h4 class="h4 bold">メリット</h4>
                <ol>
                    <li><ruby>日々<rt>ひび</rt></ruby>の<ruby>疲<rt>つか</rt></ruby>れを<ruby>癒<rt>いや</rt></ruby>せる</li>
                    <li><ruby>関節痛<rt>かんせつうつ</rt></ruby>や<ruby>筋肉痛<rt>きんにくつう</rt></ruby>などに<ruby>効果的<rt>こうかあてき</rt></ruby></li>
                    <li><ruby>非日常感<rt>ひにちじょうかん</rt></ruby>を<ruby>味<rt>あじ</rt></ruby>わえる</li>
                </ol>
            </div>
            <div>
                <h4 class="h4 bold">デメリット</h4>
                <ol>
                    <li><ruby>衛生<rt>えいせい</rt></ruby>が<ruby>気<rt>き</rt></ruby>になる</li>
                    <li><ruby>価格<rt>かかく</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い</li>
                    <li><ruby>掃除<rt>そうじ</rt></ruby>やメンテナンスが<ruby>定期的<rt>ていきいてき</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby></li>
                    <li><ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>が</li>
                    <li><ruby>誰<rt>だれ</rt></ruby>もがあなたの<ruby>裸<rt>はだか</rt></ruby>を<ruby>見<rt>み</rt></ruby>ています</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rotenburo'
}
</script>

<style scoped>

</style>
