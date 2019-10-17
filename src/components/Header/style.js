import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  imgLogo: {
    width: 64,
    height: 30
  },
  header: {
    background: '#fff',
    minWidth: 1032
  },
  headerInner: {
    width: 1000,
    display: 'flex',
    alignItems: 'center',
    height: 52,
    margin: '0 auto',
    padding: '0 16'
  },
  tabs: {
    display: 'flex',
    '& li': {
      marginLeft: 10
    }
  }
}));

export default useStyles