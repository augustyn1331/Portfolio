import { makeStyles, Theme } from "@material-ui/core/styles";

interface ISvgCard {
  title: string;
  description: string;
  imageUrl: string;
}
interface IProps {
  props: ISvgCard;
}

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    width: "60px",
    //place an icon in a corner
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
    // borderRadius: "10px",
    backgroundColor: "transparent",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: "270px",
      margin: "32px 20px 16px 20px",
      // icon shake on card hover
      "&:hover > img": {
        animation: "shake 0.5s alternate",
      },
    },
  },
  cardText: {
    color: theme.palette.primary.light,
    marginBottom: "0.35em",
  },
}));

//simple card to display uppercase heading, some description and an icon
const SvgCard: React.FC<IProps> = ({ props }: IProps) => {
  // styles (css in js)
  const { card, media, cardContent, cardText } = useStyles();
  const { title, imageUrl, description } = props;
  return (
    <div className={card}>
      <img className={media} src={imageUrl} alt="" />
      <div className={cardContent}>
        <h4 className={cardText}>{title}</h4>
        <h6 className={cardText}>{description}</h6>
      </div>
    </div>
  );
};

export default SvgCard;
