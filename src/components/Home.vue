<template>
    <div>
        HOME
        <div>
            Board List :
            <div v-if="loading">loading...</div>
            <div v-else>
                <div v-for="b in boards" :key="b.id">
                    {{b}}
                </div>
            </div>
        
            <ul>
                <li>
                    <router-link to="/b/1">Board 1</router-link>
                </li>
                <li>
                    <router-link to="/b/2">Board 2</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {board} from "../api"
// 객체를 import할 땐 중괄호... (export defaul로 해당 모듈 다 밖으로 보내는거아니면 이렇게 하는듯?)

export default {
    data() {
        return {
            loading: false,
            boards: [],
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            board.fetch()
            .then(data => {
                this.boards = data
            })
            .finally(_ => {
                this.loading = false
            })
        }
    }
}
</script>

<style lang="">
    
</style>
