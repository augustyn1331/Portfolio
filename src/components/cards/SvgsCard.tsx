import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    width: "60px",
    alignSelf: "flex-end",
    [theme.breakpoints.up("sm")]: {
      width: "70px",
    },
    //changing svg colour
    filter:
      "invert(66%) sepia(41%) saturate(3102%) hue-rotate(308deg) brightness(101%) contrast(88%)",
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
    borderRadius: "10px",
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
  },
}));

export default function SvgsCard(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img className={classes.media} src={props.imageUrl} />
      <div className={classes.cardContent}>
        <Typography gutterBottom variant="h4" component="h4" className={classes.title}>
          {props.title}
        </Typography>
        <Typography variant="h6" component="h6" className={classes.title}>
          {props.description}
        </Typography>
      </div>
    </div>
  );
}
