import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    List,
    CssBaseline,
    Drawer,
    Toolbar,
    Button,
    Container,
    ListItemIcon,
    ListItem,
    ListItemText,
    Box,
    AppBar,
    Grid,
    Paper,
    IconButton,
    Link,
    Divider,
    Badge,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TimelineIcon from '@material-ui/icons/Timeline';
import ReactFileReader from 'react-file-reader'
import { AuthContext } from '../Login/AuthContext';
import { ACTIONS } from '../../actions';
import { dashboardService } from '../../services/dashboard.service';
import Graphic from './graphic';
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
    const predict = () => {
        dispatch({ type: ACTIONS.BLOCK })
        dispatch({ type: ACTIONS.UNBLOCK })
       
    }

    const base64ToBlob = (base64Data) => {
    const byteString = atob(base64Data);
    const byteNumbers = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(byteNumbers);
  
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([byteNumbers], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  };

    
    const getTemplateUrl = () => {
        const url = `/test.xlsx`;
        const base = `UEVSSU9ELEFDVElPTl9UWVBFLFNIT1RfVFlQRSxTSE9UX1pPTkVfQkFTSUMsU0hPVF9aT05FX0FS
        RUEsU0hPVF9aT05FX1JBTkdFLFNIT1RfRElTVEFOQ0UsTE9DX1gsTE9DX1ksU0hPVF9NQURFX0ZM
        QUcsSFRNLFZUTQo=`
        const blob = base64ToBlob(base);
      
        return url;
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
                <div className="container">

                    <Box
                        sx={{
                            backgroundColor: 'background.default',
                            minHeight: '100%',
                            py: 3
                        }}
                    >
                        <Container maxWidth={false} className={classes.container}>
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    lg={8}
                                    md={12}
                                    xl={9}
                                    xs={12}
                                >
                                    <Graphic sx={{ height: '100%' }} />
                                </Grid>
                                <Grid
                                    item
                                    lg={4}
                                    md={6}
                                    xl={3}
                                    xs={12}
                                >
                                    <Paper className="paper" style={{ height: 528 }} >
                                    <Button onClick={() => {
                                            getTemplateUrl()
                                        }} className="upload-file-btn">
                                            Загвар татах
                                    </Button>
                                        <div className="file-info">
                                            <span className="file-name">Filename: {fileData?.name}</span>
                                        </div>
                                        <Button onClick={() => {
                                            predict()
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
                    </Box>
                </div>

            </main>
        </div >
    );
}