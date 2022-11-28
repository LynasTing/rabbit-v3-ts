// 所有的接口的通用类型
export interface ApiRes<T> {
  code: string
  msg: string,
  result: T
}
// 单个分类的类型
export interface CategoryItem {
  id: string
  name: string
  picture: string
  open: boolean
  children: CategoryItem[]
  goods: CategoryGoods[]
}
// 单个商品
export type CategoryGoods = {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}
// 轮播图类型
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}
// 新鲜好物
export type NewGoods = {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}
// 人气推荐
export type HotGoods = {
  id: string ,
  picture: string ,
  title: string ,
  alt: string 
}
// 热门品牌
export type Brand = {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}