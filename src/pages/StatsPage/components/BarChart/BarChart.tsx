import { View, StyleSheet, ColorValue } from 'react-native'
import Svg, { Rect } from 'react-native-svg'

import { useThemeContext } from '../../../../shared'

interface BarChartProps {
  data: { month: number; value: number }[]
  maxValue?: number
  barColor?: ColorValue
}

export const BarChart = ({ data, maxValue = 30, barColor }: BarChartProps) => {
  const { theme } = useThemeContext()

  const chartWidth = 300
  const chartHeight = 100
  const barWidth = chartWidth / data.length - 5

  return (
    <View style={styles.container}>
      <Svg width={chartWidth} height={chartHeight}>
        {data.map((item, index) => {
          const barHeight = Math.floor((item.value / maxValue) * chartHeight)
          console.log(barHeight)

          return (
            <Rect
              key={index}
              x={index * (barWidth + 5)}
              y={chartHeight - barHeight}
              width={barWidth}
              height={barHeight}
              fill={item.value > 0 ? barColor || theme.colors.red : theme.colors.lightGrey}
              rx={4}
            />
          )
        })}
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
