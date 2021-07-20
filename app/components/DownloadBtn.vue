<template>
    <FlexboxLayout class="btn">
        <Label text="DOWNLOAD TORRENT" textWrap="true" />
    </FlexboxLayout>
</template>
<script>
    export default {
        name: 'DownloadBtn'
    }
</script>
<style scoped lang="scss">
    FlexboxLayout.btn {
        height: 50;
        background: #FFC700;
        border-radius: 5;
        align-items: center;
        justify-content: center;

        Label {
            font-size: 14;
            font-family: 'Poppins-Medium';
            color: #111111;
        }
    }
</style>