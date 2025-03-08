import { Picker } from '@react-native-picker/picker'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import ColorPicker, { HueSlider } from 'reanimated-color-picker'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { calendarStore, themeStore } from '../../app'
import { useStyles } from './useStyles'

type CalendarForm = {
  // id: string
  // name: string
  iconName: string
  // isPositive: boolean
  primaryColor: string
  secondaryColor: string
}

const Item = Picker.Item

const iconSet = [
  'ambulance',
  'anchor',
  'android',
  'angry',
  'baby-carriage',
  'balance-scale',
  'ban',
  'baseball-ball',
  'basketball-ball',
  'bath',
  'bed',
  'beer',
  'bicycle',
  'biking',
  'biohazard',
  'birthday-cake',
  'bitcoin',
  'blender',
  'bolt',
  'bone',
  'bong',
  'book',
  'book-open',
  'book-reader',
  'bowling-ball',
  'brain',
  'broadcast-tower',
  'broom',
  'bug',
  'building',
  'bullhorn',
  'bus',
  'bus-alt',
  'camera',
  'camera-retro',
  'campground',
  'candy-cane',
  'capsules',
  'car',
  'car-alt',
  'car-side',
  'caravan',
  'carrot',
  'cat',
  'chair',
  'charging-station',
  'check',
  'check-circle',
  'check-double',
  'check-square',
  'cheese',
  'chess',
  'chess-board',
  'chess-knight',
  'city',
  'clock',
  'cloud',
  'cloud-moon',
  'cloud-moon-rain',
  'cloud-rain',
  'cloud-showers-heavy',
  'cloud-sun',
  'cloud-sun-rain',
  'cocktail',
  'code',
  'coffee',
  'cog',
  'cogs',
  'coins',
  'compact-disc',
  'compass',
  'couch',
  'credit-card',
  'crow',
  'crown',
  'crutch',
  'css3-alt',
  'cut',
  'database',
  'desktop',
  'dev',
  'dice',
  'dice-six',
  'dna',
  'docker',
  'dog',
  'dollar-sign',
  'drafting-compass',
  'drum',
  'drum-steelpan',
  'drumstick-bite',
  'dumbbell',
  'egg',
  'exclamation',
  'exclamation-circle',
  'exclamation-triangle',
  'eye',
  'eye-slash',
  'fan',
  'faucet',
  'feather',
  'feather-alt',
  'female',
  'file',
  'file-code',
  'film',
  'fingerprint',
  'fire',
  'fire-alt',
  'fire-extinguisher',
  'first-aid',
  'fish',
  'fist-raised',
  'flag',
  'flag-checkered',
  'flask',
  'fly',
  'folder',
  'football-ball',
  'frog',
  'frown',
  'futbol',
  'gamepad',
  'gas-pump',
  'gem',
  'ghost',
  'gift',
  'gifts',
  'github',
  'glass-cheers',
  'glass-martini',
  'glass-martini-alt',
  'glass-whiskey',
  'glasses',
  'globe',
  'globe-africa',
  'globe-americas',
  'globe-asia',
  'globe-europe',
  'graduation-cap',
  'grimace',
  'guitar',
  'hamburger',
  'hammer',
  'hamsa',
  'hand-holding',
  'hand-holding-heart',
  'hand-holding-medical',
  'hand-holding-usd',
  'hand-holding-water',
  'hand-middle-finger',
  'hand-peace',
  'hand-rock',
  'hand-scissors',
  'hand-sparkles',
  'hands-helping',
  'hands-wash',
  'handshake',
  'hard-hat',
  'hashtag',
  'hat-cowboy',
  'hat-wizard',
  'headphones',
  'heart',
  'heart-broken',
  'heartbeat',
  'helicopter',
  'highlighter',
  'hiking',
  'hockey-puck',
  'home',
  'horse',
  'horse-head',
  'hospital',
  'hospital-alt',
  'hotel',
  'hotjar',
  'hourglass-end',
  'house-user',
  'html5',
  'ice-cream',
  'icons',
  'id-card',
  'id-card-alt',
  'igloo',
  'image',
  'images',
  'info-circle',
  'instagram',
  'instagram-square',
  'itunes',
  'itunes-note',
  'java',
  'joint',
  'js-square',
  'key',
  'keyboard',
  'kiwi-bird',
  'language',
  'laptop',
  'laptop-code',
  'laptop-house',
  'laptop-medical',
  'laugh',
  'lemon',
  'lightbulb',
  'linkedin',
  'lungs',
  'magic',
  'magnet',
  'mail-bulk',
  'male',
  'map-marked',
  'map-marked-alt',
  'map-pin',
  'map-signs',
  'marker',
  'mars',
  'mars-double',
  'mask',
  'medkit',
  'mercury',
  'microphone',
  'microphone-alt',
  'microphone-alt-slash',
  'microphone-slash',
  'microscope',
  'minus-circle',
  'mobile',
  'mobile-alt',
  'money-bill-wave',
  'moon',
  'mortar-pestle',
  'motorcycle',
  'mouse-pointer',
  'mug-hot',
  'music',
  'node',
  'node-js',
  'notes-medical',
  'npm',
  'oil-can',
  'om',
  'otter',
  'paint-brush',
  'paint-roller',
  'palette',
  'paper-plane',
  'parking',
  'paw',
  'peace',
  'pen',
  'pen-alt',
  'pen-fancy',
  'pen-nib',
  'pencil-alt',
  'pencil-ruler',
  'phone',
  'phone-alt',
  'photo-video',
  'php',
  'piggy-bank',
  'pills',
  'pizza-slice',
  'plane',
  'playstation',
  'plug',
  'plus',
  'plus-circle',
  'podcast',
  'poo',
  'poo-storm',
  'poop',
  'power-off',
  'pray',
  'prescription-bottle',
  'prescription-bottle-alt',
  'print',
  'procedures',
  'pump-medical',
  'python',
  'question',
  'radiation',
  'radiation-alt',
  'react',
  'readme',
  'receipt',
  'record-vinyl',
  'recycle',
  'redhat',
  'restroom',
  'ring',
  'road',
  'robot',
  'rocket',
  'running',
  'rust',
  'sad-cry',
  'sad-tear',
  'satellite',
  'satellite-dish',
  'save',
  'school',
  'screwdriver',
  'search',
  'seedling',
  'server',
  'ship',
  'shoe-prints',
  'shopping-basket',
  'shopping-cart',
  'shower',
  'shuttle-van',
  'sistrix',
  'skating',
  'skiing',
  'skiing-nordic',
  'skull',
  'skull-crossbones',
  'slack',
  'smile',
  'smoking',
  'smoking-ban',
  'snowboarding',
  'snowflake',
  'snowman',
  'soap',
  'spa',
  'space-shuttle',
  'spotify',
  'spray-can',
  'square-root-alt',
  'star',
  'star-half-alt',
  'steam',
  'steam-square',
  'sticker-mule',
  'store',
  'store-alt',
  'subway',
  'suitcase-rolling',
  'sun',
  'swift',
  'swimmer',
  'swimming-pool',
  'synagogue',
  'syringe',
  'table-tennis',
  'tablet',
  'tablet-alt',
  'tablets',
  'tasks',
  'taxi',
  'telegram',
  'telegram-plane',
  'temperature-high',
  'temperature-low',
  'theater-masks',
  'thermometer',
  'ticket-alt',
  'tiktok',
  'times',
  'tint',
  'tint-slash',
  'tired',
  'toilet',
  'toilet-paper',
  'toilet-paper-slash',
  'toolbox',
  'tools',
  'tooth',
  'traffic-light',
  'train',
  'trash',
  'trash-alt',
  'tree',
  'trophy',
  'truck',
  'university',
  'untappd',
  'user',
  'user-alt',
  'user-friends',
  'user-graduate',
  'user-slash',
  'user-times',
  'users',
  'utensils',
  'venus',
  'vial',
  'video',
  'video-slash',
  'volleyball-ball',
  'wine-glass-alt',
  'wine-glass',
  'wine-bottle'
]

export const SettingsPage: React.FC = observer(() => {
  const { styles } = useStyles()
  const theme = themeStore.theme

  const [iconPrimaryColor, setIconPrimaryColor] = useState<string>(theme.colors.primary)
  const [iconSecondaryColor, setIconSecondaryColor] = useState<string>(theme.colors.secondary)
  const [iconName, setIconName] = useState<string>(iconSet[0])

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      // id: '',
      // name: '',
      iconName: '',
      // isPositive: false,
      primaryColor: theme.colors.primary,
      secondaryColor: theme.colors.secondary
    }
  })

  const onSubmit = (data: CalendarForm) => {
    calendarStore.editCalendar('1', 'Name', data.iconName, true, data.primaryColor, data.secondaryColor)
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
      </View> */}

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
      </View>
      <View style={styles.box}>
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
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  )
})
