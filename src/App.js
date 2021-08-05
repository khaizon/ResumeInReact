import { Container, Grid } from '@material-ui/core';

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Portfolio from './pages/Portfolio/Portfolio'
import CustomTimeline from './components/Timeline/CustomTimeline'
import Footer from './components/Footer/Footer'
import Resume from './pages/Resume/Resume'

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3} style={{ backgroundColor: '' }}>
            <Profile/>
          </Grid>
          <Grid item xs style={{ backgroundColor: 'red' }}>
            <Header/>
            <Portfolio />
            <Resume/>
            <CustomTimeline/>
            <Footer/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
