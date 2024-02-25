import { useEffect, useState } from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '../../drawer'
import styles from './purchase-drawer.module.scss'
import Select, { SelectOption } from '../../select'
import Button from '../../button'
import { useProductStore } from '../../../stores/product'
import Separator from '../../seperator'
import CountInput from '../../count-input'
import { useCartStore } from '../../../stores/cart'
import { CartType } from '../../../models/cart'
import { formatPrice } from '../../../libs/utils'

type SelectItem = {
    size: number | null
    color: number | null
}

type PurchaseDrawerProps = {
    purchaseType: 'cart' | 'direct'
    children: React.ReactNode
}
export default function PurchaseDrawer({ purchaseType, children }: PurchaseDrawerProps) {
    const { product } = useProductStore()
    const { addCart } = useCartStore()
    const [open, setOpen] = useState(false)
    const [selectItem, setSelectItem] = useState<SelectItem>({ size: null, color: null })
    const [count, setCount] = useState(1)

    useEffect(() => {
        if (!open) {
            setSelectItem({ size: null, color: null })
            setCount(1)
        }
    }, [open, setSelectItem])

    useEffect(() => {
        // 處理購買數量不能高於庫存
        if (selectItem.size === null || selectItem.color === null) {
            setCount(1)
        } else if (selectItem.size !== null && selectItem.color !== null && product) {
            const stock = product.items[selectItem.size].colors[selectItem.color].stock
            if (count > stock) {
                setCount(stock)
            }
        }
    }, [count, product, selectItem])

    if (!product) {
        return <div>查無此訂單</div>
    }

    const handleSelectClick = (key: keyof SelectItem, index: number) => {
        if (index === selectItem[key]) {
            setSelectItem((prevSelectItem) => ({ ...prevSelectItem, [key]: null }))
        } else {
            if (key === 'size' && selectItem.color !== null) {
                const stock = product.items[index].colors[selectItem.color]?.stock
                setSelectItem((prevSelectItem) =>
                    stock ? { ...prevSelectItem, [key]: index } : { size: index, color: null }
                )
            } else {
                setSelectItem((prevSelectItem) => ({ ...prevSelectItem, [key]: index }))
            }
        }
    }

    const handleConfirmClick = () => {
        if (selectItem.size === null || selectItem.color === null || count <= 0) return
        const newCart: CartType = {
            size: product.items[selectItem.size].size,
            color: product.items[selectItem.size].colors[selectItem.color].color,
            count
        }
        if (purchaseType === 'cart') {
            addCart(newCart)
        } else if (purchaseType === 'direct') {
            console.log('直接購買=', newCart)
        }
        setOpen((prev) => !prev)
    }

    const isProductSelected: boolean = selectItem.size !== null && selectItem.color !== null

    const ConfirmBtn = () => {
        switch (purchaseType) {
            case 'cart':
                return (
                    <Button
                        variant='secondary'
                        className={styles.confirmBtn}
                        onClick={handleConfirmClick}
                        disabled={!isProductSelected}
                    >
                        加入購物車
                    </Button>
                )
            case 'direct':
                return (
                    <Button onClick={handleConfirmClick} className={styles.confirmBtn} disabled={!isProductSelected}>
                        直接購買
                    </Button>
                )
            default:
                return null
        }
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger className={styles.trigger} asChild>
                {children}
            </DrawerTrigger>
            <DrawerContent className={styles.footer}>
                <div className={styles.header}>
                    <img src={product.images[0]} className={styles.image} />
                    <div className={styles.info}>
                        <p>{product.name}</p>
                        {isProductSelected && (
                            <p className={styles.price}>
                                ${formatPrice(product.items[selectItem.size!].colors[selectItem.color!].price)}
                            </p>
                        )}
                    </div>
                    <DrawerClose />
                </div>
                <Separator />
                <div className={styles.section}>
                    <div className={styles.label}>
                        <p>尺寸</p>
                        <p className={styles.tips}>補充說明</p>
                    </div>
                    <Select className={styles.select}>
                        {product.items.length > 0 &&
                            product.items.map((item, index) => (
                                <SelectOption
                                    key={item.id}
                                    disabled={!item.colors.find((c) => c.stock > 0)}
                                    selected={selectItem.size === index}
                                    onClick={() => {
                                        handleSelectClick('size', index)
                                    }}
                                >
                                    {item.size}
                                </SelectOption>
                            ))}
                    </Select>
                </div>
                <div className={styles.section}>
                    <div className={styles.label}>
                        <p>顏色</p>
                        <p className={styles.tips}>補充說明</p>
                    </div>
                    <Select className={styles.select}>
                        {selectItem.size !== null &&
                            product.items[selectItem.size].colors &&
                            product.items[selectItem.size].colors.map((item, index) => (
                                <SelectOption
                                    key={item.id}
                                    disabled={item.stock <= 0}
                                    selected={selectItem.color === index}
                                    onClick={() => {
                                        handleSelectClick('color', index)
                                    }}
                                >
                                    {item.color}
                                </SelectOption>
                            ))}
                    </Select>
                </div>
                <Separator />
                <div className={styles.section}>
                    <div className={styles.count}>
                        <div className={styles.label}>購買數量</div>
                        <CountInput
                            max={
                                isProductSelected ? product.items[selectItem.size!].colors[selectItem.color!].stock : 0
                            }
                            disabled={!isProductSelected}
                            count={count}
                            setCount={setCount}
                        />
                    </div>
                    <DrawerClose asChild>{ConfirmBtn()}</DrawerClose>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
