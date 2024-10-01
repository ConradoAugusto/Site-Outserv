import { Helmet } from 'react-helmet';

const RouteWrapper = ({ title, canonical, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={canonical} />
      </Helmet>
      {children}
    </>
  );
};

export default RouteWrapper;
