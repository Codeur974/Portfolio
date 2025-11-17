import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonical
}) {
  const baseUrl = 'https://www.codeur974.com';
  const defaultImage = `${baseUrl}/images/logo.png`;

  const fullTitle = title ? `${title} | Codeur974` : 'Codeur974 - Développeur Web Freelance Next.js & React | Création Sites Web France';
  const ogTitleFinal = ogTitle || title || 'Codeur974 - Développeur Web Freelance Next.js & React';
  const ogDescriptionFinal = ogDescription || description;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const ogImageUrl = ogImage || defaultImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitleFinal} />
      <meta property="og:description" content={ogDescriptionFinal} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={ogTitleFinal} />
      <meta name="twitter:description" content={ogDescriptionFinal} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,
  canonical: PropTypes.string
};

export default SEO;
