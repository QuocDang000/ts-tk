import Box from '@material-ui/core/Box';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import LogoutButton from 'features/auth/pages/LogoutBtn';
import * as React from 'react';
import { Header } from 'components/Common';
import { SideBar } from 'components/Common/SideBar';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from 'features/dashboard';
import { StudentFeature } from 'features/student';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '200px 1fr',
    gridTemplateAreas: `'header header' 'sidebar main'`,

    minHeight: '100vh'
  },

  header:{
    gridArea: 'header',
    borderBottom: `1px solid ${theme.palette.divider}`

  },

  sidebar:{
    gridArea: 'sidebar',
    borderRight: `1px solid ${theme.palette.divider}`

  },

  main: {
    gridArea: 'main',

  }
}))

export function Admin () {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>

      <Box className={classes.sidebar}>
        <SideBar />
      </Box>

      <Box className={classes.main}>
        <Switch>
          <Route path='/admin/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/admin/student'>
            <StudentFeature />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
