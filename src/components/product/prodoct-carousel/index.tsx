import { useProductStore } from '../../../stores/product'
import Carousel from '../../carousel'
import styles from './prodoct-carousel.module.scss'

export default function ProductCarousel() {
    const { product } = useProductStore()

    return (
        product &&
        product.images.length > 0 && (
            <div className={styles.carousel}>
                <Carousel images={product.images} />
            </div>
        )
    )
}
