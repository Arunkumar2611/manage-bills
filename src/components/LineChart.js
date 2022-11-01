import React, {useEffect} from 'react';
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import Container from '@mui/material/Container';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';
  
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );


const LineChart = (props) => {
    const { loading, items, error } = props;
    useEffect(() => {
        const { dispatch } = props;
        dispatch(fetchData());
    }, []);
    console.log(items);
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Amount",
            data: items.map((row) => row.amount),
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          }
        ]
      };
    return (
        <Container maxWidth="lg">
            <Line data={data} />
        </Container>
    );
}


const mapStateToProps = (state) => {
    const { bills } = state;
    return {
      loading: bills.loading,
      items: bills.data,
      error: bills.error,
    };
  };
  
  export default connect(mapStateToProps)(LineChart);