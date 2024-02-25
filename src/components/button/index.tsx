import classNames from 'classnames'
import styles from './button.module.scss'
import { ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'default' | 'secondary' | 'outline'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { className, variant = 'default', ...props },
    ref
) {
    return (
        <button
            className={classNames({ [styles[`btn-${variant}`]]: true }, styles.btn, className)}
            ref={ref}
            {...props}
        >
            {props.children}
        </button>
    )
})

Button.displayName = 'Button'

export default Button
