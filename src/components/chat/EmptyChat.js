import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    background: "#f8f9fa",
    height: "100%",
    padding: "50px 0",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: 600,
    color: "grey",
  },
  image: {
    marginTop: 70,
    width: 420,
  },
});

export default function EmptyChat() {
  const classes = useStyles();

  const url = "https://miro.medium.com/max/935/1*M_PoTEmelbIbw3nLcWHjSg.png";

  return (
    //empty chat conversation
    <Box className={classes.component}>
      <Box>Select Contact to Chat</Box>
      <img src={url} alt="empty" className={classes.image} />
    </Box>
  );
}
