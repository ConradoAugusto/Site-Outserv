import CookieConsent from "../../../components/CookieModal/CookieConsent";
import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import { Tag } from "../../../components/buttons/Tag";
import styles from "./style.module.scss";

export const PrivacyPoliciesPage = () => {

  const handleLinkClick = (event, id) => {
    event.preventDefault();
     if (id === "top") {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      const targetSection = document.getElementById(id);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 110,
          behavior: 'smooth'
        });

      }
    }
  };
  return (
    <DefaultTemplate>
         <OffCanvasContato/>
         <CookieConsent/>
      <div className={styles.container}>
        <div className={`${styles.header}`}>
          <div className={styles.headerContent}>
            <Tag className="primary" content="Legal" />
            <h1 className="title one secondary">Política de Privacidade</h1>
          </div>
        </div>
        <div className={styles.information}>
          <div className={`${styles.content}`}>
            <p className="paragraph politicas montserrat">
              Olá! Seja bem-vindo(a) ao website da Outserv!
            </p>

            <p className="paragraph politicas montserrat">
              A sua privacidade é importante para nós. É política da Outserv
              respeitar a sua privacidade em relação a qualquer informação sua
              que possamos coletar no site outserv.com.br, e outros sites que
              possuímos e operamos.
            </p>

            <p className="paragraph politicas montserrat">
              Solicitamos informações pessoais apenas quando realmente
              precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios
              justos e legais, com o seu conhecimento e consentimento. Também
              informamos por que estamos coletando e como será usado.
            </p>

            <p className="paragraph politicas montserrat">
              Apenas retemos as informações coletadas pelo tempo necessário para
              fornecer o serviço solicitado. Quando armazenamos dados,
              protegemos dentro de meios comercialmente aceitáveis para evitar
              perdas e roubos, bem como acesso, divulgação, cópia, uso ou
              modificação não autorizados.
            </p>

            <p className="paragraph politicas montserrat">
              Não compartilhamos informações de identificação pessoal
              publicamente ou com terceiros, exceto quando exigido por lei. O
              nosso site pode ter links para sites externos que não são operados
              por nós. Esteja ciente de que não temos controle sobre o conteúdo
              e práticas desses sites e não podemos aceitar responsabilidade por
              suas respectivas políticas de privacidade.
            </p>

            <p className="paragraph politicas montserrat">
              Você é livre para recusar a nossa solicitação de informações
              pessoais, entendendo que talvez não possamos fornecer alguns dos
              serviços desejados.
            </p>

            <ul>
              <li>
                O uso continuado de nosso site será considerado como aceitação
                de nossas práticas em torno de privacidade e informações
                pessoais. Se você tiver alguma dúvida sobre como lidamos com
                dados do usuário e informações pessoais, entre em contato
                conosco.
              </li>

              <li>
                O serviço Google AdSense que usamos para veicular publicidade
                usa um cookie DoubleClick para veicular anúncios mais relevantes
                em toda a Web e limitar o número de vezes que um determinado
                anúncio é exibido para você.
              </li>

              <li>
                Para mais informações sobre o Google AdSense, consulte as FAQs
                oficiais sobre privacidade do Google AdSense.
              </li>

              <li>
                Utilizamos anúncios para compensar os custos de funcionamento
                deste site e fornecer financiamento para futuros
                desenvolvimentos. Os cookies de publicidade comportamental
                usados por este site foram projetados para garantir que você
                forneça os anúncios mais relevantes sempre que possível,
                rastreando anonimamente seus interesses e apresentando coisas
                semelhantes que possam ser do seu interesse.
              </li>
            </ul>

            <p className="paragraph politicas montserrat">
              Para facilitar a sua compreensão, saiba que nossa Política de
              Cookies está organizada da seguinte forma:
            </p>

            <div className="paragraph bold d-flex flex-column gap-1 fs-5">
              <a className="textLight" onClick={(e) => handleLinkClick(e, "item1")} href="#item1" rel="noopener noreferrer">
                1. O que são cookies?
              </a>

              <a className="textLight" onClick={(e) => handleLinkClick(e, "item2")}  href="#item2" rel="noopener noreferrer">
                2. Quais cookies utilizamos?
              </a>

              <a className="textLight" onClick={(e) => handleLinkClick(e, "item3")} href="#item3" rel="noopener noreferrer">
                3. Gerenciamento dos cookies.
              </a>

              <a className="textLight" onClick={(e) => handleLinkClick(e, "item4")} href="#item4" rel="noopener noreferrer">
                4. Atualização da nossa Política.
              </a>
            </div>

            <h2 id="item1" className={`${styles.section} secondary ritual`}>
              1 – O que são cookies?
            </h2>
            <hr />

            <p className="paragraph politicas montserrat">
              Cookies são informações que o nosso website coleta e armazena,
              enquanto você navega por nosso portal. Os cookies são utilizados
              para lembrar suas preferências, registrar o que você inseriu em
              sua cesta de compras e contar o número de pessoas que acessam um
              site, dentre outras funções. Usando os cookies, nós conseguimos
              melhorar sua experiência de uso da nossa plataforma. Mas, não se
              preocupe! Você tem direito a consentir com o uso de alguns
              cookies. Vamos ver?
            </p>

            <h2 id="item2" className={`${styles.section} secondary ritual`}>
              2 – Quais cookies utilizamos (EM AGUARDO)
            </h2>
            <hr />

            <p className="paragraph politicas montserrat"></p>

            <h2 id="item3" className={`${styles.section} secondary ritual`}>
              3 – Gestão de cookies
            </h2>
            <hr />

            <p className="paragraph politicas montserrat">
              Exceto pelos cookies essenciais, indispensáveis para o
              funcionamento do site, a instalação dos outros tipos de cookies
              depende do seu consentimento! Assim, você pode revisar suas
              permissões, aceitando, alterando ou cancelando-as a qualquer
              momento. Nosso site não coleta cookies automaticamente. No
              entanto, você não é obrigado a autorizar o uso de todos eles.
              Saiba que nosso site pode não funcionar corretamente se todos os
              cookies forem desativados. Portanto, para uma experiência completa
              em nossa plataforma online, recomendamos que autorize a coleta de
              todos os cookies.
            </p>

            <h3>3.1. Como desativar a coleta dos cookies? </h3>

            <p className="paragraph politicas montserrat">
              Se você deseja desativar a coleta dos cookies ou selecionar quais
              tipos de cookies nossa plataforma online pode coletar, basta
              clicar no botão “detalhes” localizado no canto inferior esquerdo
              do nosso banner de cookies e escolher as opções que deseja
              desativar. Da mesma forma, caso queira reativá-los ou alterá-los
              novamente, basta clicar no botão “detalhes” e selecionar as opções
              desejadas, quantas vezes quiser.
            </p>

            <h3>3.2. Como excluir cookies do meu navegador? </h3>

            <p className="paragraph politicas montserrat">
              No seu computador, independentemente de seu sistema operacional
              ser Windows, MacOS ou Linux, e do navegador utilizado (Safari,
              Firefox, Internet Explorer, Chrome ou outro), existem algumas
              técnicas para exclusão de cookies:
            </p>

            <ul>
              <li>
                Remover os dados de navegação, limpando os cookies e o histórico
                do navegador de forma automática em intervalos regulares ou
                manualmente todos os dias;
              </li>

              <li>
                Bloquear cookies de terceiros, ativando a navegação segura no
                navegador;
              </li>

              <li>
                Utilizar programas como CCleaner ou Clean Master (disponíveis
                para Android, Mac e Windows);
              </li>

              <li>
                Manter o navegador e o antivírus sempre atualizados.
                Personalizar seu navegador pode aumentar sua privacidade e
                evitar inconvenientes ao visitar sites. Para uma proteção
                adicional contra rastreamento online, utilize a funcionalidade
                de Navegação Privada, presente em algumas soluções de antivírus,
                que bloqueiam malware, spyware, sites maliciosos,
                fingerprinting, análise sentimental, monitoramento de sessão e
                protegem pagamentos online, além de alertar sobre phishing e
                golpes, e combater vírus.
              </li>
            </ul>

            <h2 id="item4" className={`${styles.section} secondary ritual`}>
              4 - Alterações na política
            </h2>
            <p className="paragraph politicas montserrat">
              A Outserv pode atualizar esta política de privacidade de tempos em
              tempos para refletir mudanças em nossos produtos e serviços ou
              para cumprir requisitos legais. Quando fazemos atualizações na
              política, iremos notificá-lo através de nossos produtos e serviços
              ou postando a política atualizada em nosso site.
            </p>
            <hr />

            <h2 className="secondary ritual">Compromisso do Usuário</h2>
            <hr />

            <p className="paragraph politicas montserrat">
              O usuário se compromete a fazer uso adequado dos conteúdos e da
              informação que a Outserv oferece no site e com caráter
              enunciativo, mas não limitativo:
            </p>

            <p className="paragraph politicas montserrat">
              A) Não se envolver em atividades que sejam ilegais ou Contrárias à
              boa fé e à ordem pública;
            </p>

            <p className="paragraph politicas montserrat">
              B) Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica, pixbet ou azar, qualquer tipo de pornografia ilegal,
              de apologia ao terrorismo ou contra os direitos humanos;
            </p>

            <p className="paragraph politicas montserrat">
              C) Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) do outserv.com.br, de seus fornecedores ou terceiros,
              para introduzir ou disseminar vírus informáticos ou quaisquer
              outros sistemas de hardware ou software que sejam capazes de
              causar danos anteriormente mencionados.
            </p>

            <h2 className="secondary ritual">Mais informações</h2>
            <hr />

            <p className="paragraph politicas montserrat">
              Esperemos que esteja esclarecido e, como mencionado anteriormente,
              se houver algo que você não tem certeza se precisa ou não,
              geralmente é mais seguro deixar os cookies ativados, caso interaja
              com um dos recursos que você usa em nosso site.
            </p>

            <h2 className="secondary ritual">Acesso aos dados e LGPD</h2>
            <hr />

            <p className="paragraph politicas montserrat">
              Mediante solicitação escrita, a Outserv garante que você terá suas
              requisições de dados atendida, permitindo que você corrija, altere
              ou delete a sua informação pessoal que se demonstrar incorreta ou
              incompleta, também atendemos quaisquer outros pedidos garantidos
              pela LGPD, como anonimização, bloqueio de tratamento, confirmação
              de dados, entre outros. Para realizar sua solicitação entre em
              contato com a Outserv com os dados informados no fim da política.
            </p>

            <p className="paragraph politicas montserrat">
              Esta política é efetiva a partir de 23/06/2024, 10h30 (BRT).
            </p>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};
