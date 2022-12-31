import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//import Topbar from './scenes/global/Topbar';
//import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import ImportStoryList from './scenes/list/ImportHistoryList';
// import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';
import ImportProductsForm from './scenes/form/ImportProductForm';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
//import Calendar from './scenes/calendar/calendar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
        <div className='app'>
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className='content'>
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/import/create' element={<ImportProductsForm />} />
              <Route path='/import/history' element={<ImportStoryList />} />
              {/* <Route path="/contacts" element={<Contacts />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
