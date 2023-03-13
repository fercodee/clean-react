import { faker } from '@faker-js/faker'
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
    // Create axios cache
    const mockAxios = axios as jest.Mocked<typeof axios>
    mockAxios.post.mockResolvedValue({
        data: faker.animal.cat(),
        status: faker.random.numeric()
    })
    return mockAxios
}
