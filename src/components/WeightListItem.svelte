<script>
    export let weightByDate
    const {weight, date} = weightByDate
</script>

<div>
    <p>
        {weight}Kg
    </p>
    <time>
        {date}
    </time>
</div>

<style>
    div{
        display: flex;
        justify-content: space-between;
        background-color: #F0EEFA;
        color: #8C69D0;
        margin: 1.25em ;
        padding: 0 1em;
        border-radius: 7px;
        align-items: center;
    }
    p{
        font-weight: 600;
    }
</style>