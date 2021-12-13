<script>
  import Chart from "svelte-frappe-charts";
  import { months, getAverageWeightPerMonth } from "../date-helper";
  import { WeightStore } from "../store";

  let data;
  let weightValue;
  WeightStore.subscribe((val) => {
    weightValue = getAverageWeightPerMonth(val);
    data = {
      labels: months,
      datasets: [
        {
          chartType: "bar",
          values: weightValue,
        },
      ],
    };
  });
</script>

<Chart {data} type="line" />
