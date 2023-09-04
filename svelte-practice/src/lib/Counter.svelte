<script>
  export let initialCount = 0;
  export let maxCount = undefined;

  /**
   * $$props 와 $$restProps는 필요할 때만 사용해야 한다
   * -> 컴파일러 성능 이슈를 일으킬 수 있음
   * 
   * $$props: 현재 컴포넌트에서 받은, 사용하는 props들
   * $$restProps: 현재 컴포넌트에서 받지 않았거나, 받았지만 컴포넌트에서 사용하지 않는 props들
  */
  console.log($$props, $$restProps)

  let count = initialCount;

  function increment() {
    if(count === maxCount) return;
    count++;
  }
</script>

<button on:click={increment}>Clicks! {count}</button>

<style>
  button {
    padding: 15px 20px;
  }
</style>