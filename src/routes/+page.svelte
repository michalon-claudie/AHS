<script>
    import Navbar from "$lib/Navbar.svelte"
    import Footer from "$lib/Footer.svelte"
</script>

<style>
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';
  </style>

<div class="bg-black">
    <Navbar/>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <Footer/>
</div>
