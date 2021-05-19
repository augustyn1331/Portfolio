
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Svg from "../img/mobiletesting.svg";
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
    padding: "0px 16px 0px 16px !important",
    [theme.breakpoints.up("md")]: {
      padding: "0px 16px 76px 16px !important",
    },
  },
  contactLinks: {
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
        backgroundColor: "#f86d70",
        transition: "transform 300ms ease-in-out",
        transform: "scaleX(0)"
      },
      "&:hover::before,\n&:focus::before": { transform: "scaleX(1)" }
    },
  },
  coloredicon: {
    fontSize: "2.3rem !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem !important",
    },
    paddingRight: "16px",
    color: theme.palette.primary.light,
  },
  textSize: {
    fontSize: "0.9rem !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem !important",
    },
  },
  svgWrap: {
    maxWidth: "200px",
    margin: "8px 0px 0px 0px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "240px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "320px",
      margin: "36px 16px 0px 16px",
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
  whiteText: {
    color: theme.palette.primary.light,
  },
  linksWrapper: {
    margin: "32px",
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
  noMargin: {
    [theme.breakpoints.down("md")]: {
      margin: "1.5rem 1rem 0rem 1rem",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Container
      className={`${classes.root} ${classes.flexbox}`}
      id="Contact"
      maxWidth="xl"
    >
      <div className={classes.flexbox}>
        <Typography
          className={`${classes.whiteText} ${classes.noMargin}`}
          variant="h2"
          component="h2"
        >
          Kontakt
        </Typography>
      </div>
      <div className={`${classes.outsideWrapper} ${classes.flexbox}`}>
        <div className={`${classes.linksWrapper} ${classes.flexbox}`}>
          <a
            id="contactLinkPhone"
            className={classes.contactLinks}
            href="tel:790605945"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-delay="500"
          >
            <CallOutlinedIcon className={classes.coloredicon} />
            <Typography
              className={`${classes.whiteText} ${classes.textSize}`}
              component="p"
            >
              790 605 945
            </Typography>
          </a>
          <a
            id="contactLinkEmail"
            className={classes.contactLinks}
            href="mailto:augustyn1331@gmail.com"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-delay="1000"
          >
            <EmailOutlinedIcon className={classes.coloredicon} />
            <Typography
              className={`${classes.whiteText} ${classes.textSize}`}
              component="p"
            >
              augustyn1331@gmail.com
            </Typography>
          </a>
          <a
            id="contactLinkChat"
            className={classes.contactLinks}
            href="https://www.m.me/duzyofiszjal"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-delay="1500"
          >
            <ChatOutlinedIcon className={classes.coloredicon} />
            <Typography
              className={`${classes.whiteText} ${classes.textSize}`}
              component="p"
            >
              Messenger
            </Typography>
          </a>
        </div>
        <div className={classes.svgWrap}>
          <img className={classes.svgStyle} src={Svg} alt="car" />
        </div>
      </div>
    </Container>
  );
}
