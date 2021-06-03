import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#7f3f97',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: 22
        },
        subtitle1: {
            fontFamily: 'Raleway',
            fontWeight: 400,
            fontSize: 18
        },
    }
});

export default theme;