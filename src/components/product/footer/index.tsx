import Button from '../../button'
import CartButton from '../cart-button'
import PurchaseDrawer from '../purchase-drawer'
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <CartButton />
            <PurchaseDrawer purchaseType='cart'>
                <Button className={styles.btn} variant='secondary'>
                    加入購物車
                </Button>
            </PurchaseDrawer>
            <PurchaseDrawer purchaseType='direct'>
                <Button className={styles.btn}>直接購買</Button>
            </PurchaseDrawer>
        </div>
    )
}
