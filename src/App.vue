<template>
    <div id="app" class="col-12">
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <header class="masthead mb-auto">
                <div class="inner">
                    <h3 class="masthead-brand">The Cave</h3>
                    <nav class="nav nav-masthead justify-content-center">
                        <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                        <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
                        <router-link :to="{ name: 'Route' }" class="nav-link">Route</router-link>
                    </nav>
                </div>
            </header>

            <router-view></router-view>

            <footer class="mastfoot mt-auto">
                <div class="inner">
                    <p>The Cave (c) 2019</p>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>

</style>
