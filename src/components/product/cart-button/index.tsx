import { useCartStore } from '../../../stores/cart'
import Badge from '../../badge'
import Icons from '../../ui/icons'
import styles from './cart-button.module.scss'

// type CartButtonProps = {}

export default function CartButton() {
    const { cart } = useCartStore()

    const handleCartClick = () => {
        console.log('購物車規格數量=', cart)
        alert(`購物車規格數量=${JSON.stringify(cart)}`)
    }

    return (
        <div className={styles.cartButton} onClick={handleCartClick}>
            <Icons.cart height='1.6rem' width='1.6rem' />
            購物車
            {cart.length > 0 && <Badge className={styles.cartBadge}>{cart.length}</Badge>}
        </div>
    )
}
