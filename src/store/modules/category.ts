import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, CategoryItem } from '@/types/data'
import { goodsCategories } from './constants'
const defaultCategory = goodsCategories.map(item => {
  return {
    name: item
  }
}) 
export default defineStore('category', {
  state: ()=> ({
    categoryList: defaultCategory as CategoryItem[]
  }),
  actions: {
    async getAllCategory() {
      const res = await request.get<ApiRes<CategoryItem[]>>('home/category/head')
      if(res.data.code == '1') {
        res.data.result.forEach(item => item.open = false)
        this.categoryList = res.data.result
      }
      // *******************************************************************************************************************************
      /**
       * 尝试下fetch的用法
       * fetch('直接写接口地址')
       * 第一次.then把数据json()下
       * 后面的.then和.catch的数据格式就和Promise一样了
       */
      // fetch('http://pcapi-xiaotuxian-front.itheima.net/home/category/head')
      // .then((res) => res.json())
      // .then((json) => ( console.log(`json + ::>>`, json)))
      // .catch((err) => (console.log(`err + ::>>`, err)))
    },
    // 控制二级菜单显示
    show(id: string) {
      console.log(`1 + ::>>`, )
      const category = this.categoryList.find(item => item.id === id)
      category!.open = true
    },
    // 控制二级菜单隐藏
    hide(id: string) {
      const category = this.categoryList.find(item => item.id === id)
      category!.open = false
    }
  }
})