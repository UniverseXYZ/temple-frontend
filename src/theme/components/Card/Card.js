export const Card = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    whitebox: ({ colorMode }) => ({
      bg: colorMode === 'light' ? 'white' : '#1d1d1d',
      boxShadow:
        colorMode === 'light'
          ? '0px 10px 35px rgba(136 120 172 / 15%)'
          : '0 0 0 1px rgba(255 255 255 / 10%)',
      borderRadius: 12,
    }),
    bordered: ({ colorMode }) => ({
      bg: colorMode === 'light' ? 'white' : '#1d1d1d',
      borderRadius: 12,
      transition: 'box-shadow 0.2s ease-in-out',
      boxShadow:
        colorMode === 'light'
          ? '0 0 0 1px rgba(0 0 0 / 10%)'
          : '0 0 0 1px rgba(255 255 255 / 10%)',

      _hover: {
        boxShadow:
          colorMode === 'light'
            ? '0px 0px 30px rgba(0 0 0 / 20%)'
            : '0 0 0 1px rgba(255 255 255 / 10%)',
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {},
};
