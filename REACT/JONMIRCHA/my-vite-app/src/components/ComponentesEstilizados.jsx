import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';

export default function ComponentesEstilizados () {
    let mainColor = '#db7093',
        mainAlphaCOlor80 = '#db709380';

    const setTransitionTime = (time) => `all ${time} ease-in-out`;

    const fadeIn = keyframes`
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    `;

    const MyH3 = styled.h3`
        padding:2rem;
        text-align: center;
        color: ${props => props.color};
        color: ${({color}) => color};
        color: ${({color}) => color || '#000'};
        background-color: ${mainColor};
        transition: ${setTransitionTime('1s')};
        animation: ${fadeIn} 2s ease-out;

        ${({isButton}) => isButton && css`
            margin: auto;
            max-width: 10%;
            border-radius: .5rem;
            cursor:all-scroll;
        `}

        &:hover{
            background-color: ${mainAlphaCOlor80};
        };
        `;

        const light = {
            color: '#222',
            bgColor: '#DDD',
        };

        const dark = {
            color: '#DDD',
            bgColor: '#222',
        };

        const Box = styled.div`
            padding: 1rem;
            margin: 1rem;
            color: ${({theme}) => theme.color};
            background-color: ${({theme}) => theme.bgColor};
        `;

        const BoxRounded = styled(Box)`
            border-radius: 1rem;
        `;

        const GlobalStyle = createGlobalStyle`
            h2{
                padding: 2rem;
                background-color: #9898f5;
                text-transform: uppercase;
            };
        `

    return (
        <>
        <GlobalStyle></GlobalStyle>

            <h2>Styled Components</h2>
            <MyH3>Hola soy Un H3 Estilizado con styled-components</MyH3>
            <MyH3 color="#61dafb">Hola soy Un H3 Estilizado con styled-components</MyH3>
            <MyH3 isButton>Soy un H3 estilizado como botón</MyH3>
            <ThemeProvider theme={light}>
              <Box>Soy una caja ligth</Box>
              <BoxRounded>Soy una caja redondeada ligth</BoxRounded>
            </ThemeProvider>

            <ThemeProvider theme={dark}>
              <Box>Soy una caja dark</Box>
              <BoxRounded>Soy una caja redondeada dark</BoxRounded>
            </ThemeProvider>
        </>
    )
}