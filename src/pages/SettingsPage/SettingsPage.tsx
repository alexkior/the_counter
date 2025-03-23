import { Picker } from '@react-native-picker/picker'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, Text, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'

import ColorPicker, { HueSlider } from 'reanimated-color-picker'

import { calendarStore, themeStore } from '@app/index'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { iconSet } from '@shared/constants'
import { Button } from '@shared/ui'

import { useStyles } from './useStyles'

type CalendarForm = {
  // id: string
  name: string
  iconName: string
  // isPositive: boolean
  primaryColor: string
  secondaryColor: string
}

const Item = Picker.Item

export const SettingsPage: React.FC = observer(() => {
  const { styles } = useStyles()
  const theme = themeStore.getTheme()

  const [iconPrimaryColor, setIconPrimaryColor] = useState<string>(theme.colors.primary)
  const [iconSecondaryColor, setIconSecondaryColor] = useState<string>(theme.colors.secondary)
  const [iconName, setIconName] = useState<string>(iconSet[0])

  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Calendar is updated!',
      text2: 'Now colors, icon and name are changed',
      swipeable: true,
      autoHide: true
    })
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      // id: '',
      name: calendarStore.currentCalendar ? calendarStore.currentCalendar.name : '',
      iconName: calendarStore.currentCalendar ? calendarStore.currentCalendar.iconName : iconSet[0],
      // isPositive: false,
      primaryColor: calendarStore.currentCalendar?.primaryColor
        ? calendarStore.currentCalendar?.primaryColor
        : theme.colors.primary,
      secondaryColor: calendarStore.currentCalendar?.secondaryColor
        ? calendarStore.currentCalendar?.secondaryColor
        : theme.colors.secondary
    }
  })

  const onSubmit = (data: CalendarForm) => {
    calendarStore.editCalendar('1', data.name, data.iconName, true, data.primaryColor, data.secondaryColor)
    showToast()
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pageHeadingContainer}>
        <Text style={styles.pageHeadingText}>Settings</Text>
      </View>
      <View style={styles.pageHeader}></View>
      {/* <View style={styles.box}>
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
      </View> */}
      <View style={styles.box}>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.textInputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="name"
        />
        {errors.name && <Text>This is required.</Text>}
        <View style={styles.colorPickerContainerWrapper}>
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
                    setIconPrimaryColor(hex)
                    onChange(hex)
                  }}
                >
                  <HueSlider />
                </ColorPicker>
                <FontAwesome5 name={iconName} size={44} color={iconPrimaryColor} />
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
                <FontAwesome5 name={iconName} size={44} color={iconSecondaryColor} />
              </View>
            )}
            name="secondaryColor"
          />
          {errors.secondaryColor && <Text>This is required.</Text>}
        </View>
        {/* <View style={styles.iconInputWrapper}> */}
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Picker
              onBlur={onBlur}
              selectedValue={value}
              onValueChange={(v) => {
                setIconName(v)
                onChange(v)
              }}
              mode="dropdown"
            >
              {iconSet.map((icon) => (
                <Item key={icon} label={icon} value={icon} />
              ))}
            </Picker>
          )}
          name="iconName"
        />
        {errors.iconName && <Text>This is required.</Text>}
        {/* </View> */}
      </View>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  )
})
