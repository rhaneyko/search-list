import { ThemeProvider } from 'styled-components';

import theme from './styles/themes/theme';

import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';

 const App = () => {
  return (
    <ThemeProvider theme={theme}>
       <HomePage/>
       <GlobalStyles/>
    </ThemeProvider>
    );
}
export default App;
