import {Box, useTheme, Typography} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from "@mui/material/AccordionDetails";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page "/>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae corporis, porro quas at dignissimos quaerat animi soluta perferendis consequuntur. Facere illum modi ducimus vel reiciendis commodi consectetur nam quod! In.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae corporis, porro quas at dignissimos quaerat animi soluta perferendis consequuntur. Facere illum modi ducimus vel reiciendis commodi consectetur nam quod! In.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your Favourite Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae corporis, porro quas at dignissimos quaerat animi soluta perferendis consequuntur. Facere illum modi ducimus vel reiciendis commodi consectetur nam quod! In.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Random question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae corporis, porro quas at dignissimos quaerat animi soluta perferendis consequuntur. Facere illum modi ducimus vel reiciendis commodi consectetur nam quod! In.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Test question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae corporis, porro quas at dignissimos quaerat animi soluta perferendis consequuntur. Facere illum modi ducimus vel reiciendis commodi consectetur nam quod! In.
                </Typography>
            </AccordionDetails>
        </Accordion>

        
    </Box>
  )
}

export default FAQ
