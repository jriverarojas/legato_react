import * as React from 'react';

import {Grid} from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
    <Grid container>
      <Grid item xs={12} sm={12} md={7} lg={5} xl={4}>
        <img alt="home" src="/static/images/home/home.jpeg" />
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={7} xl={8}>
        <Outlet/>
      </Grid>
    </Grid>
    )
  }
