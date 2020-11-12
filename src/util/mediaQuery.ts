export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  small: mediaQuery(480),
  medium: mediaQuery(1024),
  large: mediaQuery(1025),
  custom: mediaQuery,
  size: {
    small: '480px',
    medium: '1024px',
    large: '1025px',
  },
};

export const viewWidth = window.innerWidth;

export default media;
