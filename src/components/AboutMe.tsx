
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import photo from "../img/photosquare.jpg";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  flexbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  root: {
    minHeight: "100vh",
    background: theme.palette.primary.main,
    padding: "0px 16px 32px 16px !important",
    overflowX: "hidden",
    [theme.breakpoints.up("md")]: {
      padding: "0px 16px 76px 16px !important",
      overflowX:"visible"
    },
  },
  photo: {
    height: "110px",
    margin: "60px 45px 20px 45px",
    borderRadius: "50%",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 2px 5px rgba(0,0,0,0.10)",
    transition: "transform ease-in-out 0.3s",
    [theme.breakpoints.up("sm")]: {
      height: "200px",
    },
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        transform: "scale(1.15) translateZ(0)",
        transition: "transform ease-in-out 0.3s",
      },
      willChange: "transform",
      cursor: "pointer",
      height: "250px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "300px",
      margin: "20px 45px 20px 35px",
    },
  },
  textWrapper: {
    margin: "8px 0px 60px 0px",
    [theme.breakpoints.up("md")]: {
      margin: "35px 35px 35px 45px",
    },
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Container
      className={`${classes.root} ${classes.flexbox}`}
      id="AboutMe"
      maxWidth="xl"
    >
      <Container className={classes.flexbox} maxWidth="xl">
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <img id="myphoto" className={classes.photo} src={photo} alt="AG" />
        </div>

        <Container
          className={`${classes.textWrapper} ${classes.flexbox}`}
          maxWidth="md"
        >
          <Typography
            variant="body1"
            component="p"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            &emsp;Nazywam się Augustyn Głowacki i jestem studentem III roku
            informatyki na Politechnice Częstochowskiej, specjalizacja
            Programowanie Aplikacji Internetowych. Znam język angielski na
            poziomie C1.
            <br />
            &emsp;Od połowy 2020 roku stwierdziłem, że wezmę sprawy w swoje ręce
            i zacznę się uczyć front-endu we własnym zakresie. Po krótkim czasie
            stało się to moim hobby. Staram się codziennie poszerzać horyzonty w
            zakresie tworzenia UI/UX.
            <br />
            &emsp;W moich projektach używam biblioteki React.js, korzystam także
            z frameworka Material UI. Planuję w najbliższym czasie rozpocząć
            również naukę React Native, aby oprócz stron internetowych tworzyć
            również aplikacje mobilne &#129488;
            <br />
            &emsp;Poza programowaniem, moim hobby jest oglądanie meczów Bayernu
            Monachium. Uwielbiam także oglądać wyścigi Formuły 1 oraz urywki
            programu Top Gear. Moje ulubione seriale to "Parks and Recreation"
            oraz "The Office".
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}
