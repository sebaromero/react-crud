import { Header, Body, /* ModalForm */ } from "../../components/index";
import { ModalProvider } from "react-simple-hook-modal";
import ModalFormulario from '../../components/ModalFormulario'

export const Home = () => {
  return (
    <div>
      <Header />
      <Body />
{/*       <ModalProvider>
        <ModalForm  />
      </ModalProvider> */}
      <ModalProvider>
         <ModalFormulario />
      </ModalProvider>
    </div>
  );
};
