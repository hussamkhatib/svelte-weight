<script>
    import Chart from 'svelte-frappe-charts';
    import {months,getAverageWeightPerMonth} from "../date-helper"
    import { WeightStore } from "../store"
    
    let x = getAverageWeightPerMonth($WeightStore)

    let data = {
        labels: months,
        datasets: [
        {
            chartType: "bar",
          values: x
        }
      ],
    };
  </script>
  
    <Chart data={data} type="line" />
