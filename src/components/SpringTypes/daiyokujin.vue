<template>
    <div class="text">
        これは<ruby>浴場<rt>よくじょう</rt></ruby>の<ruby>一種<rt>いっしゅ</rt></ruby>であるが、
        <ruby>特<rt>とく</rt></ruby>にその<ruby>浴室<rt>よくしつ</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>く
        <ruby>大人数<rt>だいにんず</rt></ruby>で<ruby>同時<rt>どうじ</rt></ruby>に<ruby>利用可能<rt>りようかのう</rt></ruby>
        な<ruby>場合<rt>ばあい</rt></ruby>にこの<ruby>名称<rt>めいしょう</rt></ruby>が<ruby>用<rt>もち</rt></ruby>いられることがある。
        <div class="description-gallery">
            <a data-fancybox="gallery" :href="require('@/assets/daiyokujyo.jpg')" class="image">
                <span><ruby>中<rt>なか</rt></ruby>に</span>
                <img :src="require('@/assets/daiyokujyo.jpg')" alt="awdawd">
            </a>
        </div>
        <div class="table">
            <div>
                <h4 class="h4 bold">メリット</h4>
                <ol>
                    <li><ruby>浴室空間<rt>よくしつくうかん</rt></ruby>の<ruby>広<rt>ひろお</rt></ruby>さ</li>
                    <li><ruby>浴槽<rt>よくそう</rt></ruby>のサイズ</li>
                    <li><ruby>入浴設備<rt>にゅよくせつび</rt></ruby></li>
                    <li><ruby>体<rt>からだ</rt></ruby>がより<ruby>温<rt>ぬく</rt></ruby>まる</li>
                    <li>コミュニティ<ruby>ー空間<rt>いちくうかん</rt></ruby></li>
                </ol>
            </div>
            <div>
                <h4 class="h4 bold">デメリット</h4>
                <ol>
                    <li><ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>が</li>
                    <li><ruby>誰<rt>だれ</rt></ruby>もがあなたの<ruby>裸<rt>はだか</rt></ruby>を<ruby>見<rt>み</rt></ruby>ています</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'daiyokujin'
}
</script>

<style scoped lang="scss">

</style>
