import ButtonProps from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon  from './arrow.svg';
// const cn = require('classnames');

export const Button = ({ appearance, arrow, children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, styles[appearance])}
            {...props}
        >
            {children}
            {arrow && <span className={cn(styles.arrow, {[styles.down]: arrow === 'right'})}>
                    <ArrowIcon />
                </span>}
        </button>
    );
}
