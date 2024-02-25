import ProductHeader from '../../components/product/header'
import ProductInfo from '../../components/product/product-info'
import ProductDetail from '../../components/product/product-detail'
import ProductFooter from '../../components/product/footer'
import { PageContent, PageFooter, PageHeader, PageWrapper } from '../../components/page-wrapper'
import { useEffect } from 'react'
import { useProductStore } from '../../stores/product'
import ProductCarousel from '../../components/product/prodoct-carousel'
import { useQuery } from '@tanstack/react-query'
import { API } from '../../api/api'
import NotFound from '../../components/not-found'

type ProductProps = {
    id: string
}
export default function Product({ id }: ProductProps) {
    const { product, setProduct } = useProductStore()
    const { data, isLoading, isError } = useQuery({
        queryKey: [API.query.product.key, id],
        queryFn: () => API.query.product.fn(id)
    })

    useEffect(() => {
        if (data) {
            setProduct(data)
        }
    }, [data, setProduct])

    if (isLoading) {
        return <p>載入中...</p>
    }

    if (isError) {
        return (
            <NotFound>
                <p>發生錯誤</p>
            </NotFound>
        )
    }

    return (
        <PageWrapper>
            <PageHeader>
                <ProductHeader title='街口攻城獅官方商城' />
            </PageHeader>
            {product ? (
                <>
                    <PageContent>
                        <ProductCarousel />
                        <ProductInfo />
                        <ProductDetail />
                    </PageContent>
                    <PageFooter>
                        <ProductFooter />
                    </PageFooter>
                </>
            ) : (
                <NotFound>
                    <p>查無此訂單</p>
                </NotFound>
            )}
        </PageWrapper>
    )
}
