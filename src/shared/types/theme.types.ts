export type Theme = {
  colors: {
    background: string
    key: string
    secondary: string
    secondaryDark: string
    primary: string
    primaryDark: string
    elements: string
    elementsLight: string
    elementsDark: string
  }
  text: {
    size: {
      small: {
        xs: number
        s: number
        m: number
        l: number
      }
      medium: {
        s: number
        m: number
        l: number
        xl: number
      }
      large: {
        s: number
        m: number
        l: number
        xl: number
      }
    }
  }
}
