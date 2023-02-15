import React, { useEffect, useRef, useState } from "react";
import {
    AppBar,
    Box,
    Button,
    ButtonGroup,
    ClickAwayListener,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    Grow,
    IconButton,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Stack,
    Tab,
    Tabs,
    tabsClasses,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { menuIcons } from "../constants/menuIcons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { onSelectedButton } from "../../store/airbnb/botonesSlice";
import { FaFilter } from "react-icons/fa";
import { flexCenter, fullWidthFlex, justifyCenter } from '../../theme/commonStyles'

const options = [
    "Iniciar Sesion",
    "Registrate",
    "Pone tu Airbnb",
    "Ofrece una experiencia",
    "Ayuda",
];

export const NavBar2 = () => {

    const dispatch = useDispatch();
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState();

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const [value, setValue] = useState(0);

      
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleButtonClick = id => {
        dispatch(onSelectedButton(id));
    };

        const handleClickOpen1 = () => {
            setOpen1(true);
        };

        const handleClose1 = () => {
            setOpen1(false);
        };

        const handleClickOpen2 = () => {
            setOpen2(true);
        };

        const handleClose2 = () => {
            setOpen2(false);
        };

        const handleOpenClose = () => {
            setOpen2(false);
            setOpen1(true);
        };

        const handleOpenCloseStok = () => {
            setOpen2(true);
            setOpen1(false);
        };

        const handleMenuItemClick = (event, index) => {
            setSelectedIndex(index);
            setOpen(true);

            if (index === 0) {
                handleClickOpen1();
            } else if (index === 1) {
                handleClickOpen2();
            }
        };

        const handleToggle = () => {
            setOpen((prevOpen) => !prevOpen);
        };

        const handleClose = (event) => {
            if (anchorRef.current && anchorRef.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        };

        const handleClickAway = () => {
            dispatch(onSelectedButton(null));
          };


  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <AppBar position='sticky' color='default'>
        <Toolbar>
                    <Grid container justify="space-between">
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color={"#ff5a5f"} noWrap>
                                airbnb
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} container justifyContent="center">
                            <Box position="relative">
                                <Button>Alojamientos</Button>
                                <Button>Experiencias</Button>
                                <Button>Experiencias en linea</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} container justifyContent="flex-end">
                            <IconButton
                                ref={anchorRef}
                                aria-label="open drawer"
                                aria-controls={open ? "split-button-menu" : undefined}
                                aria-expanded={open ? "true" : undefined}
                                aria-haspopup="menu"
                                onClick={handleToggle}
                            >
                                <MenuIcon />
                                <AccountCircleIcon />
                            </IconButton>
                            <Popper
                                sx={{
                                    zIndex: 1,
                                }}
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === "bottom" ? "center top" : "center bottom",
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList id="split-button-menu" autoFocusItem>
                                                    <Stack>
                                                        {React.Children.toArray(
                                                            options.map((option, index) => (
                                                                <>
                                                                    <MenuItem
                                                                        key={option}
                                                                        selected={index === selectedIndex}
                                                                        onClick={(event) =>
                                                                            handleMenuItemClick(event, index)
                                                                        }
                                                                    >
                                                                        {option}
                                                                    </MenuItem>
                                                                    {index === 1 && <Divider />}
                                                                    {index === 0 && (
                                                                        <Dialog
                                                                            open={open1}
                                                                            onClose={handleClose1}
                                                                            fullWidth="400px"
                                                                        >
                                                                            <DialogTitle>Crear Cuenta</DialogTitle>
                                                                            <Divider />
                                                                            <DialogContent>
                                                                                <Grid container spacing={2}>
                                                                                    <Grid item xs={6}>
                                                                                        <TextField
                                                                                            autoFocus
                                                                                            margin="dense"
                                                                                            id="name"
                                                                                            label="Name"
                                                                                            type="name"
                                                                                            fullWidth
                                                                                            variant="standard"
                                                                                        />
                                                                                    </Grid>
                                                                                    <Grid item xs={6}>
                                                                                        <TextField
                                                                                            autoFocus
                                                                                            margin="dense"
                                                                                            id="lastName"
                                                                                            label="Last Name"
                                                                                            type="lastName"
                                                                                            fullWidth
                                                                                            variant="standard"
                                                                                        />
                                                                                    </Grid>
                                                                                </Grid>
                                                                                <TextField
                                                                                    autoFocus
                                                                                    margin="dense"
                                                                                    id="name"
                                                                                    label="Email Address"
                                                                                    type="email"
                                                                                    fullWidth
                                                                                    variant="standard"
                                                                                />
                                                                                <TextField
                                                                                    autoFocus
                                                                                    margin="dense"
                                                                                    id="phone"
                                                                                    label="Phone"
                                                                                    type="phone"
                                                                                    fullWidth
                                                                                    variant="standard"
                                                                                />
                                                                                <Grid container spacing={2}>
                                                                                    <Grid item xs={6}>
                                                                                        <TextField
                                                                                            autoFocus
                                                                                            margin="dense"
                                                                                            id="password"
                                                                                            label="Password"
                                                                                            type="password"
                                                                                            fullWidth
                                                                                            variant="standard"
                                                                                        />
                                                                                    </Grid>
                                                                                    <Grid item xs={6}>
                                                                                        <TextField
                                                                                            autoFocus
                                                                                            margin="dense"
                                                                                            id="passwor"
                                                                                            label="Repeat Password"
                                                                                            type="password"
                                                                                            fullWidth
                                                                                            variant="standard"
                                                                                        />
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </DialogContent>
                                                                            <Grid container justifyContent={"right"}>
                                                                                <Typography fontSize={"small"}>
                                                                                    Ya tienes cuenta?{" "}
                                                                                    <Button
                                                                                        color="secondary"
                                                                                        variant="text"
                                                                                        onClick={handleOpenCloseStok}
                                                                                    >
                                                                                        Iniciar Sesion
                                                                                    </Button>
                                                                                </Typography>
                                                                            </Grid>
                                                                            <Divider />
                                                                            <DialogActions>
                                                                                <Button
                                                                                    color="secondary"
                                                                                    onClick={handleClose1}>
                                                                                    Crear Cuenta
                                                                                </Button>
                                                                            </DialogActions>
                                                                        </Dialog>
                                                                    )}
                                                                    {index === 1 && (
                                                                        <Dialog
                                                                            open={open2}
                                                                            onClose={handleClose2}
                                                                            fullWidth="400px"
                                                                        >
                                                                            <DialogTitle>Iniciar Sesion</DialogTitle>
                                                                            <Divider />
                                                                            <DialogContent>
                                                                                <TextField
                                                                                    autoFocus
                                                                                    margin="dense"
                                                                                    id="email"
                                                                                    label="Email Address"
                                                                                    type="email"
                                                                                    fullWidth
                                                                                    variant="standard"
                                                                                />
                                                                                <TextField
                                                                                    autoFocus
                                                                                    margin="dense"
                                                                                    id="password"
                                                                                    label="Password"
                                                                                    type="password"
                                                                                    fullWidth
                                                                                    variant="standard"
                                                                                />
                                                                            </DialogContent>
                                                                            <Grid container justifyContent={"right"}>
                                                                                <Typography fontSize={"small"}>
                                                                                    Aun no tienes cuenta?{" "}
                                                                                    <Button
                                                                                        color="secondary"
                                                                                        variant="text"
                                                                                        onClick={handleOpenClose}
                                                                                    >
                                                                                        Crear Cuenta
                                                                                    </Button>
                                                                                </Typography>
                                                                            </Grid>
                                                                            <Divider />
                                                                            <DialogActions>
                                                                                <Button
                                                                                    color="secondary"
                                                                                    onClick={handleClose2}>
                                                                                    Ingresar
                                                                                </Button>
                                                                            </DialogActions>
                                                                        </Dialog>
                                                                    )}
                                                                </>
                                                            ))
                                                        )}
                                                    </Stack>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </Grid>
                    </Grid>
                </Toolbar>

                <Toolbar>
                    <Stack sx={fullWidthFlex} direction='row' justifyContent={'center'}>
                        <ButtonGroup sx={flexCenter}>
                            <Button>Lugar</Button>
                            <Button>Check-in</Button>
                            <Button>Check-out</Button>
                            <Button>Viajeros</Button>
                        </ButtonGroup>
                        <Button>Buscar</Button>
                    </Stack>
                </Toolbar>
    </AppBar>
    </ClickAwayListener>
  )
}
