import { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#DC143C', // McDonald's red
    colorSuccess: '#FFC72C', // McDonald's yellow
    colorInfo: '#DC143C',
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
      itemSelectedBg: '#FFC72C', // McDonald's yellow
      itemHoverBg: 'rgba(255, 199, 44, 0.2)', // yellow with transparency
      itemSelectedColor: '#FFFFFF',
      itemHoverColor: '#FFC72C',
      itemColor: 'rgba(255, 255, 255, 0.85)',
      itemActiveBg: '#FFC72C',
      subMenuItemBg: 'transparent',
    },
  },
};

export default theme;

