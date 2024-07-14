import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import moment from "moment";
import Chart from "chart.js/auto"; // Import Chart.js

const Statistic = () => {
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalCustomersBooking, setTotalCustomersBooking] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [startDate, setStartDate] = useState(
    moment().subtract(1, "week").startOf("week").format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(
    moment().subtract(1, "week").endOf("week").format("YYYY-MM-DD")
  );
  const [showCustomFilter, setShowCustomFilter] = useState(false);
  const [barChartInstance, setBarChartInstance] = useState(null);
  const barChartRef = useRef();

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  const fetchData = async () => {
    try {
      const usersResponse = await axios.get("https://tarot.somee.com/api/User");
      const bookingsResponse = await axios.get(
        "https://tarot.somee.com/api/Bookings"
      );

      const customersCount = usersResponse.data.filter(
        (user) => user.roleId === 2
      ).length;
      setTotalCustomers(customersCount);

      const filteredBookings = bookingsResponse.data.filter(
        (booking) =>
          booking.status === true &&
          moment(booking.date).isBetween(startDate, endDate, null, "[]")
      );

      const ordersCount = filteredBookings.length;
      const amountTotal = filteredBookings.reduce(
        (total, booking) => total + booking.amount,
        0
      );

      setTotalBookings(ordersCount);
      setTotalAmount(amountTotal);

      const customersWithBookings = new Set();
      filteredBookings.forEach((booking) => {
        customersWithBookings.add(booking.customerId); // Assuming tarotUserId is the correct identifier for customers
      });
      const customersWithBookingsCount = customersWithBookings.size;
      setTotalCustomersBooking(customersWithBookingsCount);

      createOrUpdateChart(filteredBookings);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createOrUpdateChart = (filteredBookings) => {
    let chartLabels = [];
    let chartDataValuesBookings = [];
    let chartDataValuesAmount = [];
    let chartDataValuesCustomers = [];
    let aggregatedData = {};

    filteredBookings.forEach((booking) => {
      const date = moment(booking.date).format("YYYY-MM-DD");
      if (aggregatedData[date]) {
        aggregatedData[date].bookings += 1;
        aggregatedData[date].amount += booking.amount;
        aggregatedData[date].customers.add(booking.tarotUserId); // Assuming tarotUserId is the correct identifier for customers
      } else {
        aggregatedData[date] = {
          bookings: 1,
          amount: booking.amount,
          customers: new Set([booking.tarotUserId]),
        };
      }
    });

    Object.keys(aggregatedData).forEach((date) => {
      chartLabels.push(date);
      chartDataValuesBookings.push(aggregatedData[date].bookings);
      chartDataValuesAmount.push(aggregatedData[date].amount);
      chartDataValuesCustomers.push(aggregatedData[date].customers.size);
    });

    if (barChartInstance) {
      barChartInstance.destroy();
    }

    const ctx = barChartRef.current.getContext("2d");

    const newChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: "Số lượng đặt lịch",
            data: chartDataValuesBookings,
            fill: false,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 0.2)",
          },
          {
            label: "Tổng doanh thu",
            data: chartDataValuesAmount,
            fill: false,
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "rgba(75, 192, 192, 0.2)",
          },
          {
            label: "Số lượng khách hàng đặt lịch",
            data: chartDataValuesCustomers,
            fill: false,
            backgroundColor: "rgb(54, 162, 235)",
            borderColor: "rgba(54, 162, 235, 0.2)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    setBarChartInstance(newChartInstance);
  };

  const toggleCustomFilter = () => {
    setShowCustomFilter(!showCustomFilter);
  };

  const handleApplyFilter = () => {
    fetchData();
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 2, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          style={{ maxWidth: "100px", color: "black", background: "white" }}
          onClick={() =>
            setStartDate(moment().subtract(1, "day").format("YYYY-MM-DD"))
          }
          sx={{ mr: 1 }}
        >
          Hôm nay
        </Button>
        <Button
          variant="contained"
          style={{ maxWidth: "100px", color: "black", background: "white" }}
          onClick={() =>
            setStartDate(
              moment().subtract(1, "week").startOf("week").format("YYYY-MM-DD")
            )
          }
          sx={{ mr: 1 }}
        >
          7 ngày
        </Button>
        <Button
          variant="contained"
          style={{ maxWidth: "100px", color: "black", background: "white" }}
          onClick={() =>
            setStartDate(
              moment()
                .subtract(1, "month")
                .startOf("month")
                .format("YYYY-MM-DD")
            )
          }
          sx={{ mr: 1 }}
        >
          30 ngày
        </Button>
        <Button
          variant="contained"
          style={{ maxWidth: "100px", color: "black", background: "white" }}
          onClick={toggleCustomFilter}
        >
          Tùy chỉnh
        </Button>
      </Stack>

      {showCustomFilter && (
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 2, justifyContent: "flex-end" }}
        >
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ maxWidth: "100px", color: "black", background: "white" }}
            onClick={handleApplyFilter}
          >
            Áp dụng
          </Button>
        </Stack>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tổng số lượng khách hàng
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "24px" }}
                >
                  {totalCustomers}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Khách hàng đã đặt lịch
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "24px" }}
                >
                  {totalCustomersBooking}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Số lượng đặt lịch
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "24px" }}
                >
                  {totalBookings}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tổng doanh thu
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "24px" }}
                >
                  {totalAmount}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "20px" }}
      >
        <Grid item xs={12} md={10} lg={8}>
          <Stack spacing={2} direction="row">
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Số lượng đặt lịch và Tổng doanh thu
                </Typography>
                <div style={{ height: "350px", width: "100%" }}>
                  <canvas
                    ref={barChartRef}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistic;
