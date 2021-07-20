<template>
    <StackLayout class="screen">
        <Label class="h1" text="Search." textWrap="true" />
        
        <SearchBar />
    </StackLayout>
</template>

<script>
    import SearchBar from '~/components/SearchBar.vue'

    export default {
        name: 'Search',
        components: {
            SearchBar
        }
    }
</script>

<style scoped lang="scss">
    
</style>