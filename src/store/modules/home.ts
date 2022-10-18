import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, BannerItem } from '@/types/data'
export default defineStore('home', {
  state : ()=> ({
    bannerList: [] as BannerItem[]
  }),
  actions: {
    getBannerList() {
      fetch('http://pcapi-xiaotuxian-front.itheima.net/home/banner')
      .then((jsonData) => jsonData.json())
      .then((res) => {
        if(res.code === '1') this.bannerList = res.result
      })
      .catch((err) => (console.log(`err + ::>>`, err)))
    },
    



    
  }
})
