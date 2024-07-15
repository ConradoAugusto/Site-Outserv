import { Footer } from "../Footer";
import { Header } from "../Header";


export const DefaultTemplate = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={className}>
      {children}</main>
      <Footer />
    </>
  );
};
