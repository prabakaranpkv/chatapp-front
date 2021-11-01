import { Box, Dialog, makeStyles, withStyles } from "@material-ui/core";
import { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { AccountContext } from "../context/AccountProvider";

//components
import { clientId } from "../constants/data";
import { addUser } from "../service/api";

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    margin: "auto",
    padding: "56px 0 56px 56px",
    fontWeight: 600,
    fontSize: "30px",
    color: "grey",
  },
});

const style = {
  dialogPaper: {
    height: "40%",
    width: "40%",
    marginTop: 0,
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};
const Login = ({ classes }) => {
  const className = useStyles();

  const { setAccount } = useContext(AccountContext);

  //user details sent to DB
  const onLoginSuccess = async (res) => {
    console.log("Login Successful", res.profileObj);
    setAccount(res.profileObj);
    await addUser(res.profileObj);
  };
  const onLoginFailure = () => {
    console.log("Login Failure");
  };
  return (
    //login panel
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={className.component}>
        <Box className={className.leftComponent}>ChatApp login with Google</Box>
        <Box style={{ position: "absolute", left: "45%", top: "50%" }}>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            isSignedIn={true}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
          />
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(Login);
