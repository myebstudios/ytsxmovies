<template>
    <StackLayout class="screen">

        <!-- <Pill /> -->

        <Label class="h1" text="Top Five." textWrap="true" />

        <ScrollView orientation="horizontal">
            <StackLayout orientation="horizontal">
                <MovieCardTop />
                <MovieCardTop />
                <MovieCardTop />
            </StackLayout>
        </ScrollView>

        <FlexboxLayout class="title_link">
            <Label class="h1" text="Latest." textWrap="true" />
            <Label class="see_more" text="SEE MORE" textWrap="true" />
        </FlexboxLayout>

        <CollectionView
            :items="movies"
            colWidth="100%"
            rowHeight="225"
        >
            <v-template>
                <MovieCard :movie="item" />
            </v-template>
        </CollectionView>

    </StackLayout>
</template>
<script>
    import MovieCard from '~/components/MovieCard.vue'
    import MovieCardTop from '~/components/MovieCardTop.vue'
    import DownloadBtn from '~/components/DownloadBtn.vue'
    import Pill from '~/components/Pill.vue'

    import { Http } from '@nativescript/core'

    export default {


        name: 'Home',
        data() {
            return {
                movies: this.getMovies()
            }
        },
        components: {
            DownloadBtn,
            MovieCardTop,
            MovieCard,
            Pill
        },
        methods: {
            getMovies() {
                Http.getJSON('https://yts.mx/api/v2/list_movies.json').then(
                    (response) => {
                        this.movies = response.data.movies;
                        // this.loading = false;
                        console.log("Done...");
                    },
                    e => {
                        console.log(e);
                    }
                )
            }
        }
    }
</script>
<style scoped lang="scss">

    Label.see_more {
        font-size: 14;
        font-family: 'Poppins-Reguar';
        color: #FFC700;
    }

    FlexboxLayout.title_link {
        align-items: center;
        justify-content: space-between;
    }
</style>