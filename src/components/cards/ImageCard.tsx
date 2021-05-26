import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    width: "260px",
    [theme.breakpoints.up("md")]: {
      width: "240px",
    },
  },
  cardContent: {
    minHeight:"204.5px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "16px 8px",
    [theme.breakpoints.up("md")]: {
      transform: "scale(1) !important",
      padding: theme.spacing(2),
    },
  },
}));

/* Image Card with hover effect */
export default function ImageCard(props: any) {
  const classes = useStyles();
  const { place, title, desc, card } = props;
  return (
    <Card className={card}>
      <CardMedia
        component="img"
        className={classes.media}
        image={place.imageUrl}
      />
      <CardContent className={classes.cardContent}>
        <h3 className={title}>
          {place.title}
        </h3>
        <p className={desc}>
          {place.description}
        </p>
      </CardContent>
    </Card>
  );
}
