import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TimelineIcon from '@material-ui/icons/Timeline';
import Button from '@material-ui/core/Button'
import ReactFileReader from 'react-file-reader'
import { AuthContext } from '../Login/AuthContext';
import { ACTIONS } from '../../actions';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#25d56f"
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function Predict() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [fileData, setFileData] = React.useState();
    const { state, dispatch } = useContext(AuthContext);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Сагсан бөмбөгийн өгөгдөл шинжилгээ болон таамаглал
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List><div>
                    <Link style={{ color: "black" }} href="/home" underline="none">

                        <ListItem button>
                            <ListItemIcon>
                                <EqualizerIcon htmlColor="#25d56f" />
                            </ListItemIcon>
                            <ListItemText primary="Дата анализ" />
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon>
                            <TimelineIcon htmlColor="#25d56f" />
                        </ListItemIcon>
                        <ListItemText color="black" primary="Таамаглал" />
                    </ListItem>
                </div></List>

            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper style={{
                                display: 'flex',
                                justifyContent: "space-between",
                                flexDirection: 'column'
                            }} className="paper">
                                <img width={730} height={420}
                                    src="http://www.bleathem.ca/patternfly-org/pattern-library/data-visualization/line-chart/img/line-chart.png"></img>
                                <div width={50} height={50}>Result</div>
                            </Paper>

                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className="paper" >
                                <div className="file-info">
                                    <span className="file-name">Filename: {fileData?.name}</span>
                                </div>
                                <Button onClick={() => {
                                    dispatch({ type: ACTIONS.BLOCK })
                                }} className="upload-file-btn">
                                    Predict
                                    </Button>
                                <ReactFileReader fileTypes={[".csv", ".xlsx"]} base64={true} handleFiles={(file) => {
                                    setFileData(file.fileList[0])
                                }}>
                                    <Button className="upload-file-btn">
                                        File upload section
                                    </Button>
                                </ReactFileReader >



                            </Paper>
                        </Grid>
                    </Grid>

                </Container>
            </main>
        </div>
    );
}