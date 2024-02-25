import classNames from 'classnames'
import Badge from '../../badge'
import Card from '../../card'
import Separator from '../../seperator'
import styles from './product-info.module.scss'
import { useProductStore } from '../../../stores/product'
import { formatPrice } from '../../../libs/utils'

export default function ProductInfo() {
    const { product } = useProductStore()

    return (
        product && (
            <Card>
                <div className={styles.name}>{product.name}</div>
                <div className={classNames('flex-center', styles.priceContainer)}>
                    <div className={styles.price}>
                        ${formatPrice(product.price.min)} - ${formatPrice(product.price.max)}
                    </div>
                    <div className={styles.oriPrice}>
                        ${formatPrice(product.price.oriMin)} - ${formatPrice(product.price.oriMax)}
                    </div>
                </div>
                <div className={styles.badgeContainer}>
                    {product.tags.length > 0 && product.tags.map((tag, index) => <Badge key={index}>{tag}</Badge>)}
                </div>
                <Separator />
                <ul className={styles.tip}>
                    {product.tips.length > 0 && product.tips.map((tip, index) => <li key={index}>{tip}</li>)}
                </ul>
            </Card>
        )
    )
}
