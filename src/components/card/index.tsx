import { HTMLAttributes, forwardRef } from 'react'
import styles from './card.module.scss'
import classNames from 'classnames'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export type Ref = HTMLDivElement

const Card = forwardRef<HTMLDivElement, CardProps>(function ({ className, ...props }, ref) {
    return (
        <div className={classNames(styles.card, className)} ref={ref} {...props}>
            {props.children}
        </div>
    )
})

Card.displayName = 'Card'

export default Card
