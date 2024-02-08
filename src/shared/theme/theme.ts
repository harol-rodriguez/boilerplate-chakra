import { extendTheme } from '@chakra-ui/react'
import components from './settings/components'
import colors from './settings/colors'
import config from './settings/config'
import { fonts, fontSizes } from './settings/fonts'
import sizes from './settings/sizes'
import styles from './settings/styles'
import typography from './settings/typography'

const theme = extendTheme({ colors, components, fonts, fontSizes, sizes, styles, config, typography })

export default theme
