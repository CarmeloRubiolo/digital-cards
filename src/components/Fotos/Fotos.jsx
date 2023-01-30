import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./Fotos.css"



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    id: 1,
    imgPath:'../../../imagenes/salvavidas.jpg'  },
  {
    id: 2,
    imgPath:'../../../imagenes/bebe2.jpg'  },
  {
    id: 3,
    imgPath:'../../../imagenes/bebe.jpg'  },
];

function Fotos() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <>
    <h2 className='tittle-fotos'>Fotos</h2>
    <Box>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 2,
          bgcolor: 'background.default',
        }}
        >
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        >
        {images.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
              className="img-fluid"
              component="img"
              sx={{
                height: 300,
                display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                />
                ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
          variant="outlined"
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          >
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
                )}
          </Button>
        }
        backButton={
          <Button variant="outlined" size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
                )}
            Voler
          </Button>
        }
        />
    </Box>
    </>
  );
}

export default Fotos;