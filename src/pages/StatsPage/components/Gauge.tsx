import { View, StyleSheet, ColorValue, Text } from 'react-native'
import Svg, { Path, Circle, Line } from 'react-native-svg'

export const Gauge = ({ value = 75 }) => {
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
        {getArcPath(180, 210, '#1B5E20')}
        {getArcPath(220, 250, '#4CAF50')}
        {getArcPath(260, 280, '#DDDDDD')}
        {getArcPath(290, 320, '#D32F2F')}
        {getArcPath(330, 360, '#B71C1C')}
        <Line x1={centerX} y1={centerY} x2={needleEnd.x} y2={needleEnd.y} stroke="black" strokeWidth={4} />
        <Circle cx={centerX} cy={centerY} r={10} fill="white" stroke="black" strokeWidth={3} />
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
    paddingBottom: 40
  },
  legend: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20
  },
  legendTextOne: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    width: 50,
    top: 110,
    color: '#1B5E20'
  },
  legendTextTwo: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    width: 50,
    top: 45,
    color: '#4CAF50'
  },
  legendTextThree: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    width: 120,
    top: 20,
    color: '#9e9e9e'
  },
  legendTextFour: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    width: 50,
    top: 45,
    color: '#D32F2F'
  },
  legendTextFive: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    width: 50,
    top: 110,
    color: '#B71C1C'
  }
})
