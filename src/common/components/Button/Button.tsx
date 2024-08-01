import MaterialButton from '@mui/material/Button';
import Link from '@mui/material/Link';
import React from 'react';
import theme from '../../../Theme';

interface ButtonProps {
    onClick?: () => void;
    href?: string;
    isLink?: boolean;
    color?: "primary"|"secondary" | "success";
    component?:"button" | "label" | "span" ;
    type?: 'button' | 'submit' | 'reset' | 'span';
    disabled?:boolean;
    size?:"small"|"medium"|"large"   
    variant?:"outlined"|"contained" |"text";
    tabIndex?: -1|1
    children?: React.ReactNode;
    startIcon?: JSX.Element; 
    autoFocus?:boolean;
    style?: React.CSSProperties;
}

const Button = (props: ButtonProps) => {
    const {
        onClick,
        href,
        isLink=false,
        type,
        color='primary',
        disabled=false,
        size='medium',
        variant='contained',
        component='button',
        tabIndex=1,
        children,
        startIcon,
        autoFocus,
        style

    } = props;

   
    if (isLink==true) {
        return <Link href={href}>{children}</Link>;
    }

    else {
        return (
        
                <MaterialButton
                    onClick={onClick}
                    type={type}
                    disabled={disabled}
                    variant={variant}
                    size={size}
                    component={component}
                    color={color}
                    tabIndex={tabIndex}
                    startIcon={startIcon}
                    autoFocus={autoFocus}
                    style={style}
                >
                    {children}
                </MaterialButton>
           
        );
    }
};

export default Button;
