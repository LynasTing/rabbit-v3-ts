import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, BannerItem, NewGoods, HotGoods, Brand, HomeProduct, Special } from '@/types/data'
export default defineStore('home', {
  state : ()=> ({
    bannerList: [] as BannerItem[],
    newGoodList: [] as NewGoods[],
    hotGoodList: [] as HotGoods[],
    brandList: [] as Brand[],
    productList: [] as HomeProduct[],
    specialList: [] as Special[]
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
      const newRes = await request.get<ApiRes<NewGoods[]>>('/home/new')
      if(newRes.data?.code === '1') this.newGoodList = newRes.data?.result
      const hotRes = await request.get<ApiRes<HotGoods[]>>('/home/hot')
      if(hotRes.data?.code === '1') this.hotGoodList = hotRes.data?.result
    },
    // 热门品牌数据
    async getBrandList() {
      const res = await request.get<ApiRes<Brand[]>>('/home/brand')
      if(res.data?.code === '1') this.brandList = res.data?.result
    },
    // 商品区域数据
    async getProductList() {
      const res = await request.get<ApiRes<HomeProduct[]>>('/home/goods')
      if(res.data?.code === '1') this.productList = res.data?.result
    },
    // 最新专题
    async getSpecialList() {
      const res = await request.get<ApiRes<Special[]>>('/home/special')
      if(res.data?.code === '1') this.specialList = res.data?.result
    },
  }
})
