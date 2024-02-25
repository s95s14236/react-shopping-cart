const Icons = {
    arrowLeft: (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
        <svg fill='currentColor' viewBox='0 0 16 16' height='1em' width='1em' {...props}>
            <path
                fillRule='evenodd'
                d='M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z'
            />
        </svg>
    ),
    cart: (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
        <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            viewBox='0 0 24 24'
            height='1em'
            width='1em'
            {...props}
        >
            <path d='M10 21 A1 1 0 0 1 9 22 A1 1 0 0 1 8 21 A1 1 0 0 1 10 21 z' />
            <path d='M21 21 A1 1 0 0 1 20 22 A1 1 0 0 1 19 21 A1 1 0 0 1 21 21 z' />
            <path d='M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6' />
        </svg>
    ),
    close: (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
        <svg fill='none' viewBox='0 0 24 24' height='1em' width='1em' {...props}>
            <path
                fill='currentColor'
                d='M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z'
            />
        </svg>
    ),
    add: (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
        <svg viewBox='0 0 512 512' fill='currentColor' height='1em' width='1em' {...props}>
            <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={32}
                d='M256 112v288M400 256H112'
            />
        </svg>
    ),
    minus: (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
        <svg viewBox='0 0 512 512' fill='currentColor' height='1em' width='1em' {...props}>
            <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={32}
                d='M400 256H112'
            />
        </svg>
    )
}

export default Icons
