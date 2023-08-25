import { ProductType } from './products'

export interface CartType extends ProductType {
  quantity: number
}
