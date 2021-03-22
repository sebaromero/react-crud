import { Header, Body, ModalFormulario } from "../../components/index";
import { ModalProvider } from "react-simple-hook-modal";

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
