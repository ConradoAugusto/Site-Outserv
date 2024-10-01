import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { PrivacyPoliciesPage } from "../pages/PrivacyPoliciesPage";
import { TermsAndConditionsPage } from "../pages/TermsAndConditionsPage";
import { BlogPage } from "../pages/BlogPage";
import { ViewPage } from "../pages/ViewPage";
import LoginPage from "../pages/Dashboard/LoginPage";
import DashboardPage from "../pages/Dashboard";
import Guard from "./Guard";
import { GestãodeServiçoDeskCliente } from "../pages/GestãodeServiçoDeskCliente";
import RouteWrapper from "../../components/RouteWrapper";
import { SuporteTOTVS } from "../pages/SuporteTOTVS";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RouteWrapper
            title="Página Inicial"
            canonical="https://outserv.com.br/"
          >
            <HomePage />
          </RouteWrapper>
        }
      />
      <Route
        path="/suporte-totvs-rm"
        element={
          <RouteWrapper
            title="Suporte TOTVS RM"
            canonical="https://outserv.com.br/suporte-totvs-rm"
          >
            <SuporteTOTVS />
          </RouteWrapper>
        }
      />
      <Route
        path="/sobre"
        element={
          <RouteWrapper
            title="Sobre Nós"
            canonical="https://outserv.com.br/sobre"
          >
            <AboutPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/contato"
        element={
          <RouteWrapper
            title="Contato"
            canonical="https://outserv.com.br/contato"
          >
            <ContactPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/blog"
        element={
          <RouteWrapper title="Blog" canonical="https://outserv.com.br/blog">
            <BlogPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/blog/login"
        element={
          <RouteWrapper
            title="Login do Blog"
            canonical="https://outserv.com.br/blog/login"
          >
            <LoginPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/blog/view/:slug"
        element={
          <RouteWrapper
            title="Visualização do Blog"
            canonical={`https://outserv.com.br/blog/view/:slug`}
          >
            <ViewPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/gestaoservicedeskcliente"
        element={<GestãodeServiçoDeskCliente />}
      />
      <Route
        path="/legal/politicas-de-privacidade"
        element={<PrivacyPoliciesPage />}
      />
      <Route
        path="/legal/termos-e-condicoes"
        element={<TermsAndConditionsPage />}
      />
      <Route element={<Guard />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
