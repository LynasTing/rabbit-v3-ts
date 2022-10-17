import { createPinia } from "pinia"
import useCategoryStore from './modules/category'
export default function useStore() {
  return {
    category: useCategoryStore(),
  }
}
const store = createPinia()
export { store }