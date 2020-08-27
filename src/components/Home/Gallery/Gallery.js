import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Paper from '@material-ui/core/Paper';

import './Gallery.css'
import image from '../../../images/cats.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     // backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: '70vw',
//     height: '80vh',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     // transform: 'translateZ(0)',
//   },
// //   titleBar: {
// //     background:
// //       'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
// //       'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
// //   },
//   icon: {
//     color: 'white',
//   },
//   tile: {
//       background: 'red',
//   }
// }));

function Gallery(props){
    const classes = useStyles();

    // let tileData = [];

    // const restaurantList = props.restaurants.map((restaurantObj) => {
    //     console.log(restaurantObj.image)});

    //     const tileData = [
    //         {
    //             img: image,
    //             title: 'Image',
    //             author: 'author',
    //             featured: true,
    //         }]
    // // });
    
    // props.restaurants.map((restaurantObj) => {
    //     const image = restaurantObj.image
    //     function randomphoto(image){
    //         let photo = image[Math.floor(Math.random() * image.length)];
    //         console.log(photo)
    //     }
    //     randomphoto();
    // })


    
    return(

        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <img src={image} alt={image.name} />
            {/* <Paper className={classes.paper}>12</Paper> */}
        </Grid>
        <Grid item xs={6}>
            <Paper className={classes.paper}>6</Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className={classes.paper}>6</Paper>
        </Grid>
        <Grid item xs={3}>
        <img src={image} alt={image.name} />
            {/* <Paper className={classes.paper}>xs=3</Paper> */}
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        </Grid>
    </div>
        // <div className={classes.root}>
        // <GridList cellHeight={300} className={classes.gridList}>
        //     {props.restaurants.map((image) => ( 
        //     <GridListTile key={image.image} cols={image ? 2 : 1} rows={image.location ? 2 : 1}>
        //       <img src={image.image} alt={image.name} />
        //       <GridListTileBar
        //         title={image.name}
        //         classes={classes.tile}
        //         titlePosition="bottom"
        //         actionIcon={
        //           <IconButton className={classes.icon}>
        //             <FavoriteBorderIcon />
        //           </IconButton>
        //         }
        //         actionPosition="right"
        //         className={classes.titleBar}
        //       />
        //     </GridListTile>
        //  ))}
        // </GridList>
        // </div>
        
    )
}

export default Gallery;

{/* 
// <div className="container">
        //     <Container fixed> 
        //     <div className="container-content">
        //         Gallery
        //     </div>
        //     </Container>
        // </div> */}