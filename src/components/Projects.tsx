import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./shared/cards/ImageCard";
import actions from "./../img/actions.png";
import tesla from "./../img/tes.png";
import SvgGitHubLogo from "./../img/GitHubLogo";
import useViewport from "./shared/hooks/useViewport";
import globalStyles from "../app/layout/styles";

const useStyles = makeStyles((theme) => ({
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
  github: {
    margin: "30px 0px 0px 0px",
    height: "45px",
    transition: "transform ease-in-out 0.2s",
    "&:hover": {
      transform: "scale(1.10) translateZ(0)",
      transition: "transform ease-in-out 0.2s",
    },
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
  //styles (css in js)
  const classes = useStyles();
  const { flexbox } = globalStyles();
  //get current window width custom hook
  const width = useViewport();
  const mobileView = width < 960;

  return (
    <div className={`${classes.root} ${flexbox}`} id="Projects">
      <div className={classes.title}>
        <h2>Projekty</h2>
      </div>
      <div className={`${classes.wrapper} ${flexbox}`}>
        <div data-aos="fade-right" data-aos-delay="1000">
          <ImageCard props={cardData[1]} />
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <ImageCard props={cardData[0]} />
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
