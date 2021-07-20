<template>
    <Label class="pill active" text="ACTION (3)" textWrap="true" />
</template>
<script>
    export default {
        name: 'Pill'
    }
</script>
<style scoped lang="scss">
    Label.pill {
        width: 100;
        height: 25;
        text-align: center;
        padding: 3 15;
        background-color: #FFC700;
        border-radius: 50;
        font-size: 14;
        font-family: 'Poppins-Regular';
        color: #111111;
    }
</style>