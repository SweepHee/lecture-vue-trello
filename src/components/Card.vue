<template>
    <div>
        Card
        <div v-if="loading">loading card ...</div>
        <div v-else>cid: {{cid}} </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cid: 0,
            loading: false
        }
    },
    watch: {
        "$route": {
            handler: "fetchData",
            immediate: true
        }
    },
    created() { // created는 문서 열릴때 한번 실행되는거라 값이 안변하는 경우 많음!! 주의!
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading = false
            }, 500)

        }
    }
}
</script>

<style lang="">
    
</style>