import { HTMLAttributes, forwardRef, useContext } from 'react'
import { DrawerContext } from '../contexts/contexts'
import styles from './drawer.module.scss'
import classNames from 'classnames'
import Icons from '../ui/icons'
import { createPortal } from 'react-dom'
import Button from '../button'

type DrawerProps = {
    open: boolean
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}
function Drawer({ open, onOpenChange, children }: DrawerProps) {
    const toggleDrawer = () => {
        onOpenChange(!open)
    }

    return <DrawerContext.Provider value={{ isOpen: open, toggleDrawer }}>{children}</DrawerContext.Provider>
}
Drawer.displayName = 'Drawer'

interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export type Ref = HTMLDivElement
const DrawerContent = forwardRef<Ref, DrawerContentProps>(({ className, children, ...props }, ref) => {
    const { isOpen, toggleDrawer } = useDrawerContext()
    const contentType = isOpen ? 'show' : 'hide'

    return createPortal(
        <div className={classNames({ [styles[`view-${contentType}`]]: true })}>
            {isOpen && <div className={styles.overlay} onClick={toggleDrawer}></div>}
            <div
                ref={ref}
                className={classNames(styles.content, { [styles[`content-${contentType}`]]: true }, className)}
                {...props}
            >
                {children}
            </div>
        </div>,

        document.body
    )
})
DrawerContent.displayName = 'DrawerContent'

interface DrawerTriggerProps extends HTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}
function DrawerTrigger({ asChild, className, children }: DrawerTriggerProps) {
    const { toggleDrawer } = useDrawerContext()
    return (
        <div className={className} onClick={toggleDrawer}>
            {asChild ? <>{children}</> : <Button className={styles.trigger}>{children}</Button>}
        </div>
    )
}

interface DrawerCloseProps {
    asChild?: boolean
    children?: React.ReactNode
}
function DrawerClose({ asChild, children }: DrawerCloseProps) {
    const { toggleDrawer } = useDrawerContext()
    return asChild ? (
        <>{children}</>
    ) : (
        <Icons.close className={styles.close} color='#8D8E96' width='2rem' height='2rem' onClick={toggleDrawer} />
    )
}

function useDrawerContext() {
    const context = useContext(DrawerContext)
    if (!context) {
        throw Error('useDrawerContext has to be used within <DrawerContext.Provider>')
    }
    return context
}

export { Drawer, DrawerTrigger, DrawerContent, DrawerClose }
