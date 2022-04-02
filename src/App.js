import logo from './logo.svg';
import './App.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import CountryInfo from './components/CountryInfo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SearchPage />} />
          <Route path="country/:name" element={<CountryInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
