import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, CategoryItem, TopCategory } from '@/types/data'
import { goodsCategories } from './constants'
const defaultCategory = goodsCategories.map(item => {
  return {
    name: item
  }
}) 
export default defineStore('category', {
  state: ()=> ({
    categoryList: defaultCategory as CategoryItem[],
    topCategory: {} as TopCategory
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
    // 获取分类导航数据
    async getTopCategory(id: string) {
      const res = await request.get<ApiRes<TopCategory>>('/category', {
        params: {
          id
        }
      })
      this.topCategory = res.data.result
    },
    // 控制二级菜单显示
    show(id: string) {
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