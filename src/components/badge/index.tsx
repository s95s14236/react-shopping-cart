import { HTMLAttributes } from 'react'
import styles from './badge.module.scss'
import classNames from 'classnames'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

export default function Badge({ className, ...props }: BadgeProps) {
    return <div className={classNames(styles.badge, className)} {...props}></div>
}
