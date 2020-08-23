import React from 'react';

import { TitleContainer } from './styles';

interface IHeader {
    title: string,
    subtitle: string
}

const Header: React.FC<IHeader> = ({ title, subtitle }) => {
    return (
        <TitleContainer>
            <label className='subtitle'>
                {title}
            </label>
            <label className='title'>
                {subtitle}
            </label>
        </TitleContainer>
    )
}

export default Header;