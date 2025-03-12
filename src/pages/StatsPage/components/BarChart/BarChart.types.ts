import { ColorValue } from 'react-native'

export interface BarChartProps {
  data: { month: number; value: number }[]
  maxValue?: number
  barColor?: ColorValue
}
