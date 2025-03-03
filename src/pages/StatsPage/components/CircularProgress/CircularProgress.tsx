import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { useThemeContext } from '../../../../shared'

export const CircularProgress = ({ value = 75, color }: { value: number; color: string }) => {
  const { theme } = useThemeContext()
  const size = 40
  const strokeWidth = 6
  const radius = (size - strokeWidth) / 2
  const center = size / 2
  const circumference = 2 * Math.PI * radius
  const progress = (value / 100) * circumference

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Path
          d={`M ${center},${center} m 0,-${radius} a ${radius},${radius} 0 1,1 0,${2 * radius} a ${radius},${radius} 0 1,1 0,-${2 * radius}`}
          stroke={theme.colors.lightGrey}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10
  }
})
