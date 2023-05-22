<template>
    <div>
        <nav-header/>
        <main>
            <slot name="content"></slot>
        </main>
        <nav-footer/>
    </div>
</template>
<script>
    import header from "../nav-footer/header.vue";
    // import footer from "../nav-footer/footer.vue";

    export default {
        props: ['showfooter'],
        components: {
            "nav-header": header,
            // "nav-footer": footer,
        },
    };

</script>