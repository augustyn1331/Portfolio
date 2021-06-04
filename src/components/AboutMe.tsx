import { makeStyles } from "@material-ui/core/styles";
import photo from "../img/photosquare.jpg";
import SvgsCard from "./shared/cards/SvgsCard";
import rwd from "../img/rwd_dev.svg";
import mobile from "../img/mobile_dev.svg";

const useStyles = makeStyles((theme) => ({
  flexbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  root: {
    minHeight: "100vh",
    background: theme.palette.primary.main,
    padding: "0px 16px 32px 16px !important",
    overflowX: "hidden",
    [theme.breakpoints.up("md")]: {
      padding: "76px 16px 0px 16px !important",
      overflowX: "visible",
    },
  },
  photo: {
    height: "110px",
    margin: "60px 45px 20px 45px",
    borderRadius: "50%",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.10)",
    [theme.breakpoints.up("sm")]: {
      height: "200px",
    },
    [theme.breakpoints.up("md")]: {
      height: "230px",
      margin: "60px 45px 300px 45px",
      transition: "transform ease-in-out 0.3s",
      "&:hover": {
        transform: "scale(1.05) translateZ(0)",
        transition: "transform ease-in-out 0.3s",
      },
    },
    [theme.breakpoints.up("lg")]: {
      height: "270px",
      margin: "0px 50px 300px 35px",
    },
  },
  textWrapper: {
    maxWidth: "778px",
    margin: "8px 0px 60px 0px",
    [theme.breakpoints.up("md")]: {
      margin: "35px 35px 35px 50px",
    },
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "-50px",
    },
  },
  imageWrapper: {
    maxWidth: "1245px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  text: {
    color: "#ffffffdd",
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.flexbox}`} id="AboutMe">
      <div className={`${classes.flexbox} ${classes.imageWrapper}`}>
        <div data-aos="fade-down" data-aos-delay="500">
          <img id="myphoto" className={classes.photo} src={photo} alt="AG" />
        </div>
        <div className={`${classes.textWrapper} ${classes.flexbox}`}>
          <p className={classes.text} data-aos="fade-down" data-aos-delay="500">
            &emsp;Nazywam się Augustyn Głowacki i jestem studentem III roku
            informatyki na Politechnice Częstochowskiej, specjalizacja
            Programowanie Aplikacji Internetowych. We własnym zakresie rozwijam
            swoje umiejętności, aby zostać programistą, a konkretniej Front-end
            Developerem. Moje pomysły realizuję używając biblioteki React.js
            oraz frameworka React Native. Na co dzień projektuję:
          </p>
          <div className={classes.cardWrapper}>
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <SvgsCard
                title="Strony Internetowe"
                imageUrl={rwd}
                description="W każdym projekcie dbam o responsywność strony, aby wyglądała tak samo dobrze na telefonie, tablecie oraz komputerze."
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <SvgsCard
                title="Aplikacje mobilne"
                imageUrl={mobile}
                description="Dzięki React Native mogę stworzyć aplikację działającą zarówno na systemie Android i iOS."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
