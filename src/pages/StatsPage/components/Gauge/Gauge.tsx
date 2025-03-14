import { View, ColorValue, Text } from 'react-native'
import Svg, { Path, Circle, Line } from 'react-native-svg'

import { themeStore } from '@app/index'

import { useStyles } from './useStyles'

export const Gauge = ({ value = 75 }) => {
  const theme = themeStore.getTheme()

  const { styles } = useStyles()

  const width = 300
  const height = 180
  const radius = 100
  const centerX = width / 2
  const centerY = height - 50

  const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
    const rad = -(angle * Math.PI) / 180
    return {
      x: cx + r * Math.cos(rad),
      y: cy - r * Math.sin(rad)
    }
  }

  const getArcPath = (startAngle: number, endAngle: number, color: ColorValue | undefined) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle)
    const end = polarToCartesian(centerX, centerY, radius, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

    return (
      <Path
        d={`M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`}
        stroke={color}
        strokeWidth={10}
        fill="none"
        strokeLinecap="round"
      />
    )
  }

  const needleAngle = 180 - (value / 100) * -180
  const needleEnd = polarToCartesian(centerX, centerY, radius - 20, needleAngle)

  return (
    <View style={styles.container}>
      <View style={styles.legend}>
        <Text style={styles.legendTextOne}>Very rarely</Text>
        <Text style={styles.legendTextTwo}>Rarely</Text>
        <Text style={styles.legendTextThree}>Regularly</Text>
        <Text style={styles.legendTextFour}>Often</Text>
        <Text style={styles.legendTextFive}>Very often</Text>
      </View>
      <Svg width={width} height={height}>
        {getArcPath(180, 210, theme.colors.primaryDark)}
        {getArcPath(220, 250, theme.colors.primary)}
        {getArcPath(260, 280, theme.colors.elementsDark)}
        {getArcPath(290, 320, theme.colors.secondary)}
        {getArcPath(330, 360, theme.colors.secondaryDark)}
        <Line x1={centerX} y1={centerY} x2={needleEnd.x} y2={needleEnd.y} stroke="black" strokeWidth={4} />
        <Circle cx={centerX} cy={centerY} r={10} fill="white" stroke="black" strokeWidth={3} />
      </Svg>
    </View>
  )
}
