<template>
    <div class="header">
        <h1>CEP Terminal</h1>
    </div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="scss">
// @import '@root/src/style.scss';

.header {
    // @include header-backgroundColor;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 4rem;
    gap: 0.4rem;

    h1 {
        margin: 0;
        font-family: 'Comfortaa', sans-serif;
        // font-family: 'Quicksand', sans-serif;
    }

    .logo {
        margin-bottom: 0.6rem;
        fill: white;
        height: 2rem;
        min-width: 2rem;
    }
}

@media (max-width: 190px) {
    .header{
        height: 3rem;
    h1{
        font-size: 1.2rem;
    }    
  }
}
</style>