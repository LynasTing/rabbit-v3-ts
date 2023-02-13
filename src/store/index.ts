import { createPinia } from "pinia"
import useCategoryStore from './modules/category'
import useHomeStore from './modules/home'
import useGoodsInfo from './modules/goods'
export default function useStore() {
  return {
    category: useCategoryStore(),
    home: useHomeStore(),
    goods: useGoodsInfo()
  }
}
const store = createPinia()
export { store }