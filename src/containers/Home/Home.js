import { Header, Body, ModalForm } from "../../components/index";
import { ModalProvider } from "react-simple-hook-modal";

export const Home = () => {
  return (
    <div>
      <Header />
      <Body />
      <ModalProvider>
        <ModalForm />
      </ModalProvider>
    </div>
  );
};
