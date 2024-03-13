<script>
    import ahs1 from '../images/ahs1.webp'
    import ahs2 from '../images/ahs2.webp'
    import ahs3 from '../images/ahs3.webp'
    let CurrentIndex = 0;
    const images=[ahs1,ahs2,ahs3]

    function nextImages(){
        CurrentIndex=(CurrentIndex+1)%images.length;
    }

    function previousImages(){
        CurrentIndex=(CurrentIndex-1 + images.length)%images.length;
    }
</script>

<section class="relative">
    {#each images as image, i}
        <img
        src={image}
        alt={`Image ${i + 1}`}
        class="{i === CurrentIndex ? 'block' : 'hidden'} 
        absolute w-full h-72 object-cover transition-opacity duration-500"
    />
    {/each}

    <button class="absolute top-1/2 transform -translate-y-1/2 left-4" on:click={previousImages}>
        Précédent
    </button>
    <button class="absolute top-1/2 transform -translate-y-1/2 right-4" on:click={nextImages}>
        Suivant
    </button>
</section>