import { Container, Grid } from '@mui/material';
import React from 'react';

function Topheader() {
    return (
        <Container maxWidth="lx" sx={{background: '#00A0AA'}}>
            <Grid container sx={{color:'white',fontWeight:'bold'}}>
                <Grid xs={4} sx={{display: 'flex',justifyContent: 'flex-start', height:25,alignItems: 'center',p:2 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" viewBox="0 0 15 21" fill="none">
                    <path d="M7.29167 0.166748C3.26042 0.166748 0 3.42717 0 7.45842C0 12.9272 7.29167 21.0001 7.29167 21.0001C7.29167 21.0001 14.5833 12.9272 14.5833 7.45842C14.5833 3.42717 11.3229 0.166748 7.29167 0.166748ZM7.29167 10.0626C6.601 10.0626 5.93862 9.78822 5.45024 9.29984C4.96187 8.81146 4.6875 8.14908 4.6875 7.45842C4.6875 6.76775 4.96187 6.10537 5.45024 5.61699C5.93862 5.12862 6.601 4.85425 7.29167 4.85425C7.98234 4.85425 8.64472 5.12862 9.13309 5.61699C9.62147 6.10537 9.89583 6.76775 9.89583 7.45842C9.89583 8.14908 9.62147 8.81146 9.13309 9.29984C8.64472 9.78822 7.98234 10.0626 7.29167 10.0626Z" fill="#F8F9FE"/>
                    </svg>
                    <p style={{paddingLeft:"6px"}}>90919 Madie run Apt. 790</p>
                </Grid>
                <Grid xs={4} sx={{display: 'flex',justifyContent: 'flex-start', height:25,alignItems: 'center',p:2 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                    <path d="M18.8021 4H4.36456C3.41532 4 2.64581 4.76951 2.64581 5.71875V16.0312C2.64581 16.9805 3.41532 17.75 4.36456 17.75H18.8021C19.7513 17.75 20.5208 16.9805 20.5208 16.0312V5.71875C20.5208 4.76951 19.7513 4 18.8021 4Z" stroke="#F8F9FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.39581 9L11.5833 13.8125L17.7708 9" stroke="#F8F9FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p style={{paddingLeft:"6px"}}>medico@health.care</p>
                </Grid>
                <Grid xs={4} sx={{display: 'flex',justifyContent: 'flex-end', height:25,alignItems: 'center',p:2 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <g clip-path="url(#clip0_801_63)">
                        <path d="M29.6687 8.91005C28.7473 7.98398 27.6498 7.24972 26.4402 6.75011C25.2306 6.25049 23.9331 5.99552 22.6235 6.00006C17.136 6.00006 12.6637 10.45 12.6637 15.91C12.6637 17.66 13.126 19.36 13.9903 20.86L12.5833 26L17.8596 24.62C19.3169 25.41 20.9551 25.83 22.6235 25.83C28.1109 25.83 32.5833 21.38 32.5833 15.92C32.5833 13.27 31.5481 10.78 29.6687 8.91005ZM22.6235 24.15C21.136 24.15 19.6787 23.75 18.4023 23L18.1008 22.82L14.9652 23.64L15.7993 20.6L15.5983 20.29C14.7719 18.977 14.3331 17.4593 14.332 15.91C14.332 11.37 18.0506 7.67005 22.6134 7.67005C24.8245 7.67005 26.9049 8.53005 28.4626 10.09C29.234 10.854 29.8453 11.7627 30.261 12.7635C30.6768 13.7642 30.8888 14.8371 30.8848 15.92C30.9049 20.46 27.1863 24.15 22.6235 24.15ZM27.1662 17.99C26.9149 17.87 25.6888 17.27 25.4677 17.18C25.2365 17.1 25.0757 17.06 24.9049 17.3C24.734 17.55 24.2616 18.11 24.1209 18.27C23.9802 18.44 23.8295 18.46 23.5782 18.33C23.327 18.21 22.5229 17.94 21.5782 17.1C20.8345 16.44 20.342 15.63 20.1913 15.38C20.0506 15.13 20.1712 15 20.3018 14.87C20.4124 14.76 20.5531 14.58 20.6737 14.44C20.7943 14.3 20.8446 14.19 20.925 14.03C21.0054 13.86 20.9652 13.72 20.9049 13.6C20.8446 13.48 20.342 12.26 20.141 11.76C19.94 11.28 19.729 11.34 19.5782 11.33H19.0958C18.925 11.33 18.6637 11.39 18.4325 11.64C18.2114 11.89 17.5682 12.49 17.5682 13.71C17.5682 14.93 18.4626 16.11 18.5833 16.27C18.7039 16.44 20.342 18.94 22.8345 20.01C23.4275 20.27 23.8898 20.42 24.2516 20.53C24.8446 20.72 25.3873 20.69 25.8194 20.63C26.3018 20.56 27.2968 20.03 27.4978 19.45C27.7089 18.87 27.7089 18.38 27.6385 18.27C27.5682 18.16 27.4174 18.11 27.1662 17.99Z" fill="#F8F9FE"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_801_63">
                        <rect width="32" height="32" fill="white" transform="translate(0.583252)"/>
                        </clipPath>
                    </defs>
                    </svg>
                    <p style={{paddingLeft:"6px"}}>Connect on Whatsapp</p>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Topheader