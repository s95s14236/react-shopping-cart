import Button from '../button'
import styles from './not-found.module.scss'

type NotFoundProps = {
    children?: React.ReactNode
}
export default function NotFound({ children }: NotFoundProps) {
    const handleRetryClick = () => {
        window.location.reload()
    }

    return (
        <div className={styles.notFound}>
            {children}
            <Button onClick={handleRetryClick}>重新嘗試</Button>
        </div>
    )
}
