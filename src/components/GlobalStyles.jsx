import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles
    = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  color: #27374D;
  background-color: #DDE6ED;
    margin: 0;
};

img {
  display: block;
  max-width: 100%;
  height: auto;
};

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,
ol {
 margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
};

button {
  cursor: pointer;
}

a {
    text-decoration: none;
}
`