import { ChangeEvent } from 'react'
import Button from '../button'
import Icons from '../ui/icons'
import styles from './count-input.module.scss'

type CountInputProps = {
    max: number
    disabled?: boolean
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}
export default function CountInput({ max, disabled = false, count, setCount }: CountInputProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) < 1) {
            setCount(1)
        } else if (Number(event.target.value) > max) {
            setCount(max)
        } else {
            setCount(Number(event.target.value))
        }
    }

    const handlerIncrease = () => {
        if (count < max) {
            setCount((prev) => prev + 1)
        }
    }

    const handlerDecrease = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
        }
    }

    return (
        <div className={styles.countContainer}>
            <Button
                variant='secondary'
                className={styles.countBtn}
                disabled={disabled || count <= 1}
                onClick={handlerDecrease}
            >
                <Icons.minus width='1.3rem' height='1.3rem' color={disabled || count <= 1 ? '#575964' : '#fff'} />
            </Button>
            <input
                type='number'
                className={styles.countInput}
                value={count}
                disabled={disabled}
                onChange={handleChange}
            />
            <Button
                variant='secondary'
                className={styles.countBtn}
                disabled={disabled || count >= max}
                onClick={handlerIncrease}
            >
                <Icons.add width='1.3rem' height='1.3rem' color={disabled || count >= max ? '#575964' : '#fff'} />
            </Button>
        </div>
    )
}
