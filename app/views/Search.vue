<template>
    <GridLayout rows="auto, *" columns="*" class="screen">
        <StackLayout style="margin-bottom: 20;" row="0">
            <FlexboxLayout class="top_bar">
            <Image @tap="goHome" width="14" style="margin-right: 30;" src="~/images/icons/back-icon.png" />
            <Label class="h1" text="Search." textWrap="true" />
            </FlexboxLayout>

            <SearchBar style="margin-bottom: 20;" />

            <ScrollView scrollBarIndicatorVisible="false" orientation="horizontal">
                <StackLayout orientation="horizontal">
                    <Label class="pill" @tap="getMovies" text="All" textWrap="true" />
                    <Label class="pill" @tap="filterMovies('action')" text="Action" textWrap="true" />
                    <Label class="pill" @tap="filterMovies('comedy')" text="Comedy" textWrap="true" />
                    <Label class="pill" @tap="filterMovies('animation')" text="Animation" textWrap="true" />
                </StackLayout>
            </ScrollView>
        </StackLayout>
        
        <CollectionView
            row="1"
            :items="movies"
            colWidth="100%"
            rowHeight="225"
        >
            <v-template>
                <MovieCard :movie="item" />
            </v-template>
        </CollectionView>
    </GridLayout>
</template>

<script>
    import SearchBar from '~/components/SearchBar.vue'
    import MovieCard from '~/components/MovieCard.vue'
    import {Http} from '@nativescript/core'

    export default {
        name: 'Search',
        components: {
            SearchBar,
            MovieCard,
        },
        data() {
            return {
                movies: this.searchMovies("marvel")
            }
        },
        methods: {
            getMovies() {
                Http.getJSON('https://yts.mx/api/v2/list_movies.json').then(
                    (response) => {
                        this.movies = response.data.movies;
                        // this.loading = false;
                        console.log("Done from Home...");
                        return response.data.movies;
                    },
                    e => {
                        console.log(e);
                    }
                )
            },
            searchMovies(query) {
                console.log(`Searching ${query}`)
                Http.getJSON(`https://yts.mx/api/v2/list_movies.json?query_term=${query}`).then(
                    (response) => {
                        this.movies = response.data.movies;
                        // this.loading = false;
                        console.log("Done...");
                    },
                    e => {
                        console.log(e);
                    }
                )
            },
            filterMovies(genre) {
                console.log(`Filtering ${genre}`)
                Http.getJSON(`https://yts.mx/api/v2/list_movies.json?genre=${genre}`).then(
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
    
</style>