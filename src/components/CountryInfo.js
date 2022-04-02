import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCapitalWeather } from '../api/capitalWeather';
import { getCountryData } from '../api/country';

const CountryInfo = () => {
    const [countryData, setCountryData] = useState([])
    const [countryCapital, setCountryCapital] = useState("")
    const [capitalWeatherData, setCapitalWeatherData] = useState({})
    const { name } = useParams()
    useEffect(() => {
        getCountryData(name)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCountryData(data[0]);
                    setCountryCapital(data[0]?.capital[0])
                }
            })
    }, [])

    const capitalWeather = (countryCapital) => {
        getCapitalWeather(countryCapital)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCapitalWeatherData(data)
                }
            })
    }
    return (
        <Box sx={{ width: '650px', mx: 'auto', mt: 4 }}>
            <Grid container spacing={2} sx={{ boxShadow: 3, p: 2 }}>
                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center', flex: 'row' }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <Typography variant='h4'>Capital : {countryCapital}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h4'>Population : {countryData?.population}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', flex: 'row' }}>
                            <Typography variant='h4'>Lat and Lng :</Typography>
                            {
                                countryData?.latlng?.map((data, index) => (
                                    <Typography key={index} variant='h4' sx={{ ml: 2 }}>{data}</Typography>
                                ))
                            }
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={countryData?.flags?.png}
                        alt="Paella dish"
                    />
                </Grid>
            </Grid>
            <Button sx={{ width: '180px', mx: 'auto', display: 'block', my: 5 }} onClick={() => {
                capitalWeather(countryCapital);
            }} variant='contained'>Capital Weather</Button>
            <Box sx={{ width: '400px', mx: 'auto' }}>
                {
                    capitalWeatherData.request &&
                    <Grid container spacing={2} sx={{ boxShadow: 1, p: 2 }}>
                        <Grid item xs={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant='h5'>Temparature : {capitalWeatherData?.current?.temperature}°</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='h5'>Population : {capitalWeatherData?.current?.wind_speed}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='h5'>Precip : {capitalWeatherData?.current?.precip}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                height="50"
                                image={capitalWeatherData?.current?.weather_icons[0]}
                                alt="Paella dish"
                            />
                        </Grid>
                    </Grid>
                }
            </Box>
        </Box>
    );
};

export default CountryInfo;