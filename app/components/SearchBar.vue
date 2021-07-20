<template>
    <FlexboxLayout class="search-bar">
        <Image src="~/images/icons/search-icon.png" />
        <TextField returnKeyType="search" hint="Search" />
    </FlexboxLayout>
</template>

<script>
    export default {
        name: 'SeachBar'
    }
</script>

<style scoped lang="scss">
    FlexboxLayout.search-bar {
        background: #2b2b2b;
        border-radius: 10;
        height: 60;
        padding: 0 16;

        Image {
            width: 20;
            margin-right: 10;
        }

        TextField {
            flex: 1;
            border-width: 1;
            border-color: rgba(0, 0, 0, 0);
            color: white;

            font-size: 16;
            font-family: 'Poppins-Regular';
        }
    }
</style>