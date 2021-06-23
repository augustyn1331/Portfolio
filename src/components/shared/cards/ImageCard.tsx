import { makeStyles, Theme } from "@material-ui/core/styles";

interface IImageCard {
  title: string;
  description: string;
  imageUrl: string;
  src: string;
}
interface IProps {
  props: IImageCard;
}

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    maxWidth: "270px",
    [theme.breakpoints.up("md")]: {
      maxHeight: "360px",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    margin: "16px 24px 40px 24px",
    cursor: "pointer",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.15)",
    willChange: "transform",
    transform: "scale(1) translateZ(0)",
    transition: "transform 0.15s ease-in-out",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      "&:hover": {
        transform: "scale(1.05) translateZ(0)",
      },
    },
  },
  cardContent: {
    textAlign: "center",
    padding: "16px 13px",
    maxWidth: "270px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "236px",
      transform: "scale(1) !important",
    },
  },
  cardTitle: {
    marginTop: "5%",
    marginBottom: "1.25rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "20%",
      marginBottom: "1.5rem",
      transform: "scale(1) !important",
    },
  },
  cardDescription: {
    color: "#45435f",
    fontWeight: 300,
    textAlign: "center",
    letterSpacing: "-0.01rem",
    lineHeight: "1.2rem",
    fontSize: "0.85rem !important",
    marginBottom: "0.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "0.85rem",
      marginBottom: "0rem",
      fontSize: "0.90rem !important",
      transform: "scale(1) !important",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

/* Image Card with hover effect (desktop) */
const ImageCard: React.FC<IProps> = ({ props }: IProps) => {
  // styles (css in js)
  const { link, card, media, cardContent, cardTitle, cardDescription } =
    useStyles();
  const { title, description, imageUrl, src } = props;
  return (
    <a className={link} href={src} target="_blank" rel="noreferrer">
      <div className={card}>
        <img className={media} src={imageUrl} alt=""/>
        <div className={cardContent}>
          <h3 className={cardTitle}>{title}</h3>
          <p className={cardDescription}>{description}</p>
        </div>
      </div>
    </a>
  );
};
export default ImageCard;
