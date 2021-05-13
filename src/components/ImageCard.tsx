import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    maxWidth: "250px",
    [theme.breakpoints.up('md')]: {
      width: "240px",
    },
  },
  cardContent:{
   textAlign:"center",
   display:"flex",
   justifyContent:"center",
   flexDirection:"column",
   padding:"16px 8px",
   [theme.breakpoints.up('md')]: {
    padding:theme.spacing(2)
  },
  },
  cardHovered: {
    [theme.breakpoints.up('md')]: {
      transform: "scale(1.05) translateZ(0)",
      willChange: "transform"
    },
  },
  textHovered: {
    [theme.breakpoints.up('md')]: {
      transform: "scale(1) !important",
    },
  },
}));

/* Image Card with hover effects*/
export default function ImageCard(props: any) {
  const classes = useStyles();
  const {place, title, desc, card} = props;
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })
  return (
      <Card className={card} 
      classes={{root: state.raised ? classes.cardHovered : ""}}
    onMouseOver={()=>setState({ raised: true, shadow:3})} 
    onMouseOut={()=>setState({ raised:false, shadow:1})} 
    raised={state.raised} elevation={state.shadow}>
        <CardMedia
          component="img"
          className={classes.media}
          image= {place.imageUrl}
        />
        <CardContent className={classes.cardContent} classes={{root: state.raised ? classes.textHovered : ""}}>
          <Typography
            gutterBottom
            variant="h3"
            component="h3"
            className={title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={desc}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
  );
}