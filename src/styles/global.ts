import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{        
        font-size: 1.2rem    

    }

    body{      
        background-color: lightgray;
    }

    #root{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
