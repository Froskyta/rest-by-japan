<template>
    <div class="container">
        <h2 class="h2">
            <ruby>温泉<rt>おんせん</rt></ruby>にはどんな<ruby>種類<rt>しゅるい</rt></ruby>があるのですか。
        </h2>
        <hr>
        <div class="header-types">
            <div class="type-item" :class="{ 'active': currentType === 'daiyokujin' }" @click="setType('daiyokujin')">
                <h3 class="h3"><ruby>大浴場<rt>だいよくじょう</rt></ruby></h3>
            </div>
            <div class="type-item" :class="{ 'active': currentType === 'rotenburo' }" @click="setType('rotenburo')">
                <h3 class="h3"><ruby>露天風呂<rt>ろてんぶろ</rt></ruby></h3>
            </div>
            <div class="type-item" :class="{ 'active': currentType === 'kashikirinsen' }" @click="setType('kashikirinsen')">
                <h3 class="h3"><ruby>樫木林泉<rt>かしきりんせん</rt></ruby></h3>
            </div>
            <div class="type-item" :class="{ 'active': currentType === 'kashikirirotenburo' }" @click="setType('kashikirirotenburo')">
                <h3 class="h3"><ruby>貸切露天風呂<rt>かしきりろてんぶろ</rt></ruby></h3>
            </div>
            <div class="type-item" :class="{ 'active': currentType === 'sentou' }" @click="setType('sentou')">
                <h3 class="h3"><ruby>銭湯<rt>せんとう</rt></ruby></h3>
            </div>
        </div>
        <div>
            <daiyokujin v-if="currentType === 'daiyokujin'"/>
            <rotenburo v-else-if="currentType === 'rotenburo'"/>
            <kashikirinsen v-else-if="currentType === 'kashikirinsen'"/>
            <kashikirirotenburo v-else-if="currentType === 'kashikirirotenburo'"/>
            <sentou v-else-if="currentType === 'sentou'"/>
        </div>
    </div>
</template>

<script>
import daiyokujin from '@/components/SpringTypes/daiyokujin'
import rotenburo from '@/components/SpringTypes/rotenburo'
import kashikirinsen from '@/components/SpringTypes/kashikirinsen'
import kashikirirotenburo from '@/components/SpringTypes/kashikirirotenburo'
import sentou from '@/components/SpringTypes/sentou'
export default {
    name: 'HotSpringTypes',
    components: {
        daiyokujin,
        rotenburo,
        kashikirinsen,
        kashikirirotenburo,
        sentou
    },
    data () {
        return {
            currentType: 'daiyokujin'
        }
    },
    methods: {
        setType (param) {
            this.currentType = param
        }
    }
}
</script>

<style scoped lang="scss">
.header-types {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;

    .type-item {
        cursor: pointer;
        position: relative;
        justify-self: center;
        align-self: end;
        transition: .3s;

        h3 {
            margin-bottom: 10px;
            transition: .3s;
        }

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: black;
            transition: .3s;
        }

        &:hover::before {
            width: 100%;
        }

        &.active {
            border-bottom: 5px #80008066 solid;
            margin-bottom: 20px;

            &::before {
                content: none;
            }
        }
    }
}
</style>
