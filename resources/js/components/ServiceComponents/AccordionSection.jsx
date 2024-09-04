import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function AccordionSection() {

  const { slug } = useParams();
  const [expanded, setExpanded] = React.useState(false);
  const [faq, setFaq] = React.useState([]);

  React.useEffect(() => {
    axios.get(`/api/faq/${slug}`).then(res => {
        setFaq(res.data.faqs);
    })
},[slug]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <>
    {faq && faq.map((item) => (
      <>
      <Accordion expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${item.id}bh-content`}
          id={`panel${item.id}bh-header`}
        >
          <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600 }}>
            { item.question }
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-justify'>
            { item.answer }
          </Typography>
        </AccordionDetails>
      </Accordion>
      </>
    ))}
    </>
  )
}
