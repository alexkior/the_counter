import { View, StyleSheet, ColorValue } from 'react-native'

interface BarChartProps {
  data: { month: number; value: number }[]
  maxValue?: number
  barColor?: ColorValue
}

export const BarChart = ({ data, maxValue = 30, barColor }: BarChartProps) => {
  console.log(data, maxValue, barColor)

  return <View style={styles.container}></View>
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
