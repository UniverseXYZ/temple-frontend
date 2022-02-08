export const Avatar = {
  // style object for base or default style
  baseStyle: ({ colorMode }) => ({
    borderColor: colorMode === 'light' ? '#f2f2f2' : '#333',
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {},
};
