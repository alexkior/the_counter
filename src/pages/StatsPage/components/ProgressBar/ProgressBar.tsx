import { View, StyleSheet, ColorValue } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { themeStore } from '@app/index'

interface ProgressBarProps {
  value?: number
  color?: ColorValue
}

export const ProgressBar = ({ value = 75, color }: ProgressBarProps) => {
  const theme = themeStore.getTheme()

  const width = 300
  const progressValue = (value / 100) * width

  const getPath = (start: number, end: number, color: ColorValue | undefined) => {
    return (
      <Path
        d={`M ${start + 10} 5 L ${end >= 300 ? end - 10 : end + 10} 5`}
        stroke={color}
        strokeWidth={8}
        fill="none"
        strokeLinecap="round"
      />
    )
  }

  return (
    <View style={styles.container}>
      <Svg width={width} height={10}>
        {getPath(0, width, theme.colors.elementsLight)}
        {getPath(0, progressValue, color)}
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 4,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
