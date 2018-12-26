<template>
    <div id="app" class="col-12">
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <header class="masthead mb-auto">
                <div class="inner">
                    <h3 class="masthead-brand">The Cave</h3>
                    <nav class="nav nav-masthead justify-content-center">
                        <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                        <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
                        <router-link :to="{ name: 'Menu' }" class="nav-link">Menu</router-link>
                        <router-link :to="{ name: 'Route' }" class="nav-link">Route</router-link>
                    </nav>
                </div>
            </header>

            <router-view></router-view>

            <footer class="mastfoot mt-auto">
                <div class="inner">
                    <p>
                        <a href="https://www.facebook.com/pg/RockClubtheCave" target="_blank" class="p-1"><v-icon name="brands/facebook" scale="2" /></a>
                        <a href="https://www.youtube.com/channel/UC3zCPUldf2NxF5-OhlWxjyA" target="_blank" class="p-1"><v-icon name="brands/youtube" scale="2" /></a>
                    </p>
                    <p>© 2019 Rock Club The Cave, Amsterdam</p>
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
