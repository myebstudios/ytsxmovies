<template>
    <StackLayout style="padding-right: 16;">
        <AbsoluteLayout>
            <Image style="border-radius: 15;" width="280" height="180" src="~/images/covers/cover1.jpg" stretch="aspectFill"/>
        </AbsoluteLayout>

        <Label style="margin-top: 10;" class="h2" text="Hitman’s Wife’s Bodyguard" textWrap="true" />
        
        <Rating />
    </StackLayout>
</template>
<script>
    import Rating from './Rating.vue'

    export default {
        name: 'MovieCardTop',
        components: {
            Rating
        },
        props: {
            movie: Object
        }
    }
</script>
<style scoped lang="scss">
    
</style>