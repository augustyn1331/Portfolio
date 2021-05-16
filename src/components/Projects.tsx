
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import add from "../img/add.png";
import actions from "../img/actions.png";
import Container from "@material-ui/core/Container";
import SvgGitHubLogo from "../img/GitHubLogo";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  flexbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  root: {
    minHeight: "100vh",
    background: "linear-gradient(#f4f7fa,#fff,#fff,#fff,#fff)",
    padding: "0px 16px 76px 16px !important",
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
  card: {
    maxWidth: 250,
    background: "white",
    margin: "16px 24px 24px 24px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      maxWidth: 460,
    },
    transition: "transform 0.15s ease-in-out",
    cursor: "pointer",
  },
  title: {
    [theme.breakpoints.up("md")]: {
      marginBottom: "1rem",
    },
  },
  desc: {
    [theme.breakpoints.up("md")]: {
      marginTop: "1rem",
    },
    fontSize: "0.95rem !important",
  },
  github: {
    margin: "20px 0px",
    height: "55px",
    transition: "transform ease-in-out 0.2s",
    "&:hover": {
      transform: "scale(1.10) translateZ(0)",
      transition: "transform ease-in-out 0.2s",
    },
    willChange: "transform",
    cursor: "pointer",
  },
  center: {
    margin: "32px 0px 0px 0px",
    [theme.breakpoints.up("md")]: {
      margin: "16px 40px 16px 40px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0px 65px 24px 65px",
    },
  },
}));

export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const places = [
    {
      title: "Okienko popup",
      description:
        "Formularz dodawania faktury w projekcie interfejsu aplikacji webowej.",
      imageUrl: add,
      time: 1500,
    },
    {
      title: "Panel użytkownika",
      description:
        "Lista faktur i opcje do wyboru dla danej pozycji w projekcie interfejsu aplikacji webowej.",
      imageUrl: actions,
      time: 1500,
    },
  ];

  return (
    <Container
      className={`${classes.root} ${classes.flexbox}`}
      maxWidth="xl"
      id="Projects"
    >
      <div className={classes.center}>
        <Typography variant="h2" component="h2">
          Projekty
        </Typography>
      </div>
      <Container
        className={`${classes.wrapper} ${classes.flexbox}`}
        maxWidth="xl"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <ImageCard
            place={places[1]}
            card={classes.card}
            title={classes.title}
            desc={classes.desc}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <ImageCard
            place={places[0]}
            card={classes.card}
            title={classes.title}
            desc={classes.desc}
          />
        </div>
      </Container>
      {matches && (
        <div className={classes.center}>
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
    </Container>
  );
}
