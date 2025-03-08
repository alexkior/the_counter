import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, Text, TextInput, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import ColorPicker, { HueSlider } from 'reanimated-color-picker'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { useThemeContext } from '../../shared'
import { useStyles } from './useStyles'

type CalendarForm = {
  id: string
  name: string
  iconName: string
  isPositive: boolean
  primaryColor: string
  secondaryColor: string
}

export const SettingsPage: React.FC = () => {
  const { styles } = useStyles()
  const { theme } = useThemeContext()
  const [iconPrimaryColor, setIconPrimaryColor] = useState<string>(theme.colors.primary)
  const [iconSecondaryColor, setIconSecondaryColor] = useState<string>(theme.colors.secondary)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      id: '',
      name: '',
      iconName: '',
      isPositive: false,
      primaryColor: theme.colors.primary,
      secondaryColor: theme.colors.secondary
    }
  })

  const onSubmit = (data: CalendarForm) => console.log(data)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pageHeadingContainer}>
        <Text style={styles.pageHeadingText}>Settings</Text>
      </View>
      <View style={styles.pageHeader}></View>
      <View style={styles.box}>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput placeholder="ID" onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="id"
        />
        {errors.id && <Text>This is required.</Text>}
      </View>
      <View style={styles.box}>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput placeholder="Name" onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="name"
        />
        {errors.name && <Text>This is required.</Text>}
      </View>

      <View style={styles.box}>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput placeholder="Icon name" onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="iconName"
        />
        {errors.iconName && <Text>This is required.</Text>}
      </View>

      <View style={styles.box}>
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <View style={styles.colorPickerContainer}>
                <ColorPicker
                  style={{ width: '70%' }}
                  value={value}
                  onCompleteJS={({ hex }) => {
                    // do something with the selected color.
                    setIconPrimaryColor(hex)
                    onChange(hex)
                  }}
                >
                  <HueSlider />
                </ColorPicker>
                <FontAwesome5 name="wine-glass-alt" size={44} color={iconPrimaryColor} />
              </View>
            )}
            name="primaryColor"
          />
          {errors.primaryColor && <Text>This is required.</Text>}
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <View style={styles.colorPickerContainer}>
                <ColorPicker
                  style={{ width: '70%' }}
                  value={value}
                  onCompleteJS={({ hex }) => {
                    // do something with the selected color.
                    setIconSecondaryColor(hex)
                    onChange(hex)
                  }}
                >
                  <HueSlider />
                </ColorPicker>
                <FontAwesome5 name="wine-glass-alt" size={44} color={iconSecondaryColor} />
              </View>
            )}
            name="secondaryColor"
          />
          {errors.secondaryColor && <Text>This is required.</Text>}
        </View>
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  )
}
