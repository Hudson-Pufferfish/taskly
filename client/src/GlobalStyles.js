import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    /* TODO Add site wide styles */

    * {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      /* width: fit-content; */
    }

    ul {
      list-style: none;
    }

    .flex-row {
      display: flex;
    }

    .flex-column {
      display: flex;
      flex-direction: column;
    }

    :root {
      --input-outline-color: #4c9aff;
    }
`;
