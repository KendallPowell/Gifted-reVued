import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { logger } from "../utils/Logger"
import { giftApi } from "./AxiosService"



class GiftsService {
    async getGifts() {
        const res = await giftApi.get()
        logger.log('got gifts', res.data)
        AppState.gifts = res.data.results.map(g => new Gift(g))
    }
}

export const giftsService = new GiftsService()