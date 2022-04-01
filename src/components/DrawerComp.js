import React ,{useState}from 'react';
import {Drawer,Button, List, ListItemButton, ListItemIcon, ListItemText, IconButton} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {
 const [openDrawer,setOpenDrawer] =useState(false);
 const pages=["Products","Services","AboutUs","Contact"];
  return (
    <React.Fragment>
    
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={()=>setOpenDrawer(false)}
    >
      <List>
          {
            pages.map((page,index)=>
              <ListItemButton key={index}>
                  <ListItemIcon>
                      <ListItemText>{page}</ListItemText>
                  </ListItemIcon>

             </ListItemButton>
          
          )
          }
        
      </List>
    </Drawer>

    <IconButton sx={{marginLeft:"auto",color:"white"}} onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{color:"white"}} />
    </IconButton>

  </React.Fragment>
  );
}

export default DrawerComp;
