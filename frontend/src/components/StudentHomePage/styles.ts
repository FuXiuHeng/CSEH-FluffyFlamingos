import { createStyles } from '@material-ui/core/styles';

export const styles = (theme) => createStyles({
    root: {
        display: 'flex'
    },
    mainPanel: {
        width: '100%',
        backgroundColor: 'blue'
    },
    sidePanel: {
        width: 500,
        backgroundColor: 'red'
    }
});