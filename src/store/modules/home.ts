import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, BannerItem, newGoods, HotGoods } from '@/types/data'
export default defineStore('home', {
  state : ()=> ({
    bannerList: [] as BannerItem[],
    newGoodList: [] as newGoods[],
    hotGoodList: [] as HotGoods[]
  }),
  actions: {
    // 轮播图数据
    getBannerList() {
      fetch('http://pcapi-xiaotuxian-front.itheima.net/home/banner')
      .then((jsonData) => jsonData.json())
      .then((res) => {
        if(res.code === '1') this.bannerList = res.result
      })
      .catch((err) => (console.log(`err + ::>>`, err)))
    },
    // 人气推荐数据
    async getRecommend() {
      const newRes = await request.get<ApiRes<newGoods[]>>('/home/new')
      if(newRes.data?.code === '1') this.newGoodList = newRes.data?.result
      const hotRes = await request.get<ApiRes<HotGoods[]>>('/home/hot')
      if(hotRes.data?.code === '1') this.hotGoodList = hotRes.data?.result
    }
  }
})
