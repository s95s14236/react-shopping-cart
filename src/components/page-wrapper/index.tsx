import styles from './page-wrapper.module.scss'

type WrapperProps = {
    children?: React.ReactNode
}
function PageWrapper({ children }: WrapperProps) {
    return <div className={styles.wrapper}>{children}</div>
}

type HeaderProps = {
    children?: React.ReactNode
}
function PageHeader({ children }: HeaderProps) {
    return <div className={styles.header}>{children}</div>
}

type ContentProps = {
    children?: React.ReactNode
}
function PageContent({ children }: ContentProps) {
    return <div className={styles.content}>{children}</div>
}

type FooterProps = {
    children?: React.ReactNode
}
function PageFooter({ children }: FooterProps) {
    return <div className={styles.footer}>{children}</div>
}

export { PageWrapper, PageHeader, PageContent, PageFooter }
