export type Theme = {
  colors: {
    white: string
    black: string
    red: string
    green: string
    grey: string
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
