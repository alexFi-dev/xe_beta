import { useEffect, useState } from 'react'
import { Container, Typography, Button } from '@mui/material'
import { useTelegram } from './hooks/useTelegram'
import SuperSelect from './components/SuperSelect'

function App() {
  
  const {tg, onToggleButton} = useTelegram()

  useEffect( () => {
    tg.ready()
  }, [])

  const boxStyles = {
    background: "#fdfdfd",
    margin: "2rem 0",
    textAlign: "center",
    color: "#222",
    padding: "2rem",
    borderRadius: 2,
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  }

  return (
    <Container maxWidth="xs" sx={boxStyles}>
      <Typography variant="h6" component="h2" gutterBottom>EX beta v.0.1</Typography>
      <Typography variant='h5' sx={{ marginTop: "5px", marginBottom: "20px"}}>welcome, {tg.user?.username} </Typography>   
      <SuperSelect />
      <Button sx={{ marginTop: "30px"}} onClick={onToggleButton}>ПОЕХАЛИ!</Button>
    </Container>
  )
}

export default App
