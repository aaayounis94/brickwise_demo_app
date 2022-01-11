<template>
  <h1>Your portfolio</h1>
  <div class="portfolio">
    <div class="legend">
      <div class="subLegend">
        <p>Invested</p>
        <h1>{{ balance }}$</h1>
      </div>
      <div class="subLegend">
        <p>Profit</p>
        <div class="gain">
          <h1>{{ bars[bars.length - 1].val - balance }}$</h1>
          <p>{{ ((bars[bars.length - 1].val - balance) / balance) * 100 }}%</p>
        </div>
      </div>
    </div>
    <div class="chart">
      <div v-for="bar in bars" :key="bar.val" class="bar">
        <p class="val">{{ bar.val }}</p>
        <div class="line" :style="{ height: bar.height + 'px' }"></div>
        <div class="divider"></div>
        <p class="date">{{ bar.date }} 2021</p>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Portfolio",
  data() {
    return {
      balance: 2500,
      bars: [
        {
          date: "Jan",
          val: 900,
        },
        {
          date: "Feb",
          val: 1000,
        },
        {
          date: "Mar",
          val: 500,
        },
        {
          date: "Apr",
          val: 200,
        },
        {
          date: "May",
          val: 1500,
        },
        {
          date: "Jun",
          val: 1600,
        },
        {
          date: "Jul",
          val: 1700,
        },
        {
          date: "Aug",
          val: 950,
        },
        {
          date: "Sep",
          val: 2000,
        },
        {
          date: "Oct",
          val: 2500,
        },
        {
          date: "Nov",
          val: 1300,
        },
        {
          date: "Dec",
          val: 2950,
        },
      ],
    };
  },
  created() {
    this.heightCompute();
  },
  methods: {
    heightCompute() {
      this.bars = this.bars.map((item) => {
        return {
          date: item.date,
          val: item.val,
          height: (item.val / this.max) * 200,
        };
      });
      console.log(this.bars);
      return this.bars;
    },
  },
  computed: {
    max() {
      const maximum = Math.max.apply(
        Math,
        this.bars.map(function (o) {
          return o.val;
        })
      );
      console.log(maximum);
      return maximum;
    },
  },
};
</script>
<style scoped>
.portfolio {
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.small {
  font-size: 16px;
}
.line {
  background-color: lightcoral;
  width: 8px;
  min-height: 10px;
  transition: height 2s ease-in-out;
}
.bar {
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-items: center;
}
.date {
  padding-left: 16px;
  color: #757575;
  font-size: 14px;
}
.chart {
  margin-bottom: 24px;
  margin-top: 16px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  text-align: center;
}
.divider {
  height: 2px;
  width: 100%;
  background-color: #ccc;
}
.legend {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  row-gap: 24px;
}
.subLegend {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.gain {
  color: green;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
