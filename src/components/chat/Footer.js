import { Box, InputBase, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  footer: {
    height: "55px",
    background: "#ededed",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    "& > *": {
      margin: 5,
      color: "#919191",
    },
  },
  clipIcon: {
    transform: "rotate(40deg)",
  },
  searchBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    width: "calc(95% - 100px)",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 25,
    fontSize: 14,
    height: 20,
    width: "100%",
  },
});

export default function Footer({ sendText, setValue, value }) {
  const classes = useStyles();
  return (
    //footer for chatbox
    <Box className={classes.footer}>
      <Box className={classes.searchBox}>
        <InputBase
          placeholder="Type a message and enter to send..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onKeyPress={(e) => sendText(e)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Box>
    </Box>
  );
}
