<script>
    let name = 'Svelte'
    let src = 'https://www.rainforest-alliance.org/wp-content/uploads/2021/06/three-toed-sloth-teaser-1-400x400.jpg.webp'
    let string = 'Some <strong>string</strong> with html.'
</script>

<img {src} alt="Some text {name}"/>
<h1>Hello {name.toUpperCase()}!</h1>
<p>{@html string}</p>

<style>
  h1 {
    color: red;
  }
</style>