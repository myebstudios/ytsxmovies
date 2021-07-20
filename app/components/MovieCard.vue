<template>
    <GridLayout style="margin-bottom: 16;" rows="auto" columns="150, *">
        <AbsoluteLayout col="0">
            <Image style="border-radius: 15;" width="150" height="225" :src="movie.medium_cover_image" />
            <Image top="16" left="125" width="14" src="~/images/icons/bookmark-icon.png" />
        </AbsoluteLayout>

        <StackLayout col="1" style="padding-left: 16;">
            <Label class="h2" :text="movie.title" textWrap="true" />

            <Rating :rating="movie.rating" />

            <Label class="genres" :text="movie.genres" textWrap="true" />
            
            <Label class="sum" :text="movie.summary" textWrap="true" />
        </StackLayout>
    </GridLayout>
</template>
<script>
    import Rating from '~/components/Rating.vue'

    export default {
        name: 'MovieCard',
        components: {
            Rating
        },
        props: {
            movie: Object,
        }
    }
</script>
<style scoped lang="scss">
    Label.genres {
        font-size: 14;
        font-family: 'Poppins-Regular';
        color: white;
    }

    Label.sum {
        color: #888888;
    }
</style>