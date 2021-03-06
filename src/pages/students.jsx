import React from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import { STUDENTS_THEME } from '../constants';
import SEO from '../components/SEO';


const muiTheme = createMuiTheme(STUDENTS_THEME, 'studentsTheme');

export default () => (
  <MuiThemeProvider theme={muiTheme}>
    <Layout currentPage="students">
      <SEO
        title="Students"
        description="Get Recognition For Learning Online"
      />
      <h1> Under Construction! </h1>
    </Layout>
  </MuiThemeProvider>
);
