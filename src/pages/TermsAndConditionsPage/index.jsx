import CookieConsent from "../../../components/CookieModal/CookieConsent";
import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import { Tag } from "../../../components/buttons/Tag";
import styles from "./style.module.scss";

export const TermsAndConditionsPage = () => {
  const handleLinkClick = (event, id) => {
    event.preventDefault();
    if (id === "top") {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    } else {
      const targetSection = document.getElementById(id);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 110,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <DefaultTemplate>
      <OffCanvasContato />
      <CookieConsent />
      <div className={styles.container}>
        <div className={`${styles.header}`}>
          <div className={styles.headerContent}>
            <Tag className="primary" content="Legal" />
            <h1 className="title one secondary">Termos de uso</h1>
          </div>
        </div>
        <div className={styles.information}>
          <div className={`${styles.content}`}>
            <h2 id="item1" className={`${styles.section} secondary ritual`}>
              1 – Termos
            </h2>
            <hr />

            <p className="paragraph politicas montserrat">
              Ao acessar ao site outserv.com.br, concorda em cumprir estes
              termos de serviço, todas as leis e regulamentos aplicáveis ​​e
              concorda que é responsável pelo cumprimento de todas as leis
              locais aplicáveis. Se você não concordar com algum desses termos,
              está proibido de usar ou acessar este site. Os materiais contidos
              neste site são protegidos pelas leis de direitos autorais e marcas
              comerciais aplicáveis.
            </p>

            <h2 id="item2" className={`${styles.section} secondary ritual`}>
              2 – Uso de Licença
            </h2>
            <hr />

            <p className="paragraph politicas montserrat">
              É concedida permissão para baixar temporariamente uma cópia dos
              materiais (informações ou software) no site outserv.com.br ,
              apenas para visualização transitória pessoal e comercial. Esta é a
              concessão de uma licença, não uma transferência de título e, sob
              esta licença, você não pode:
            </p>
            <p className="paragraph politicas montserrat">
              1. Modificar ou copiar os materiais;
            </p>
            <p className="paragraph politicas montserrat">
              2. Usar os materiais para qualquer finalidade comercial ou para
              exibição pública (comercial ou não comercial); {" "}
            </p>
            <p className="paragraph politicas montserrat">
              3. Tentar decompilar ou fazer engenharia reversa de qualquer
              software contido no site outserv.com.br; {" "}
            </p>
            <p className="paragraph politicas montserrat">
              4. Remover quaisquer direitos autorais ou outras notações de
              propriedade dos materiais; ou {" "}
            </p>
            <p className="paragraph politicas montserrat">
              5. Transferir os materiais para outra pessoa ou 'espelhe' os
              materiais em qualquer outro servidor. Esta licença será
              automaticamente rescindida se você violar alguma dessas restrições
              e poderá ser rescindida por outserv.com.br a qualquer momento. Ao
              encerrar a visualização desses materiais ou após o término desta
              licença, você deve apagar todos os materiais baixados em sua
              posse, seja em formato eletrônico ou impresso.{" "}
            </p>
            <hr />

            <p className="paragraph politicas montserrat"></p>

            <h2 id="item3" className={`${styles.section} secondary ritual`}>
              3. Isenção de responsabilidade
            </h2>
            <hr />

            <p className="paragraph politicas montserrat">
              Os materiais no site da Outserv são fornecidos 'como estão'.
              outserv.com.br não oferece garantias, expressas ou implícitas, e,
              por este meio, isenta e nega todas as outras garantias, incluindo,
              sem limitação, garantias implícitas ou condições de
              comercialização, adequação a um fim específico ou não violação de
              propriedade intelectual ou outra violação de direitos.
            </p>

            <h2 id="item3" className={`${styles.section} secondary ritual`}>
              4. Limitações
            </h2>
            <hr />

            <p className="paragraph politicas montserrat">
              Em nenhum caso o outserv.com.br ou seus fornecedores serão
              responsáveis ​​por quaisquer danos (incluindo, sem limitação,
              danos por perda de dados ou lucro ou devido a interrupção dos
              negócios) decorrentes do uso ou da incapacidade de usar os
              materiais em outserv.com.br, mesmo que a Outserv ou um
              representante autorizado da outserv.com.br tenha sido notificado
              oralmente ou por escrito da possibilidade de tais danos. Como
              algumas jurisdições não permitem limitações em garantias
              implícitas, ou limitações de responsabilidade por danos
              consequentes ou incidentais, essas limitações podem não se aplicar
              a você.
            </p>

            <h2 id="item3" className={`${styles.section} secondary ritual`}>
              5. Precisão dos materiais
            </h2>
            <hr />

            <p className="paragraph politicas montserrat">
              Os materiais exibidos no site da Outserv podem incluir erros
              técnicos, tipográficos ou fotográficos. outserv.com.br não garante
              que qualquer material em seu site seja preciso, completo ou atual.
              outserv.com.br pode fazer alterações nos materiais contidos em seu
              site a qualquer momento, sem aviso prévio. No entanto,
              outserv.com.br não se compromete a atualizar os materiais.
            </p>

            <h2 id="item3" className={`${styles.section} secondary ritual`}>
              6. Links
            </h2>
            <hr />

            <p className="paragraph politicas montserrat">
              A Outserv não analisou todos os sites vinculados ao seu site e não
              é responsável pelo conteúdo de nenhum site vinculado. A inclusão
              de qualquer link não implica endosso por outserv.com.br do site. O
              uso de qualquer site vinculado é por conta e risco do usuário.
            </p>

            <h3 id="item3" className={`${styles.section} secondary ritual`}>
              Modificações
            </h3>

            <p className="paragraph politicas montserrat">
              O outserv.com.br pode revisar estes termos de serviço do site a
              qualquer momento, sem aviso prévio. Ao usar este site, você
              concorda em ficar vinculado à versão atual desses termos de
              serviço.
            </p>

            <h3 id="item3" className={`${styles.section} secondary ritual`}>
              Lei aplicável
            </h3>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com
              as leis do país e estado da empresa Outserv e você se submete
              irrevogavelmente à jurisdição exclusiva dos tribunais naquele
              estado ou localidade.
            </p>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};
