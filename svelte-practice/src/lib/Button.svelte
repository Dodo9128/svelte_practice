<script>
    // export let title = 'My Button';
</script>

<button><slot>FALLBACK</slot></button>

<style lang="scss">
    button{
        border: none;
        background-color: $redcolor;
        color: #ffffff;
        padding: 15px 20px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: $whitecolor;
        }
    }
</style>