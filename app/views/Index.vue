<template>
    <Page actionBarHidden="true">

        <GridLayout rows="2*, auto" columns="*">
            <Frame id="mainframe" class="container" row="0">
                <Page actionBarHidden="true">
                    <ScrollView>
                        <!-- <search /> -->
                        <Home />
                    </ScrollView>
                </Page>
            </Frame>
            <NavigationBar row="1" />
        </GridLayout>

    </Page>
</template>

<script>
    import Home from '~/views/Home.vue'
    import Search from '~/views/Search.vue'
    import NavigationBar from '~/components/NavigationBar.vue'

    export default {
        components: {
            Home,
            Search,
            NavigationBar
        }
    }
</script>

<style scoped lang="scss">
    @import '~/app';

    .container {
        background: #111111;

        Label {
            font-size: 50;
            color: white;
        }
    }
</style>
