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
  picture: T
  open: boolean
  children: CategoryItem[]
}