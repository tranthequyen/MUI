
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./routes";
import { DefaultUser } from "./layout";
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
function App() {
  return (
    <ThemeProvider theme={theme}>

      <Router>
        <div>
          <Routes>
            {publicRouter.map((route, index) => {
              const Layout = route.layout || DefaultUser
              const Page = route.component
              return <Route key={index} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            })}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
