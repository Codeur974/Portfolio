import PropTypes from 'prop-types';

function OptimizedImage({ src, alt, width, height, loading = 'lazy', className }) {
  // Convertir .jpg/.png en .webp pour le format moderne
  const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
        decoding="async"
      />
    </picture>
  );
}

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  className: PropTypes.string
};

export default OptimizedImage;
