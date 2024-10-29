// ==================chart01=================

document.getElementById("open-popup1").addEventListener("click", function () {
  document.querySelector(".popup1").style.display = "block"; // Show popup
  initializeChart();
});

document.querySelector(".close-btn1").addEventListener("click", function () {
  document.querySelector(".popup1").style.display = "none"; // Hide popup
});

function initializeChart() {
  const ctx01 = document.getElementById("chart-01").getContext("2d");

  if (!ctx01._chartInstance) {
    ctx01._chartInstance = new Chart(ctx01, {
      type: "bar",
      data: {
        labels: [
          "amazon",
          "facebook",
          "youtube",
          "DLF",
          "megamart",
          "vishal sales",
        ],
        datasets: [
          {
            label: [""],
            data: [100, 190, 66, 93, 123, 50],
            borderWidth: 1,
            backgroundColor: [
              "#3b82f6",
              "#f97316",
              "#10b981",
              "#a78bfa",
              "#6366f1",
              "#f43f5e",
            ],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
}

// ==================chart02=================

document.getElementById("open-popup2").addEventListener("click", function () {
  document.querySelector(".popup2").style.display = "block"; // Show popup
  initializeBubbleChart();
});

document.querySelector(".close-btn2").addEventListener("click", function () {
  document.querySelector(".popup2").style.display = "none"; // Hide popup
});

function initializeBubbleChart() {
  const ctx02 = document.getElementById("chart-02").getContext("2d");

  if (!ctx02._chartInstance) {
    ctx02._chartInstance = new Chart(ctx02, {
      type: "bubble",
      data: {
        datasets: [
          {
            label: "Expenses",
            data: [
              { x: 5, y: 10, r: 15 },
              { x: 15, y: 25, r: 10 },
              { x: 25, y: 15, r: 20 },
              { x: 35, y: 30, r: 25 },
            ],
            backgroundColor: ["#6366f1", "#f43f5e", "#facc15", "#84cc16"],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "X Axis Label",
            },
          },
          y: {
            title: {
              display: true,
              text: "Y Axis Label",
            },
          },
        },
      },
    });
  }
}

// ==================chart03=================

document.getElementById("open-popup3").addEventListener("click", function () {
  document.querySelector(".popup3").style.display = "block"; // Show popup
  initializeLineChart();
});

document.querySelector(".close-btn3").addEventListener("click", function () {
  document.querySelector(".popup3").style.display = "none"; // Hide popup
});

function initializeLineChart() {
  const ctx03 = document.getElementById("chart-03").getContext("2d");

  if (!ctx03._chartInstance) {
    ctx03._chartInstance = new Chart(ctx03, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Income Over Time",
            data: [3000, 4500, 400, 5600, 4800, 6100],
            borderColor: "#6366f1", // Line color
            backgroundColor: "rgba(99, 102, 241, 0.2)",
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
            },
          },
          y: {
            title: {
              display: true,
              text: "Income ($)",
            },
          },
        },
      },
    });
  }
}
