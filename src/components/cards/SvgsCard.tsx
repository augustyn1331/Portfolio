import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    width: "60px",
    //place an icon in a corner
    alignSelf: "flex-end",
    [theme.breakpoints.up("sm")]: {
      width: "70px",
    },
    //changing svg colour
    filter: "invert(66%) sepia(41%) saturate(3102%) hue-rotate(308deg) brightness(101%) contrast(88%)",
  },
  cardContent: {
    marginTop: "20px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "28px",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    margin: "8px 8px 0px 8px",
    width: "270px",
    height: "240px",
    padding: "20px",
    // borderRadius: "10px",
    backgroundColor: "transparent",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      height: "270px",
      margin: "32px 20px 16px 20px",
      // icon shake on card hover
      "&:hover > img": {
        animation: " shake 0.5s alternate",
      },
    },
  },
  title:{
    color:theme.palette.primary.light,
    marginBottom:"0.35em"
  },
}));

//simple card to display uppercase heading, some description and an icon
export default function SvgsCard(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img className={classes.media} src={props.imageUrl} alt=""/>
      <div className={classes.cardContent}>
        <h4 className={classes.title}>
          {props.title}
        </h4>
        <h6 className={classes.title}>
          {props.description}
        </h6>
      </div>
    </div>
  );
}
