import { HTMLAttributes } from 'react'
import styles from './select.module.scss'
import classNames from 'classnames'
import Button from '../button'

type SelectProps = {
    children: React.ReactNode
    className?: string
}
export default function Select({ children, className }: SelectProps) {
    return <div className={classNames(styles.select, className)}>{children}</div>
}

export interface SelectOptionProps extends HTMLAttributes<HTMLButtonElement> {
    selected?: boolean
    disabled?: boolean
}
function SelectOption({ selected = false, disabled = false, children, className, ...props }: SelectOptionProps) {
    const selectedStyle = selected ? 'selected' : ''
    return (
        <Button
            variant='outline'
            className={classNames(styles.option, { [styles[`option-${selectedStyle}`]]: true }, className)}
            disabled={disabled}
            {...props}
        >
            {children}
        </Button>
    )
}

export { Select, SelectOption }
