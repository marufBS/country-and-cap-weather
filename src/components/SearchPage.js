import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
    const [searchText, setSearchText] = useState('')

    const navigate = useNavigate();
    const GetCountryData = () => {

    }
    return (
        <Box
            sx={{ width: '90%', mx: 'auto', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            noValidate
            autoComplete="off"
        >
            <Box sx={{ width: '350px', boxShadow: 2, p: 3 }}>
                <TextField sx={{ width: '100%' }}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    id="outlined-basic"
                    label="Enter Country"
                    variant="outlined" />
                <Button onClick={() => {
                    GetCountryData()
                    navigate(`country/${searchText}`)

                }} disabled={searchText ? false : true} sx={{ display: 'block', width: '100%', mt: '10px' }} variant='outlined'>Submit</Button>
            </Box>
        </Box>
    );
};

export default SearchPage;