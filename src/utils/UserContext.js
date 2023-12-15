import { createContext } from "react";

const UserContext = createContext({
  loggeduser: "admin",
});

export default UserContext;
