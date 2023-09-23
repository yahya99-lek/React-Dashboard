import { Box} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme"; 
import { useTheme } from '@mui/material';
import React from 'react'
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Header title="Geography CHART" subtitle="Geography chart" />
        <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
            <GeographyChart/>
        </Box> 
    </Box>
  )
}

export default Geography