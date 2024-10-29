const ctx1 = document.getElementById("chart-1");

new Chart(ctx1, {
  type: "doughnut",
  data: {
    // labels: ["amazon", "facebook", "youtube"],
    datasets: [
      {
        // label: "# of Votes",
        data: [10, 19, 4, 6.6, 12, 8],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// ==============================================

const ctx2 = document.getElementById("chart-2");

new Chart(ctx2, {
  type: "pie",
  data: {
    // labels: ["car", "bike", "cart"],
    datasets: [
      {
        // label: "# of Votes",
        data: [12, 19, 3, 7, 5, 12, 6],
        borderWidth: 5,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// ====================================================

const ctx3 = document.getElementById("chart-3");

new Chart(ctx3, {
  type: "polarArea",
  data: {
    datasets: [
      {
        data: [16, 12, 18, 12],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
