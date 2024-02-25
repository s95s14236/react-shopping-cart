// declare module '*.module.css'
// declare module '*.module.scss'

declare module '*.css' {
    const content: Record<string, string>
    export default content
}

declare module '*.scss' {
    const content: Record<string, string>
    export default content
}
