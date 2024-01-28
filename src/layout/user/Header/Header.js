
import styled from '@emotion/styled';
import { Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import { Setting } from '@/components/icons/Icons';

const CustomTextField = styled(TextField)({
    // Default styles
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.6)',
        },
    },
    '& .MuiInputLabel-root': {
        '&.Mui-focused': {
            color: 'rgba(0, 0, 0, 0.6)',
        },
    },
    '&.textWhite': {
        color: '#ffffff',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ffffff', // Border color for normal state
            },
            '&:hover fieldset': {
                borderColor: '#ffffff', // Border color on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ffffff', // Border color on focus
            },
        },
        '& .MuiInputLabel-root': {
            color: '#ffffff', // Label color
        },
        '& .MuiInputBase-input': {
            color: '#ffffff', // Input text color
        }
    }
});

const Header = () => {

    return (
        <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={12} sm={6}>
                <CustomTextField
                    label="Tìm kiếm "
                    variant="outlined"
                    fullWidth
                    className='textWhite'
                />
            </Grid>
            <Grid item xs={12} sm={3} >
                <Stack spacing={2} direction="row">
                    <Button className='whiteText' variant="outlined" >Mới phát hành</Button>
                    <Button className='whiteText' variant="outlined" >Thịnh hành</Button>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Setting />

            </Grid>
        </Grid>
    );
};

export default Header;
