import { PhotoCamera } from '@mui/icons-material';
import AudioTrackIcon from '@mui/icons-material/Audiotrack';
import { Box, Button, Container, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import FileUpload from '../../components/FileUpload/FileUpload';
import FormCreateTrackInfo from '../../components/Forms/FormCreateTrackInfo';
import StepWrapper from '../../components/StepWrapper/StepWrapper';
import MainLayouts from '../../layouts/MainLayouts';

interface Props {
}

const create: FunctionComponent<Props> = () => {
    const [ activeStep, setActiveStep ] = React.useState( 0 );

    const handleNext = () => {
        setActiveStep( ( prevActiveStep ) => prevActiveStep + 1 );
    };

    const handleBack = () => {
        setActiveStep( ( prevActiveStep ) => prevActiveStep - 1 );
    };

    const steps = [ 'Информация о треке', 'Загрузите обложку', 'Загрузите трек' ];
    return (
        <MainLayouts>
            <Container maxWidth={ 'lg' }>
                <StepWrapper
                    activeStep={ activeStep }
                    steps={ steps }
                >

                    {
                        activeStep === 0 &&
                        <FormCreateTrackInfo/>
                    }
                    {
                        activeStep === 1 &&
                        <FileUpload accept={ 'image/*' } setFile={ () => ( {} ) }>
                            <PhotoCamera/>
                        </FileUpload>
                    }
                    {
                        activeStep === 2 &&
                        <FileUpload accept={ 'audio/*' } setFile={ () => ( {} ) }>
                            <AudioTrackIcon/>
                        </FileUpload>
                    }

                    { activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={ { mt: 2, mb: 1 } }>
                                All steps completed - you&apos;re finished
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>

                            <Box sx={ { display: 'flex', flexDirection: 'row', pt: 2 } }>
                                <Button
                                    color="inherit"
                                    disabled={ activeStep === 0 }
                                    onClick={ handleBack }
                                    sx={ { mr: 1 } }
                                >
                                    Back
                                </Button>
                                <Box sx={ { flex: '1 1 auto' } }/>
                                <Button onClick={ handleNext }>
                                    { activeStep === steps.length - 1 ? 'Finish' : 'Next' }
                                </Button>
                            </Box>
                        </React.Fragment>
                    ) }
                </StepWrapper>
            </Container>
        </MainLayouts>
    );
};

export default create;
