import { HttpResponse, http } from 'msw'
import { mockData } from './data'

export const handlers = [
    http.get('/api/v1/product/1', () => {
        return HttpResponse.json(mockData, { status: 200 })
    })
]
