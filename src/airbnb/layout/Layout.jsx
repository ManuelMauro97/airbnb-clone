import { Box, Button, Stack } from "@mui/material"
import { Home } from "../components/Home"
import { Navbar } from "../components/Navbar"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Home2 } from "../components/Home2";
import { NavBar2 } from "../components/NavBar2";
import { useSelector } from "react-redux";
// import { Map } from "../components/Map";


export const Layout = () => {

  const boton = useSelector(state => state.airbnb.selectedButtonId);

  return (
    <>
        {
          boton === null && <Navbar />
        }
        {
          boton !== null && <NavBar2 />
        }
        
        <Home2 />
        {/* <Stack height={'100vh'} bgcolor='red'>
        <Map />
        </Stack> */}

        {/* <Box justifyContent={'center'} borderRadius={'50%'} position={'fixed'} bottom={40} left='0%' bgcolor={'red'} width={'100%'} zIndex={999}> */}
        <Button variant="contained" sx={{ borderRadius: '16px', justifyContent: 'center', zIndex: 999, position: 'fixed', left: {md: '45.5%', sm: '50%'}, bottom: 40, }}>
            Ver mapa
            <FormatListBulletedIcon sx={{ ml: "10px" }} />
        </Button>
      {/* </Box> */}
    </>
  )
}
