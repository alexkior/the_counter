import { View, StyleSheet, ColorValue } from 'react-native'
import Svg, { Rect } from 'react-native-svg'

import { themeStore } from '@app/index'

interface BarChartProps {
  data: { month: number; value: number }[]
  maxValue?: number
  barColor?: ColorValue
}

export const BarChart = ({ data, maxValue = 30, barColor }: BarChartProps) => {
  const theme = themeStore.getTheme()

  const chartWidth = 300
  const chartHeight = 150
  const barWidth = chartWidth / data.length - 15

  return (
    <View style={styles.container}>
      <Svg width={chartWidth} height={chartHeight}>
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * chartHeight
          return (
            <View key={item.month}>
              <Rect
                x={index * (barWidth + 15)}
                y={chartHeight - barHeight}
                width={barWidth}
                height={barHeight}
                fill={item.value > 0 ? barColor || theme.colors.secondary : theme.colors.elementsLight}
                rx={4}
              />
            </View>
          )
        })}
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
