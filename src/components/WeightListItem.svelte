<script>
  export let weightObj;
  import { formatDate } from "../date-helper";
  const { weight, date } = weightObj;
</script>

<div>
  <p>
    {weight}Kg
  </p>
  <time>
    {formatDate(date)}
  </time>
</div>

<style>
  div {
    display: flex;
    justify-content: space-between;
    background-color: #7cd6fd;
    margin: 1.25em;
    padding: 0 1em;
    border-radius: 7px;
    align-items: center;
  }
  p {
    font-weight: 600;
  }
</style>
