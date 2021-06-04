import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    maxWidth: "270px",
    [theme.breakpoints.up("md")]: {
      maxHeight: "360px",
    },
  },
  cardContent: {
    textAlign: "center",
    padding: "16px 13px",
    maxWidth: "270px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "236px",
      transform: "scale(1) !important",
      padding: "px",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

/* Image Card with hover effect */
export default function ImageCard(props: any) {
  const classes = useStyles();
  const { place, title, desc, card } = props;
  return (
    <a
      className={classes.link}
      href={place.src}
      target="_blank"
      rel="noreferrer"
    >
      <Card className={card}>
        <CardMedia
          component="img"
          className={classes.media}
          image={place.imageUrl}
        />
        <CardContent className={classes.cardContent}>
          <h3 className={title}>{place.title}</h3>
          <p className={desc}>{place.description}</p>
        </CardContent>
      </Card>
    </a>
  );
}
