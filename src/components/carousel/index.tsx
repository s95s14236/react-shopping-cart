import { MouseEvent, TouchEvent, useRef, useState } from 'react'
import styles from './carousel.module.scss'
import Badge from '../badge'

const widthSpan = 100.1

type CarouselProps = {
    images: string[]
}
export default function Carousel({ images }: CarouselProps) {
    const [sliderPosition, setSliderPosition] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)
    const touchStartPosition = useRef(0)
    const touchEndPosition = useRef(0)
    const touched = useRef(false)
    const swiped = useRef(false)

    const mouseStartPosition = useRef(0)
    const mouseEndPosition = useRef(0)
    const mouseClicked = useRef(false)
    const mouseSwiped = useRef(false)

    function prevSlideHandler() {
        let newPosition = sliderPosition
        if (newPosition > 0) {
            newPosition -= 1
        }
        translateFullSlides(newPosition)
        setSliderPosition(newPosition)
    }

    function nextSlideHandler() {
        let newPosition = sliderPosition
        if (newPosition < images.length - 1) {
            newPosition += 1
        }
        translateFullSlides(newPosition)
        setSliderPosition(newPosition)
    }

    function touchStartHandler(e: TouchEvent) {
        touchStartPosition.current = e.touches[0].clientX
        touchEndPosition.current = e.touches[0].clientX
        touched.current = true
    }

    function touchMoveHandler(e: TouchEvent) {
        touchEndPosition.current = e.touches[0].clientX
        if (!carouselRef.current) return
        const frameWidth = carouselRef.current.offsetWidth
        const translateDist = ((touchEndPosition.current - touchStartPosition.current) / frameWidth) * 100
        translatePartialSlides(translateDist)
        if (touched.current) {
            swiped.current = true
        }
    }

    function touchEndHandler() {
        if (swiped.current) {
            if (touchStartPosition.current - touchEndPosition.current > 75) {
                nextSlideHandler()
            } else if (touchStartPosition.current - touchEndPosition.current < -75) {
                prevSlideHandler()
            } else {
                jumpToSlider(sliderPosition)
            }
        }
    }

    function mouseStartHandler(e: MouseEvent) {
        e.preventDefault()
        mouseStartPosition.current = e.clientX
        mouseEndPosition.current = e.clientX
        mouseClicked.current = true
    }

    function mouseMoveHandler(e: MouseEvent) {
        e.preventDefault()
        if (!carouselRef.current) return
        const frameWidth = carouselRef.current.offsetWidth
        if (mouseClicked.current) {
            mouseEndPosition.current = e.clientX
            const translateDist = ((mouseEndPosition.current - mouseStartPosition.current) / frameWidth) * 100
            translatePartialSlides(translateDist)
            mouseSwiped.current = true
        }
    }

    function mouseEndHandler() {
        if (mouseSwiped.current) {
            if (mouseStartPosition.current - mouseEndPosition.current > 75) {
                nextSlideHandler()
            } else if (mouseStartPosition.current - mouseEndPosition.current < -75) {
                prevSlideHandler()
            } else {
                jumpToSlider(sliderPosition)
            }
        }
        mouseClicked.current = false
        mouseSwiped.current = false
    }

    function translatePartialSlides(toTranslate: number) {
        const currentTranslation = -sliderPosition * widthSpan
        const totalTranslation = currentTranslation + toTranslate
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(${totalTranslation}%)`
        }
    }

    function translateFullSlides(newPosition: number) {
        const toTranslate = -widthSpan * newPosition
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(${toTranslate}%)`
        }
    }

    function jumpToSlider(position: number) {
        translateFullSlides(position)
        setSliderPosition(position)
    }

    return (
        <div className={styles.carouselBox}>
            <div
                className={styles.carousel}
                ref={carouselRef}
                onTouchStart={touchStartHandler}
                onTouchMove={touchMoveHandler}
                onTouchEnd={touchEndHandler}
                onMouseDown={mouseStartHandler}
                onMouseMove={mouseMoveHandler}
                onMouseUp={mouseEndHandler}
                onMouseLeave={mouseEndHandler}
            >
                <img className={styles.img} src={images[0]} />
                <img className={styles.img} src={images[0]} />
                <img className={styles.img} src={images[0]} />
                <img className={styles.img} src={images[0]} />
                <img className={styles.img} src={images[0]} />
            </div>
            <Badge className={styles.badge}>
                {sliderPosition + 1}/{images.length}
            </Badge>
        </div>
    )
}
