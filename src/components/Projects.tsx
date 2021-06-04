import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./shared/cards/ImageCard";
import actions from "./../img/actions.png";
import tesla from "./../img/tes.png";
import SvgGitHubLogo from "./../img/GitHubLogo";
import useViewport from "./shared/hooks/useViewport";

const useStyles = makeStyles((theme) => ({
  flexbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  root: {
    minHeight: "100vh",
    background: "linear-gradient(#fafbfd,#fff,#fff,#fff)",
    padding: "32px 16px 76px 16px !important",
    [theme.breakpoints.up("md")]: {
      padding: "0px 16px 76px 16px !important",
    },
  },
  wrapper: {
    [theme.breakpoints.only("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  title: {
    margin: "0px 16px",
    [theme.breakpoints.up("sm")]: {
      margin: "0px 16px 24px 16px",
    },
  },
  card: {
    background: "white",
    margin: "16px 24px 40px 24px",
    display: "flex",
    flexDirection: "column",
    transform: "scale(1) translateZ(0)",
    willChange: "transform",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.15)",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      "&:hover": {
        transform: "scale(1.05) translateZ(0)",
      },
    },
    transition: "transform 0.15s ease-in-out",
    cursor: "pointer",
  },
  cardTitle: {
    marginTop: "5%",
    marginBottom: "1.25rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "20%",
      marginBottom: "1.5rem",
    },
  },
  cardDescription: {
    color: "#45435f",
    fontWeight: 300,
    textAlign: "center",
    letterSpacing: "-0.01em",
    lineHeight: "1.2rem",
    fontSize: "0.8rem !important",
    marginBottom: "0.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "0.85rem",
      marginBottom: "0rem",
      fontSize: "0.90rem !important",
    },
  },
  github: {
    margin: "30px 0px 0px 0px",
    height: "45px",
    transition: "transform ease-in-out 0.2s",
    "&:hover": {
      transform: "scale(1.10) translateZ(0)",
      transition: "transform ease-in-out 0.2s",
    },
    willChange: "transform",
    cursor: "pointer",
  },
}));
//data to send to ImageCard component
const cardData = [
  {
    title: "Aplikacja Mobilna",
    description:
      "Odwzorowanie designu strony internetowej Tesli w projekcie prostej aplikacji mobilnej.",
    imageUrl: tesla,
    src: "https://github.com/augustyn1331/React-Native-Car-App",
  },
  {
    title: "Aplikacja Internetowa",
    description:
      "Lista faktur wraz z opcjami do wyboru dla pozycji w projekcie interfejsu aplikacji internetowej do zarządzania fakturami.",
    imageUrl: actions,
    src: "https://github.com/augustyn1331/Responsywne_Faktury",
  },
];


export default function Projects() {
  const classes = useStyles();
  //get current window width custom hook
  const width = useViewport();
  const mobileView = width < 960;

  return (
    <div className={`${classes.root} ${classes.flexbox}`} id="Projects">
      <div className={classes.title}>
        <h2>Projekty</h2>
      </div>
      <div className={`${classes.wrapper} ${classes.flexbox}`}>
        <div data-aos="fade-right" data-aos-delay="1000">
          <ImageCard
            place={cardData[1]}
            card={classes.card}
            title={classes.cardTitle}
            desc={classes.cardDescription}
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <ImageCard
            place={cardData[0]}
            card={classes.card}
            title={classes.cardTitle}
            desc={classes.cardDescription}
          />
        </div>
      </div>

      {!mobileView && (
        //show github icon only above 960px window width
        <div>
          <a
            id="githubLink"
            href="https://github.com/augustyn1331/"
            target="_blank"
            rel="noreferrer"
          >
            <SvgGitHubLogo className={classes.github} />
          </a>
        </div>
      )}
    </div>
  );
}
