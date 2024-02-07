import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/ru';
import 'antd/dist/antd.min.css';
import { ThemeProvider } from 'styled-components';
import ru_RU from 'antd/es/locale/ru_RU';

import GlobalStyles from '@/styles/global';
import { colors, theme } from '@/utils/theme';
import '@/styles/ant-redefine.css';
import { store } from './store/store';
import App from './App';
moment.locale('ru');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={{ ...theme, colors }}>
    <ConfigProvider locale={ru_RU}>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </ConfigProvider>
  </ThemeProvider>
);
