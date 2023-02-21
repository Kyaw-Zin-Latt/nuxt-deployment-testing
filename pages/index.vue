
<template>

    <div class="grid grid-cols-3 gap-3">
       <div v-for="product in products" class="border border-1 border-blue-500 p-2 rounded m-1">
            <p>
                {{ product.title }}
            </p>
       </div>
    </div>
</template>

<script setup>
    const { pending, data: products } = useLazyFetch('https://fakestoreapi.com/products')
    useServerSeoMeta({
        title: 'My Amazing Site',
        ogTitle: 'My Amazing Site',
        description: 'This is my amazing site, let me tell you all about it so so.',
        ogDescription: 'This is my amazing site, let me tell you all about it.',
        ogImage: 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png',
        twitterCard: 'summary_large_image',
    })
</script>

<style lang="scss" scoped>

</style>