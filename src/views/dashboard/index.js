import React from 'react'
import AppBar from "./Appbar"
import DataGrid from './dataTable'
import image from "../../assets/GDSCHeader.svg"
import {Icon, Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import {Instagram, LinkedIn,MenuBook, SupervisedUserCircle} from '@mui/icons-material';

const index = () => {
    return (
    <Card>
        <AppBar/>
         <CardMedia
           component="img"
           alt="GDSC Poornima"
           height="250"
           image={image}
         />
         <CardContent style={{ margin :"auto" }} >
         <div style={{display:'flex' , justifyContent:"center"}}>
         <Button sx={{mx:2 , width: 250}}  variant="outlined"  color="primary" href="https://events.withgoogle.com/30daysofgooglecloud/program-syllabus/#content" >
           <MenuBook sx={{mx:2 }} />
           <Typography gutterBottom variant="button"  >
             Program Syllabus
           </Typography>
         </Button>
        <Button sx={{mx:2, width: 250}} variant="contained" color="primary" href="https://events.withgoogle.com/30daysofgooglecloud/program-syllabus/#content" >
           <SupervisedUserCircle  />
           <Typography gutterBottom variant="button">
             Contact Us
           </Typography>
         </Button>
            </div>
           <Typography style={{display:'flex' , justifyContent:"center" , margin:"10px", alignItems:"center"}} gutterBottom variant="h3">
            <img src="https://www.freeiconspng.com/uploads/leaderboard-icon-9.png" width="150" alt="Leaderboard Icon" />
            Leader Board
           </Typography>
           <DataGrid/>
         </CardContent>
         <CardActions style={{display:'flex' , justifyContent:"flex-end" , margin:"10px"}}>
           <Button size="small" color="primary">
            <Instagram/>
           </Button>
              <Button size="small" color="primary">
                 <LinkedIn/>
                </Button>
         </CardActions>
    </Card>  
    )
}

export default index