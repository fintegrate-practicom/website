import MaterialTypography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import React from 'react';
import theme from '../../../Theme';
import { ThemeProvider } from '@emotion/react';

interface TypographyProps {
    variant?: "h1"|"h4"|"h5"|"h6"|"subtitle1" |"body1" | "body2" ;
    children?: React.ReactNode;
    component?: string;
    gutterBottom?: boolean;
    align?:string;
    color?: "primary"|"secondary" | "success"  | "textSecondary" | "error" | "black";
    style?: React.CSSProperties;
    className?:string

}

const Typography = (props: TypographyProps) => {
    const {
        variant="body1",
        children,
        component,
        gutterBottom = false,
        align,
        color,
        style,
    } = props;
  
   
   
        return (
            <>
            <ThemeProvider theme={theme}>
                <MaterialTypography 
                gutterBottom={gutterBottom}
                variant={variant}
                component={component}
                align={align}
                color={color}
                style={style}>
                    {children}
                </MaterialTypography>
                </ThemeProvider>
                </>
        
        );
 
};

export default Typography;