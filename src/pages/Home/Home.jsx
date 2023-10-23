import { Container, Grid } from '@mui/material';
import React from 'react';
import Image32 from '../../img/image32.png';

function Home() {
  return (
    <div>
      <Container maxWidth='lx' sx={{mt:10,mb:10}}>
        <Grid container spacing={2}> 
            <Grid xs={12} sm={6} sx={{borderRadius: '20px',background: '#FFC567',height: '447px',width:'100%',display:'flex',justifyContent:'center',alignItems: "center"}}>
              <img src={Image32} alt="" width={400} /> 
            </Grid>

            <Grid xs={12} sm={6} style={{paddingLeft:'20px',display:'flex', flexDirection: 'column',justifyContent: 'space-between'}}>   
              <p style = {{width: '100%',paddingTop:"20px"}}>Welcome to Medico Healthcare</p>
              <h1 style = {{width: '100%',fontSize:'70px'}}>Your Journey to Better Health Starts Here</h1>
              <Grid style = {{width: '100%',display:'flex',justifyContent:'center',alignItems: "center"}}>
                <button style={{height:'30px',padding:'0 20px',borderRadius: '10px',background: '#00A0AA',color:'white'}}>Discover More</button>
              </Grid>
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home