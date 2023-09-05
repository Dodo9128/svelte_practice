<script>
    export let size = 'small';
    export let shadow = false;
    export let bgColor = 'inherit';
    export let textColor = 'inherit';
    // export let bgColor = undefined;
    // export let textColor = undefined;
</script>

<button
    style:--buttonBgColor={bgColor}
    style:--buttonTextColor={textColor}
    class:size-lg={size === 'large'}
    class:size-sm={size === 'small'}
    class:shadow
>
    <slot>FALLBACK</slot>
</button>

<style lang="scss">
    button{
        border: none;
        background-color: var(--buttonBgColor);
        color:  var(--buttonTextColor);
        padding: 15px 20px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        &.size-sm {
            padding: 15px 20px;
        }
        &.size-lg {
            padding: 20px 20px;
            font-size: 20px;
        }
        &.shadow {
            box-shadow: 0 0 10px rgba(1, 1, 1, 0.3);
        }
        &:hover {
            // background-image: $hovercolor
            background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
        }
        &:active {
            // background-image: $activecolor;
            background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
        }
    }
</style>