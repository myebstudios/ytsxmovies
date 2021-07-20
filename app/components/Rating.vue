<template>
    <FlexboxLayout>
        <Label :text="rating" textWrap="true" />
        <StackLayout orientation="horizontal">
            <Image class="star" :src="rating == 0 ? '~/images/icons/star-empty.png' : rating <= 5.9 ? '~/images/icons/star-half.png' : '~/images/icons/star-full.png'" />
        </StackLayout>
    </FlexboxLayout>
</template>
<script>
    export default {
        name: 'Rating',
        props: {
            rating: {
                type: Number,
                default: 0
            }
        }
    }
</script>
<style scoped lang="scss">
    Label {
        font-size: 20;
        font-family: 'Pappins-Medium';
        color: white;
        margin-right: 10;
    }

    Image.star {
        width: 20;
        margin-right: 2;
    }
</style>