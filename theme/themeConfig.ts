import { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#22c55e', // green-500
    colorSuccess: '#22c55e',
    colorInfo: '#22c55e',
    borderRadius: 8,
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  components: {
    Button: {
      primaryColor: '#ffffff',
      borderRadius: 8,
    },
    Card: {
      borderRadius: 16,
    },
    Menu: {
      itemSelectedBg: '#dcfce7', // green-100
      itemHoverBg: '#f0fdf4', // green-50
    },
  },
};

export default theme;

