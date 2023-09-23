import { Box} from "@mui/material";
import Header from "../../components/Header";

import React from 'react'
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
        <Header title="Line CHART" subtitle="Simple Line chart" />
        <Box height="75vh">
            <LineChart />
        </Box>
    </Box>
  )
}

export default Line