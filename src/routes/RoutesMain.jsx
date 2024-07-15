import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { LinkTree } from "../pages/LinkTree";
import { PrivacyPoliciesPage } from "../pages/PrivacyPoliciesPage";
import { TermsAndConditionsPage } from "../pages/TermsAndConditionsPage";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="/link" element={<LinkTree />} />
      <Route path="/legal/politicas-de-privacidade" element={<PrivacyPoliciesPage />} />
      <Route path="/legal/termos-e-condicoes" element={<TermsAndConditionsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
 