import { View, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { themeStore } from '@app/index'

import { CircularProgressProps } from './CircularProgress.types'
import { useStyles } from './useStyles'

export const CircularProgress = (props: CircularProgressProps) => {
  const { value = 75, color, weekDayIndex } = props
  const theme = themeStore.getTheme()

  const { styles } = useStyles()
  const size = 40
  const strokeWidth = 4
  const radius = (size - strokeWidth) / 2
  const center = size / 2
  const circumference = 2 * Math.PI * radius
  const progress = (value / 100) * circumference

  const weekDays: { [key: number]: string } = {
    0: 'Mon',
    1: 'Tue',
    2: 'Wed',
    3: 'Thu',
    4: 'Fri',
    5: 'Sat',
    6: 'Sun'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{weekDays[weekDayIndex]}</Text>
      <Svg width={size} height={size}>
        <Path
          d={`M ${center},${center} m 0,-${radius} a ${radius},${radius} 0 1,1 0,${2 * radius} a ${radius},${radius} 0 1,1 0,-${2 * radius}`}
          stroke={theme.colors.elementsLight}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Path
          d={`M ${center},${center} m 0,-${radius} a ${radius},${radius} 0 1,1 0,${2 * radius} a ${radius},${radius} 0 1,1 0,-${2 * radius}`}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${progress}, ${circumference}`}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}
