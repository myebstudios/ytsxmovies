<template>
    <FlexboxLayout class="navigation-bar">
        <FlexboxLayout class="nav-btn">
            <Image height="20" src="~/images/icons/home-icon-active.png" />
        </FlexboxLayout>

        <FlexboxLayout class="nav-btn">
            <Image height="20" src="~/images/icons/search-icon.png" />
        </FlexboxLayout>

        <FlexboxLayout class="nav-btn">
            <Image height="20" src="~/images/icons/bookmark-icon.png" />
        </FlexboxLayout>
    </FlexboxLayout>
</template>
<script>
    export default {
        name: 'NavigationBar'
    }
</script>
<style scoped lang="scss">
    FlexboxLayout.navigation-bar {
        background: #0b0b0b;
        height: 60;
        align-items: center;
        justify-content: center;
    }

    FlexboxLayout.nav-btn {
        width: 100;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
</style>