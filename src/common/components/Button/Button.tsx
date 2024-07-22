
import MaterialButton from '@mui/material/Button';
import Link from '@mui/material/Link';
interface ButtonProps {
    onClick: () => void;
    href:string,
    isLink: boolean;
    value: string | number;
    backgroundColor: '#F2B704' | '#F2CB05' | '#6503A6'
    borderColor: '#F2B704' | '#F2CB05' | '#6503A6',
    border: string,
    outlineColor: '#F2B704' | '#F2CB05' | '#6503A6',
    color: '#F2B704' | '#F2CB05' | '#6503A6'
}
const Button = (props: ButtonProps) => {
if(props.isLink){
return (
    <Link href={props.href}>Link</Link>
)
}
else{
    return (
            <MaterialButton onClick={props.onClick}
                style={{
                    backgroundColor: props.backgroundColor,
                    borderColor: props.borderColor,
                    border: props.border,
                    outlineColor: props.outlineColor,
                    color: props.color
                }}
            >
                {props.value},
                {props.isLink}
            </MaterialButton>
    )
}
   
}
export default Button;
