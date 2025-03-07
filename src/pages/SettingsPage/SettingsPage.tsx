import { useForm, Controller } from 'react-hook-form'
import { View, Text, TextInput, Button } from 'react-native'

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
      primaryColor: '',
      secondaryColor: ''
    }
  })

  const onSubmit = (data: CalendarForm) => console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.pageHeadingContainer}>
        <Text style={styles.pageHeadingText}>Settings</Text>
      </View>
      <View style={styles.pageHeader}></View>
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
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="Primary color" onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="primaryColor"
      />
      {errors.primaryColor && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="Secondary color" onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="secondaryColor"
      />
      {errors.secondaryColor && <Text>This is required.</Text>}
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

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
