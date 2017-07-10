<template lang="html">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polygon v-for="i in number" :points="getPoints(i-1)" :style="`
            fill:${i<=score? highlightColor: defaultColor};
        `"/>
    </svg>
</template>

<script>
export default {
    props: {
        // 得分
        score: {
            type: Number,
            default: 0
        },
        // 最大分值
        number: {
            type: Number,
            default: 5
        },
        defaultColor: {
            type: String,
            default: '#cdced5'
        },
        highlightColor: {
            type: String,
            default: '#ffb31f'
        },
        scale:{
            type: Number,
            default: 3
        },
        interval:{
            type: Number,
            default: 5
        }
    },
    data() {
        return {
            //画五角星的元数据
            shapeData:[[3,0], [5,6], [0,2], [6,2], [1,6]]
        }
    },
    methods: {
        getPoints(index){
            let width = 6*this.scale;
            let points = '';
            for (let i=0; i <this.shapeData.length; i++){
                let p = this.shapeData[i];
                let x = p[0]*this.scale + index*(this.interval + width);
                let y = p[1]*this.scale;
                points+= `${x},${y} `
            }
            return points;
        }
    }
}
</script>

<style lang="scss">
</style>
