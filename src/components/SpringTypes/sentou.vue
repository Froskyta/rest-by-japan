<template>
    <div class="text">
        こちらは<ruby>基本的<rt>こほんてき</rt></ruby>に<ruby>温泉<rt>おんせん</rt></ruby>はありませんが、
        <ruby>加温<rt>かおん</rt></ruby>されたお<ruby>湯<rt>おゆ</rt></ruby>のみです。
        ただの<ruby>単純<rt>たんじゅん</rt></ruby>な<ruby>湯船<rt>ゆぶね</rt></ruby>のように。
        <div class="description-gallery">
            <a data-fancybox="gallery" :href="require('@/assets/sentou.jpg')" class="image">
                <span><ruby>中<rt>なか</rt></ruby>に</span>
                <img :src="require('@/assets/sentou.jpg')" alt="awdawd">
            </a>
        </div>
        <div class="table">
            <div>
                <h4 class="h4 bold">メリット</h4>
                <ol>
                    <li><ruby>安<rt>やす</rt></ruby>い</li>
                    <li><ruby>子供<rt>こどもの</rt></ruby>を<ruby>連<rt>つ</rt></ruby>れて<ruby>行<rt>い</rt></ruby>っても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby></li>
                </ol>
            </div>
            <div>
                <h4 class="h4 bold">デメリット</h4>
                <ol>
                    <li><ruby>天然由来<rt>てんねんゆらい</rt></ruby>のものでなければ、<ruby>治療効果<rt>ちりょうこうか</rt></ruby>はありません</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sentou'
}
</script>

<style scoped>

</style>
