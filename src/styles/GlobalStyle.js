import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    text-align:center;
}
:root{
    --loading-color:#28415D;
    --standard-color:#7090B3;
    --font-color:#3D3D3B;
}
`;
export default GlobalStyles;
