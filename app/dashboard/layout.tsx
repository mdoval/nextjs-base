import { FC, ReactNode } from "react";
import NavBar from "../components/NavBar";
import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado";

interface Props {
  children: ReactNode;
}

const DashboardLayout: FC<Props> = async ({ children }) => {
  const usuario = await getUsuarioLogueado()
  return (
    <div>
      <div><NavBar usuario={usuario} /></div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
