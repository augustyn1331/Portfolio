import { makeStyles, useTheme } from "@material-ui/core/styles";
import ImageCard from "./cards/ImageCard";
import add from "../img/add.png";
import actions from "../img/actions.png";
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
    margin: "0px 16px 24px 16px",
  },
  card: {
    maxWidth: 250,
    background: "white",
    margin: "16px 24px 24px 24px",
    display: "flex",
    flexDirection: "column",
    transform: "scale(1) translateZ(0)",
    willChange: "transform",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      maxWidth: 460,
      "&:hover": {
        transform: "scale(1.05) translateZ(0)",
      },
    },
    transition: "transform 0.15s ease-in-out",
    cursor: "pointer",
  },
  cardTitle: {
    marginBottom: "1rem",
  },
  cardDescription: {
    fontSize: "0.85rem !important",
    [theme.breakpoints.up("md")]: {
      marginTop: "1rem",
      fontSize: "0.95rem !important",
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

export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();
  const desktopView = useMediaQuery(theme.breakpoints.up("md"));
  const places = [
    {
      title: "Okienko popup",
      description:
        "Formularz dodawania faktury w projekcie interfejsu aplikacji webowej.",
      imageUrl: add,
    },
    {
      title: "Panel użytkownika",
      description:
        "Lista faktur i opcje do wyboru dla danej pozycji w projekcie interfejsu aplikacji webowej.",
      imageUrl: actions,
    },
  ];

  return (
    <div className={`${classes.root} ${classes.flexbox}`} id="Projects">
      <div className={classes.title}>
        <Typography variant="h2" component="h2">
          Projekty
        </Typography>
      </div>
      <div className={`${classes.wrapper} ${classes.flexbox}`}>
        {desktopView ? (
          <>
            <div data-aos="fade-right" data-aos-delay="1000">
              <ImageCard
                place={places[1]}
                card={classes.card}
                title={classes.cardTitle}
                desc={classes.cardDescription}
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="500">
              <ImageCard
                place={places[0]}
                card={classes.card}
                title={classes.cardTitle}
                desc={classes.cardDescription}
              />
            </div>{" "}
          </>
        ) : (
          <>
            <ImageCard
              place={places[1]}
              card={classes.card}
              title={classes.cardTitle}
              desc={classes.cardDescription}
            />
            <ImageCard
              place={places[0]}
              card={classes.card}
              title={classes.cardTitle}
              desc={classes.cardDescription}
            />
          </>
        )}
      </div>
      {desktopView && (
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
