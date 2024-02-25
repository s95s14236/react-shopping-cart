import { useProductStore } from '../../../stores/product'
import Card from '../../card'
import Separator from '../../seperator'
import styles from './product-detail.module.scss'

export default function ProductDetail() {
    const { product } = useProductStore()

    return (
        product && (
            <Card>
                {product.deatails.length > 0 &&
                    product.deatails.map((detail, index) => (
                        <div key={index}>
                            <div className={styles.content}>
                                <div className={styles.label}>{detail.title}</div>
                                <p className={styles.text}>{detail.value}</p>
                            </div>
                            {product.deatails.length - 1 !== index && <Separator />}
                        </div>
                    ))}
            </Card>
        )
    )
}
