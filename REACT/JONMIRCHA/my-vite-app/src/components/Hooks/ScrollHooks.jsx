import React, { useState, useEffect } from 'react';

export function ScrollHooks(){

    const [scrollY, setscrollY] = useState(0);

    const [name, setname] = useState ("Jhon");

    useEffect(() => {
        //console.log("Moviendo el scroll");

        const detectarScroll = () => setscrollY(window.pageYOffset);

        window.addEventListener('scroll', detectarScroll);

        return () => {window.removeEventListener('scroll', detectarScroll)};
    }, [scrollY]);

    useEffect(() => {
        //console.log("Fase de montaje");
    }, []);

    useEffect(() => {
        //console.log("Fase de Actualización");
    });

    useEffect(() => {
        return () => {
            //console.log("Fase de desmontaje");
        }
    });
    
    return(
        <>
            <h2>Hooks - use Effect y el Ciclo de Vida</h2>
            <p>Scroll Y del Navegador {scrollY} px</p>
        </>
    )
}