<script>
  let count1 = 0;
  let count2 = 0;
  $: string1 = `You have clicked ${count1} times`;
  $: string2 = `You have clicked ${count2} times`;

  function setCount2(x) {
    count2 = x;
  }

  $: setCount2(count1);
  $: string = `Count2 is ${count2}`;

  function increment1() {
    count1++;
  }
</script>

<button on:click={increment1}>Clicks! {count1}</button>

<h3>{string}</h3>


<!-- 
<h3>{string1}</h3>
<h3>{string2}</h3> -->

<!-- <h3>You have clicked {count} times</h3> -->

<style>
  button {
    padding: 15px 20px;
  }
</style>