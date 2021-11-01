//components
import Messenger from "./components/Messenger";
import AccountProvider from "./components/context/AccountProvider";
import TemplateProvider from "./components/theme/TemplateProvider";
import UserProvider from "./components/context/UserProvider";
function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}
export default App;
