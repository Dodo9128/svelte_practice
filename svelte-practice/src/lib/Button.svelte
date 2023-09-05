<script>
    // export let title = 'My Button';
</script>

<button><slot>FALLBACK</slot></button>

<style lang="scss">
    button{
        border: none;
        background-color: #ff3e00;
        color: #ffffff;
        padding: 15px 20px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            // background-color: $whitecolor;
            background-color: $redcolor;
        }
    }
</style>