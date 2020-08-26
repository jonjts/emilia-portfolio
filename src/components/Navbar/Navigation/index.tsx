import React from 'react';
import { useLocation } from "react-router-dom";

import { Nav } from "./styles";
import {
    NavLink,
    NavItem,
} from "reactstrap";

interface INavigation {
    navbar?: boolean
}

const Navigation: React.FC<INavigation> = ({ navbar }) => {

    const location = useLocation()

    return (
        <Nav navbar={navbar}>
            <NavItem
                active={location.pathname === '/home'}
            >
                <NavLink className='mr-2' href="/home">Home</NavLink>
            </NavItem>
            <NavItem
                active={location.pathname === '/quem-sou'}
            >
                <NavLink className='mr-2' href="/quem-sou">Quem Sou?</NavLink>
            </NavItem>
            <NavItem
                active={location.pathname === '/indicadores'}
            >
                <NavLink className='mr-2' href="/indicacoes">Indicações</NavLink>
            </NavItem>
            <NavItem
                active={location.pathname === '/contato'}
            >
                <NavLink className='mr-2' href="/contato">Contato</NavLink>
            </NavItem>
        </Nav>
    )
}

export default Navigation;