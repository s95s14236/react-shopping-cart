import styles from './header.module.scss'
import Icons from '../../ui/icons'

type HeaderProps = {
    title: string
}

export default function Header({ title }: HeaderProps) {
    return (
        <div className={styles.header}>
            <Icons.arrowLeft className={styles.leftIcon} height='1.5rem' width='1.5rem' />
            {title}
        </div>
    )
}
