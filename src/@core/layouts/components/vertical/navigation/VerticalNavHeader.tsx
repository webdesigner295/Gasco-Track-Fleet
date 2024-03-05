// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Icons
import Close from 'mdi-material-ui/Close'
import CircleOutline from 'mdi-material-ui/CircleOutline'
import RecordCircleOutline from 'mdi-material-ui/RecordCircleOutline'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: boolean
  navHover: boolean
  settings: Settings
  collapsedNavWidth: number
  menuLockedIcon?: ReactNode
  menuUnlockedIcon?: ReactNode
  navigationBorderWidth: number
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    menuUnlockedIcon: userMenuUnlockedIcon,
    verticalNavMenuBranding: userVerticalNavMenuBranding
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const { navCollapsed } = settings

  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userVerticalNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 30) / 8
      }
    } else {
      return 6
    }
  }

  const MenuLockedIcon = () =>
    userMenuLockedIcon || (
      <RecordCircleOutline
        sx={{
          fontSize: '1.25rem',
          pointerEvents: 'none',
          ...menuCollapsedStyles,
          transition: 'opacity .25s ease-in-out'
        }}
      />
    )

  const MenuUnlockedIcon = () =>
    userMenuUnlockedIcon || (
      <CircleOutline
        sx={{
          fontSize: '1.25rem',
          pointerEvents: 'none',
          ...menuCollapsedStyles,
          transition: 'opacity .25s ease-in-out'
        }}
      />
    )

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: '0.5rem', pt: '1.5rem', mb: '1rem' }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg width='76' height='62' viewBox='0 0 76 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                opacity='0.3'
                d='M4.75 36.6439L25.4917 27.1089L69.6667 44.9076L47.5 53.807L4.75 36.6439Z'
                fill='black'
              />
              <path d='M8.39166 32.4485V37.2796L12.35 35.6268V30.9229L8.39166 32.4485Z' fill='#2D3134' />
              <path opacity='0.39' d='M8.39166 32.4485V37.2796L12.35 35.6268V30.9229L8.39166 32.4485Z' fill='black' />
              <path
                d='M41.4833 42.4921C40.375 41.9836 39.2666 41.9835 38.475 42.2378L36.2583 43.1278C35.3083 43.382 34.8333 44.1448 34.8333 45.1619C34.8333 47.0689 36.8916 49.4845 39.2666 50.5015C40.5333 51.0101 41.6416 51.0101 42.4333 50.7558C42.4333 50.7558 44.65 49.8659 44.8083 49.7387C45.6 49.3573 45.9166 48.7217 45.9166 47.8317C45.9166 45.7976 43.8583 43.382 41.4833 42.4921Z'
                fill='#2D3134'
              />
              <path
                opacity='0.39'
                d='M42.4333 50.6287C42.75 50.5015 44.65 49.7387 44.8083 49.7387C45.6 49.3573 45.9167 48.7217 45.9167 47.8317C45.9167 47.0689 45.6 46.179 45.125 45.4162L42.9084 46.3061C43.3834 47.0689 43.7 47.9588 43.7 48.7217C43.7 49.6116 43.225 50.3744 42.4333 50.6287Z'
                fill='black'
              />
              <path
                d='M42.5916 48.2131C42.5916 49.7387 41.1666 50.2473 39.2666 49.4845C37.3666 48.7217 35.9417 46.9418 35.9417 45.4162C35.9417 43.8906 37.3666 43.382 39.2666 44.1448C41.1666 44.9076 42.5916 46.6875 42.5916 48.2131Z'
                fill='#999999'
              />
              <path
                opacity='0.15'
                d='M39.5833 49.4845C37.6833 48.7217 36.2583 46.9418 36.2583 45.4162C36.2583 44.6534 36.575 44.1448 37.2083 43.8906C36.4166 44.0177 35.9417 44.6534 35.9417 45.4162C35.9417 46.9418 37.3666 48.7217 39.2666 49.4845C40.2166 49.8659 41.0083 49.8659 41.6416 49.6116C41.0083 49.8659 40.375 49.7387 39.5833 49.4845Z'
                fill='black'
              />
              <path
                d='M41.0083 47.3232C41.0083 47.9589 40.375 48.2131 39.5833 47.8317C38.7917 47.4503 38.1583 46.8146 38.1583 46.179C38.1583 45.5433 38.7917 45.289 39.5833 45.6704C40.375 46.0518 41.0083 46.6875 41.0083 47.3232Z'
                fill='#2D3134'
              />
              <path
                opacity='0.39'
                d='M41.0083 47.3232C41.0083 47.9589 40.375 48.2131 39.5833 47.8317C38.7917 47.4503 38.1583 46.8146 38.1583 46.179C38.1583 45.5433 38.7917 45.289 39.5833 45.6704C40.375 46.0518 41.0083 46.6875 41.0083 47.3232Z'
                fill='black'
              />
              <path
                d='M40.6917 47.4503C40.6917 48.086 40.0583 48.3403 39.2667 47.9589C38.475 47.7046 37.8417 46.9418 37.8417 46.3061C37.8417 45.6704 38.475 45.4162 39.2667 45.7976C40.0583 46.0518 40.6917 46.8147 40.6917 47.4503Z'
                fill='#2D3134'
              />
              <path
                opacity='0.06'
                d='M43.7 48.7217C43.7 50.6287 41.6416 51.5186 39.2666 50.5015C36.8916 49.4845 34.8333 47.0689 34.8333 45.1619C34.8333 43.2549 36.8916 42.3649 39.2666 43.382C41.6416 44.272 43.7 46.6875 43.7 48.7217Z'
                fill='black'
              />
              <path
                d='M15.3583 31.9399C14.25 31.4314 13.1416 31.4314 12.35 31.6857L10.1333 32.5756C9.34165 32.8299 8.70831 33.5927 8.70831 34.6097C8.70831 36.5168 10.7666 38.9323 13.1416 39.9494C14.4083 40.4579 15.5166 40.4579 16.3083 40.2037C16.3083 40.2037 18.525 39.3137 18.6833 39.1866C19.475 38.8052 19.7916 38.1695 19.7916 37.2796C19.7916 35.3726 17.7333 32.957 15.3583 31.9399Z'
                fill='#2D3134'
              />
              <path
                opacity='0.39'
                d='M16.3083 40.2037C16.625 40.0765 18.525 39.3137 18.6833 39.3137C19.475 38.9323 19.7917 38.2967 19.7917 37.4067C19.7917 36.6439 19.475 35.754 19 34.9912L16.7833 35.8811C17.2583 36.6439 17.575 37.5339 17.575 38.2967C17.575 39.1866 17.1 39.8223 16.3083 40.2037Z'
                fill='black'
              />
              <path
                d='M16.4667 37.7881C16.4667 39.3137 15.0417 39.8223 13.1417 39.0594C11.2417 38.2966 9.81665 36.5168 9.81665 34.9912C9.81665 33.4655 11.2417 32.957 13.1417 33.7198C15.0417 34.4826 16.4667 36.2625 16.4667 37.7881Z'
                fill='#999999'
              />
              <path
                opacity='0.15'
                d='M13.4583 38.9323C11.5583 38.1695 10.1333 36.3897 10.1333 34.864C10.1333 34.1012 10.45 33.5927 11.0833 33.3384C10.2917 33.4656 9.81665 34.1012 9.81665 34.864C9.81665 36.3897 11.2417 38.1695 13.1417 38.9323C14.0917 39.3137 14.8833 39.3137 15.5167 39.0595C14.8833 39.3137 14.25 39.3137 13.4583 38.9323Z'
                fill='black'
              />
              <path
                d='M14.8833 36.8982C14.8833 37.5338 14.25 37.7881 13.4583 37.4067C12.6667 37.1524 12.0333 36.3896 12.0333 35.754C12.0333 35.1183 12.6667 34.864 13.4583 35.2454C14.25 35.4997 14.8833 36.2625 14.8833 36.8982Z'
                fill='#2D3134'
              />
              <path
                opacity='0.39'
                d='M14.8833 36.8982C14.8833 37.5338 14.25 37.7881 13.4583 37.4067C12.6667 37.1524 12.0333 36.3896 12.0333 35.754C12.0333 35.1183 12.6667 34.864 13.4583 35.2454C14.25 35.4997 14.8833 36.2625 14.8833 36.8982Z'
                fill='black'
              />
              <path
                d='M14.5667 36.8982C14.5667 37.5338 13.9333 37.7881 13.1417 37.4067C12.35 37.0253 11.7167 36.3896 11.7167 35.754C11.7167 35.1183 12.35 34.864 13.1417 35.2454C13.9333 35.6268 14.5667 36.3896 14.5667 36.8982Z'
                fill='#2D3134'
              />
              <path
                opacity='0.06'
                d='M17.575 38.1695C17.575 40.0765 15.5166 40.9665 13.1416 39.9494C10.7666 38.9323 8.70831 36.5168 8.70831 34.6098C8.70831 32.7028 10.7666 31.8128 13.1416 32.8299C15.5166 33.847 17.575 36.2625 17.575 38.1695Z'
                fill='black'
              />
              <path
                d='M26.9167 1.93628L4.75 10.8357V30.2872L33.25 41.7293L55.4167 32.4485V13.3784L26.9167 1.93628Z'
                fill='#FF9900'
              />
              <path
                d='M4.75 28.6345V31.1771L33.25 42.6192V40.0765L4.75 28.6345ZM55.4167 31.1771V33.7198L33.25 42.6192V40.0765L55.4167 31.1771Z'
                fill='#2D3134'
              />
              <path opacity='0.06' d='M4.75 10.8357V31.1772L33.25 42.6192V22.2778L4.75 10.8357Z' fill='black' />
              <path opacity='0.39' d='M55.4167 13.3784V33.7198L33.25 42.6192V22.2777L55.4167 13.3784Z' fill='black' />
              <path
                d='M66.5 23.5491L57 19.7351L34.8333 28.6345V43.0006C34.8333 43.382 35.4666 43.6363 35.9416 43.382C37.8416 42.1107 41.1666 43.0006 43.5416 45.289C44.9666 46.6875 45.6 48.2131 45.6 49.4845L47.5 50.2473L69.6666 41.3479V31.1771L66.5 23.5491Z'
                fill='#E5E5E5'
              />
              <path
                d='M48.1334 39.4409L45.4417 33.0842C45.2834 32.8299 45.4417 32.7028 45.7584 32.5756L65.55 24.6933C65.8667 24.5662 66.1834 24.6933 66.3417 24.9476L68.875 30.9229C69.0334 31.1771 68.875 31.3043 68.5584 31.4314L48.925 39.6951C48.6084 39.8223 48.1334 39.6951 48.1334 39.4409Z'
                fill='#3399CC'
              />
              <path
                opacity='0.15'
                d='M51.775 30.1601L65.3917 24.6933C65.7084 24.5662 66.025 24.6933 66.1834 24.9476L68.5584 30.5415L51.775 30.1601Z'
                fill='black'
              />
              <path
                d='M68.7167 30.9229L68.5583 30.5415C68.5583 30.7957 68.5583 30.9229 68.2416 31.05L48.6083 39.3137C48.2917 39.4409 47.975 39.3137 47.8167 39.0595L47.975 39.4409C48.1333 39.6951 48.45 39.8223 48.7666 39.6951L68.4 31.4314C68.7167 31.3043 68.875 31.1771 68.7167 30.9229Z'
                fill='#2D3134'
              />
              <path d='M53.0417 38.8052L64.125 34.3555V41.7293L53.0417 46.179V38.8052Z' fill='white' />
              <path d='M53.8333 45.1619L63.3333 41.3479V35.3726L53.8333 39.1866V45.1619Z' fill='#2D3134' />
              <path
                d='M69.6666 41.3479V38.8052L47.5 47.7046V50.2472L69.6666 41.3479ZM44.3333 48.9759L47.5 50.2472V47.7046L44.3333 46.4332V48.9759Z'
                fill='#2D3134'
              />
              <path d='M53.8333 45.1619V46.4332L63.3333 42.6192V41.3479L53.8333 45.1619Z' fill='white' />
              <path
                d='M43.5417 32.8299L37.525 30.4143C37.3667 30.2872 37.05 30.4143 37.05 30.6686V34.4826C37.05 34.7369 37.2083 34.9912 37.525 34.9912L39.5833 35.8811C39.7417 36.0082 39.9 36.0082 40.0583 36.1354L42.1167 38.1695H42.275L45.7583 39.568C45.9167 39.6951 46.2333 39.4409 46.075 39.3137L43.3833 32.957C43.7 32.957 43.7 32.8299 43.5417 32.8299Z'
                fill='#3399CC'
              />
              <path
                opacity='0.15'
                d='M46.3916 39.1866L43.225 37.9153H43.0666L41.0083 35.8811C40.85 35.754 40.6916 35.6268 40.5333 35.6268L38.475 34.7369C38.1583 34.6098 38 34.4826 38 34.2284V30.5415L37.6833 30.4143C37.525 30.2872 37.2083 30.4143 37.2083 30.6686V34.4826C37.2083 34.7369 37.3666 34.9912 37.6833 34.9912L39.7416 35.8811C39.9 36.0082 40.0583 36.0082 40.2166 36.1354L42.275 38.1695H42.4333L45.9166 39.568C46.2333 39.6951 46.3916 39.568 46.3916 39.1866Z'
                fill='black'
              />
              <path d='M47.5 45.1619V47.7046L46.7083 47.4503V44.9076L47.5 45.1619Z' fill='#FFCC00' />
              <path
                d='M53.8333 40.0765V40.4579L63.3333 36.6439V36.2625L53.8333 40.0765ZM53.8333 41.3479V41.7293L63.3333 37.9153V37.5339L53.8333 41.3479ZM53.8333 42.6192V43.0006L63.3333 39.1866V38.8052L53.8333 42.6192ZM53.8333 43.8906V44.272L63.3333 40.4579V40.0765L53.8333 43.8906Z'
                fill='#E5E5E5'
              />
              <path
                opacity='0.5'
                d='M37.2083 36.6439V37.2796L38.7916 37.9153V37.2796L37.2083 36.6439Z'
                fill='#2D3134'
              />
              <path opacity='0.5' d='M38.7916 38.1695L37.2083 37.5338V37.2796L38.7916 37.9152V38.1695Z' fill='white' />
              <path
                d='M59.375 31.05C59.2167 30.9229 59.0583 30.9229 58.9 31.05L52.8833 36.5168C52.725 36.6439 52.725 36.7711 52.8833 36.8982C53.0417 37.0253 53.2 37.0253 53.3583 36.8982L54.9417 35.3726V36.6439H55.4167V34.9912L59.375 31.3043C59.5333 31.3043 59.5333 31.05 59.375 31.05ZM65.075 28.5073C64.9167 28.3802 64.7583 28.3802 64.6 28.5073L58.5833 33.9741C58.425 34.1012 58.425 34.2284 58.5833 34.3555C58.7417 34.4826 58.9 34.4826 59.0583 34.3555L60.4833 33.0842V34.4826H60.9583V32.7028L65.075 28.8887C65.2333 28.7616 65.2333 28.6345 65.075 28.5073Z'
                fill='#2D3134'
              />
              <path
                d='M66.5 40.0765L69.6667 38.8052V36.2625L68.0833 36.8982C67.1333 37.2796 66.5 38.0424 66.5 38.9323V40.0765Z'
                fill='white'
              />
              <path
                opacity='0.3'
                d='M67.0886 37.8452C66.647 38.2808 66.5638 38.8137 66.9029 39.0353C67.242 39.2569 67.8749 39.0834 68.3165 38.6478C68.7582 38.2121 68.8413 37.6793 68.5022 37.4577C68.1631 37.236 67.5302 37.4095 67.0886 37.8452Z'
                fill='#2D3134'
              />
              <path
                opacity='0.3'
                d='M67.8806 37.8451C67.439 38.2807 67.3559 38.8135 67.695 39.0351C68.0341 39.2568 68.667 39.0833 69.1086 38.6476C69.5502 38.212 69.6333 37.6792 69.2942 37.4575C68.9551 37.2359 68.3222 37.4094 67.8806 37.8451Z'
                fill='#2D3134'
              />
              <path opacity='0.3' d='M66.5 40.0765L69.6667 38.8052V36.2625L66.5 40.0765Z' fill='white' />
              <path
                d='M47.5 47.7046L50.6667 46.4333V45.289C50.6667 44.6534 49.875 44.272 49.0833 44.5262L47.5 45.1619V47.7046Z'
                fill='white'
              />
              <path
                opacity='0.3'
                d='M48.8814 45.4715C48.4397 45.9072 48.3566 46.44 48.6957 46.6616C49.0348 46.8832 49.6677 46.7097 50.1093 46.2741C50.5509 45.8385 50.634 45.3056 50.2949 45.084C49.9559 44.8624 49.323 45.0359 48.8814 45.4715Z'
                fill='#2D3134'
              />
              <path
                opacity='0.3'
                d='M48.0893 45.4717C47.6477 45.9074 47.5646 46.4402 47.9037 46.6618C48.2428 46.8834 48.8757 46.7099 49.3173 46.2743C49.7589 45.8386 49.842 45.3058 49.5029 45.0842C49.1638 44.8626 48.5309 45.0361 48.0893 45.4717Z'
                fill='#2D3134'
              />
              <path opacity='0.3' d='M47.5 47.7046L50.6667 46.4332L47.5 45.1619V47.7046Z' fill='white' />
              <path
                opacity='0.06'
                d='M44.3333 32.4485L34.8333 28.6345V43.0006C34.8333 43.382 35.4666 43.6363 35.9416 43.382C37.8416 42.1107 41.1666 43.0006 43.5416 45.289C44.0166 45.6704 44.3333 46.0518 44.4916 46.5604L44.3333 46.4332V48.9759L47.5 50.2473V40.0765L44.3333 32.4485Z'
                fill='black'
              />
              <path
                opacity='0.39'
                d='M66.5 23.5491L44.3333 32.4485L47.5 40.0765V50.2473L69.6666 41.3479V31.1772L66.5 23.5491Z'
                fill='black'
              />
            </svg>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader