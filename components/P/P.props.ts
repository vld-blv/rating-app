import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>  {
    children: ReactNode;
    size?: 's' | 'm' | 'l';
}
