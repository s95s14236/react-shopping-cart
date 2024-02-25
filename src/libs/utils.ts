/**
 * 轉換價格顯示之字串格式 (含逗號)
 *
 * @param price 價格
 * @returns 顯示價格字串
 */
export function formatPrice(price: number) {
    const parts = price.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
}
