<template>
    <div class="block-main-banner">
        <div class="banner">
            <img :src="require('@/assets/main-banner.jpg')" alt="">
            <div class="block-title">
                <span class="title-kanji">温泉</span>
                <span class="title-furigana">おんせん</span>
            </div>
        </div>
        <div class="bottom-text">
            <div class="container">
                <span><ruby>藤 <rt>ふじ</rt></ruby></span>
                <div class="scroll-icon">
                    <img :src="require('@/assets/icons/bottom.svg')" alt="">
                    <div class="text-icon">scroll</div>
                </div>
                <span><ruby>藤 <rt>ふじ</rt></ruby></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<style scoped lang="scss">
.block-main-banner {
    height: 100vh;
    .banner {
        height: 85vh;
        position: relative;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .block-title {
            position: absolute;
            color: white;
            top: 50%;
            left: -10%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            .title-kanji {
                white-space: nowrap;
                font-size: 28rem;
                font-family: "NotoSerifJP-Bold",serif;
                writing-mode: vertical-lr;
                text-orientation: upright;
                display: block;
            }
            .title-furigana {
                writing-mode: vertical-lr;
                text-orientation: upright;
                font-family: "NotoSerifJP-Regular",serif;
                font-size: 3rem;
                display: block;
                margin-left: -5rem;
            }
        }
    }
    .bottom-text {
        height: 15vh;
        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .text-icon {
            font-family: "NotoSerifJP-Regular",serif;
        }
        img {
            width: 40px;
        }
        span {
            font-size: 5rem;
            font-family: "NotoSerifJP-Regular",serif;
            color: #80008021;
        }
        .scroll-icon {
            cursor: pointer;
        }
    }
}
</style>
