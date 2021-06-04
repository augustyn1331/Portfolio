import { makeStyles, Theme } from "@material-ui/core/styles";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Svg from "./../img/mobiletesting.svg";

const useStyles = makeStyles((theme: Theme) => ({
  flexbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  root: {
    minHeight: "100vh",
    background: theme.palette.primary.main,
    padding: "0px 16px 76px 16px !important",
  },  
  linksWrapper: {
    margin: "32px 16px",
    [theme.breakpoints.up("lg")]: {
      margin: "16px 64px",
    },
  },
  outsideWrapper: {
    margin: "16px 0px 8px 0px",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  title: {
    color: theme.palette.primary.light,
    [theme.breakpoints.down("md")]: {
      margin: "1.5rem 1rem 0rem 1rem",
    },
  },
  linkText: {
    fontSize: "0.9rem !important",
    color: theme.palette.primary.light,
    fontWeight: 400,
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem !important",
    },
  },
  linkTextAnimation: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none !important",
    marginBottom: "4px",
    textTransform: "uppercase",
    [theme.breakpoints.up("md")]: {
      margin: "1rem 1.5rem",
      "&::before": {
        content: "''",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        height: "3px",
        backgroundColor: theme.palette.secondary.main,
        transition: "transform 300ms ease-in-out",
        transform: "scaleX(0)",
      },
      "&:hover::before": { transform: "scaleX(1)" },
    },
  },
  icon: {
    fontSize: "2.3rem !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.8rem !important",
    },
    paddingRight: "16px",
    color: theme.palette.primary.light,
  },
  svgWrap: {
    maxWidth: "200px",
    margin: "8px 0px 0px 0px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "240px",
      margin: "36px 16px 0px 16px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "320px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "400px",
      margin: "44px 65px 0px 65px",
    },
  },
  svgStyle: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      transform: "translatey(0px)",
      animation: "floatT 8s ease-in-out infinite",
    },
  },

}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.flexbox}`} id="Contact">
      <div className={classes.flexbox}>
        <h2 className={classes.title} >
          Kontakt
        </h2>
      </div>
      <div className={`${classes.outsideWrapper} ${classes.flexbox}`}>
        <div className={`${classes.linksWrapper} ${classes.flexbox}`}>
          <a
            className={classes.linkTextAnimation}
            href="tel:790605945"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-delay="500"
          >
            <CallOutlinedIcon className={classes.icon} />
            <p className={classes.linkText}>790 605 945</p>
          </a>
          <a
            className={classes.linkTextAnimation}
            href="mailto:augustyn1331@gmail.com"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-delay="1000"
          >
            <EmailOutlinedIcon className={classes.icon} />
            <p className={classes.linkText}>
              augustyn1331@gmail.com
            </p>
          </a>
          <a
            className={classes.linkTextAnimation}
            href="https://www.m.me/duzyofiszjal"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-delay="1500"
          >
            <ChatOutlinedIcon className={classes.icon} />
            <p className={classes.linkText}>messenger</p>
          </a>
        </div>
        <div className={classes.svgWrap}>
          <img className={classes.svgStyle} src={Svg} alt="" />
        </div>
      </div>
    </div>
  );
}
