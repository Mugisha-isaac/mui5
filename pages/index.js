import { Button, styled, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {

  const BlueButton = styled(Button)({
    backgroundColor:'skyblue', color:'#888', m:5,
       "&:hover":{
        backgroundColor:'lightblue'
      },
      "&:disabled":{
        backgroundColor:'gray',
        color:"white"
      }
  })


  return (
   <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" startIcon={<DeleteIcon />} color='success' size='small'>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <BlueButton>My button</BlueButton>
      <BlueButton>Another button</BlueButton>
      <Typography variant='h4' component='p' >
          this is typography 
      </Typography>
   </div>
  )
}
