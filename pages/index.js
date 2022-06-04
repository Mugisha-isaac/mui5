import { Button, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
  return (
   <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" startIcon={<DeleteIcon />} color='success' size='small'>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant='h4' component='p'>
          this is typography 
      </Typography>
   </div>
  )
}
