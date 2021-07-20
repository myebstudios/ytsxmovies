<template>
    <Page actionBarHidden="true">

        <GridLayout rows="2*, auto" columns="*">
            <Frame ~mainContent id="mainContent" ref="mainContent" class="container" row="0">
                <Page actionBarHidden="true">
                    <!-- <Home /> -->
                    <search />
                    <!-- <Discover /> -->
                </Page>
            </Frame>
            <!-- <Button row="0" height="50" text="do something" @tap="init" /> -->
            <NavigationBar row="1" />
        </GridLayout>

    </Page>
</template>

<script>
    import Home from './Home.vue'
    import Discover from './Discover.vue'
    import Search from './Search.vue'
    import NavigationBar from '~/components/NavigationBar.vue'
    // import { Frame} from '@nativescript/core'

    export default {
        name: 'Index',
        components: {
            Home,
            Discover,
            Search,
            NavigationBar
        },
        methods: {
            init() {
                // let mainFrame = Frame.topmost()
                // let contentFrame = Frame.getFrameById("mainContent")

                this.$navigateTo(Discover)
            }
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
