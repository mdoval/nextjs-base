import { FC, ReactNode } from "react";
import NavBar from "../components/NavBar";

interface Props {
  children: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div><NavBar /></div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
