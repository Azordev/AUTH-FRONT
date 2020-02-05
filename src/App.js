import React, { Children } from 'react'
import { Grommet, Main, Box, Layer, Image, Form, Header, Text, TextInput, CheckBox, Anchor, Button, Grid, FormField, Menu, Heading, TextArea, Paragraph, Stack, Meter } from 'grommet'
import { MailOption, Lock, User, Close, Home, SettingsOption, Search, Notification, Help, Edit, Add } from 'grommet-icons'
import { Menu as MenuIcon, Home as HomeIcon } from 'grommet-icons';

const RouterContext = React.createContext({})

const Router = ({ children }) => {
  const [path, setPath] = React.useState("/")

  React.useEffect(() => {
    const onPopState = () => setPath(document.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const push = nextPath => {
    if (nextPath !== path) {
      window.history.pushState(undefined, undefined, nextPath)
      setPath(nextPath)
      window.scrollTo(0, 0)
    }
  }

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  )
}

const Routes = ({ children }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  let found
  Children.forEach(children, child => {
    if (!found && contextPath === child.props.path) found = child
  })
  return found
}

const Route = ({ Component, path }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  return contextPath === path ? <Component /> : null
}

const theme = {
  "name": "azordev",
  "rounding": 10,
  "spacing": 24,
  "defaultMode": "light",
  "global": {
    "colors": {
      "brand": {
        "dark": "#172B4D",
        "light": "#11cdef"
      },
      "background": {
        "dark": "#111111",
        "light": "#FFFFFF"
      },
      "background-back": {
        "dark": "#111111",
        "light": "#EEEEEE"
      },
      "background-front": {
        "dark": "#222222",
        "light": "#FFFFFF"
      },
      "background-contrast": {
        "dark": "#FFFFFF11",
        "light": "#11111111"
      },
      "text": {
        "dark": "#EEEEEE",
        "light": "#333333"
      },
      "text-strong": {
        "dark": "#FFFFFF",
        "light": "#000000"
      },
      "text-weak": {
        "dark": "#CCCCCC",
        "light": "#444444"
      },
      "text-xweak": {
        "dark": "#999999",
        "light": "#666666"
      },
      "border": {
        "dark": "#444444",
        "light": "#CCCCCC"
      },
      "control": {
        "light": "#0088b6",
        "dark": "#7764E4"
      },
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": {
        "light": "brand",
        "dark": "brand"
      },
      "selected-text": {
        "light": "text-strong",
        "dark": "text-strong"
      },
      "status-critical": {
        "light": "#FF4040",
        "dark": "#FF4040"
      },
      "status-warning": {
        "light": "#FFAA15",
        "dark": "#FFAA15"
      },
      "status-ok": {
        "light": "#00C781",
        "dark": "#00C781"
      },
      "status-unknown": {
        "light": "#8898AA",
        "dark": "#8898AA"
      },
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "#172B4D"
    },
    "font": {
      "family": "\"Oxygen\", sans-serif",
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx",
      "face": "/* latin-ext */\n@font-face {\n  font-family: 'Oxygen';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Oxygen Regular'), local('Oxygen-Regular'), url(https://fonts.gstatic.com/s/oxygen/v9/2sDfZG1Wl4LcnbuKgE0mV0Q.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Oxygen';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Oxygen Regular'), local('Oxygen-Regular'), url(https://fonts.gstatic.com/s/oxygen/v9/2sDfZG1Wl4LcnbuKjk0m.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
    },
    "active": {
      "background": "active-background",
      "color": "active-text"
    },
    "hover": {
      "background": "active-background",
      "color": "active-text"
    },
    "selected": {
      "background": "selected-background",
      "color": "selected-text"
    },
    "control": {
      "border": {
        "radius": "10px"
      }
    },
    "borderSize": {
      "xsmall": "1px",
      "small": "2px",
      "medium": "4px",
      "large": "12px",
      "xlarge": "24px"
    },
    "breakpoints": {
      "small": {
        "value": 768,
        "borderSize": {
          "xsmall": "1px",
          "small": "2px",
          "medium": "4px",
          "large": "6px",
          "xlarge": "12px"
        },
        "edgeSize": {
          "none": "0px",
          "hair": "1px",
          "xxsmall": "2px",
          "xsmall": "3px",
          "small": "6px",
          "medium": "12px",
          "large": "24px",
          "xlarge": "48px"
        },
        "size": {
          "xxsmall": "24px",
          "xsmall": "48px",
          "small": "96px",
          "medium": "192px",
          "large": "384px",
          "xlarge": "768px",
          "full": "100%"
        }
      },
      "medium": {
        "value": 1536
      },
      "large": {}
    },
    "edgeSize": {
      "none": "0px",
      "hair": "1px",
      "xxsmall": "3px",
      "xsmall": "6px",
      "small": "12px",
      "medium": "24px",
      "large": "48px",
      "xlarge": "96px",
      "responsiveBreakpoint": "small"
    },
    "input": {
      "padding": "12px",
      "weight": 600
    },
    "spacing": "24px",
    "size": {
      "xxsmall": "48px",
      "xsmall": "96px",
      "small": "192px",
      "medium": "384px",
      "large": "768px",
      "xlarge": "1152px",
      "xxlarge": "1536px",
      "full": "100%"
    }
  },
  "chart": {},
  "diagram": {
    "line": {}
  },
  "meter": {},
  "button": {
    "border": {
      "width": "2px",
      "radius": "18px"
    },
    "padding": {
      "vertical": "4px",
      "horizontal": "22px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "10px"
    },
    "toggle": {
      "radius": "24px",
      "size": "48px"
    },
    "size": "24px"
  },
  "radioButton": {
    "size": "24px"
  },
  "calendar": {
    "small": {
      "fontSize": "NaNpx",
      "lineHeight": 1.375,
      "daySize": "27.428571428571427px"
    },
    "medium": {
      "fontSize": "18px",
      "lineHeight": 1.45,
      "daySize": "54.857142857142854px"
    },
    "large": {
      "fontSize": "NaNpx",
      "lineHeight": 1.11,
      "daySize": "109.71428571428571px"
    }
  },
  "clock": {
    "analog": {
      "hour": {
        "width": "8px",
        "size": "24px"
      },
      "minute": {
        "width": "4px",
        "size": "12px"
      },
      "second": {
        "width": "3px",
        "size": "9px"
      },
      "size": {
        "small": "72px",
        "medium": "96px",
        "large": "144px",
        "xlarge": "216px",
        "huge": "288px"
      }
    },
    "digital": {
      "text": {
        "xsmall": {
          "size": "NaNpx",
          "height": 1.5
        },
        "small": {
          "size": "NaNpx",
          "height": 1.43
        },
        "medium": {
          "size": "18px",
          "height": 1.375
        },
        "large": {
          "size": "NaNpx",
          "height": 1.167
        },
        "xlarge": {
          "size": "NaNpx",
          "height": 1.1875
        },
        "xxlarge": {
          "size": "NaNpx",
          "height": 1.125
        }
      }
    }
  },
  "heading": {
    "level": {
      "1": {
        "small": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "medium": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "large": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "xlarge": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        }
      },
      "2": {
        "small": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "medium": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "large": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "xlarge": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        }
      },
      "3": {
        "small": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "medium": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "large": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "xlarge": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        }
      },
      "4": {
        "small": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "medium": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "large": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "xlarge": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        }
      },
      "5": {
        "small": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "medium": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "large": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "xlarge": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        }
      },
      "6": {
        "small": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "medium": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "large": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        },
        "xlarge": {
          "size": "NaNpx",
          "height": "NaNpx",
          "maxWidth": "NaNpx"
        }
      }
    },
    "font": {
      "family": "\"Open Sans\", sans-serif"
    }
  },
  "paragraph": {
    "small": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    },
    "medium": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    },
    "large": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    },
    "xlarge": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    },
    "xxlarge": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    }
  },
  "text": {
    "xsmall": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    },
    "small": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    },
    "medium": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    },
    "large": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    },
    "xlarge": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    },
    "xxlarge": {
      "size": "NaNpx",
      "height": "NaNpx",
      "maxWidth": "NaNpx"
    }
  },
  "formField": {
    "border": {
      "error": {
        "color": {
          "dark": "white",
          "light": "status-critical"
        }
      },
      "position": "outer",
      "side": "bottom"
    },
    "content": {
      "pad": {
        "horizontal": "small",
        "bottom": "small"
      },
      "error": {
        "background": "status-critical"
      },
      "disabled": {
        "background": "status-disabled"
      }
    },
    "error": {
      "color": {
        "dark": "status-critical",
        "light": "status-critical"
      },
      "margin": {
        "vertical": "xsmall",
        "horizontal": "small"
      }
    },
    "help": {
      "color": {
        "dark": "dark-3",
        "light": "dark-3"
      },
      "margin": {
        "start": "small"
      }
    },
    "label": {
      "margin": {
        "vertical": "xsmall",
        "horizontal": "small"
      }
    },
    "margin": {}
  },
  "layer": {
    "background": {
      "dark": "#111111",
      "light": "#FFFFFF"
    }
  },
  "email": "israellaguan@gmail.com",
  "date": "2020-02-03T05:05:27.000Z"
}
const Splash = () => {
  const { push } = React.useContext(RouterContext)
  const [layer, setLayer] = React.useState()
  return (
    <Main fill="vertical" flex="grow" overflow="auto" justify="center" align="center" background={{"color":"background"}}>
      <Box align="center" justify="center" 
      // onClick={{"screen":77,"label":"Login"}} 
      animation={{"type":"fadeIn","size":"small"}} round="full" elevation="small">
        {layer === 75 && (
        <Layer animate={true} modal={false} responsive={true}>
          <Image src="https://raw.githubusercontent.com/Azordev/AUTH-FRONT/master/docs/Logo/imagotipo-blue.png" />
        </Layer>
      )}
      </Box>
    </Main>
  )
}

const Login = () => {
  const { push } = React.useContext(RouterContext)
  
  return (
    <Main overflow="auto" justify="center" align="center" background={{"color":"brand"}} direction="column">
      <Box align="center" justify="center">
        <Box align="center" justify="center" background={{"color":"background-front"}} animation={{"type":"slideUp","size":"small"}} round="small">
          <Form>
            <Header align="center" direction="column" flex={false} justify="center" gap="medium" pad="small" margin="medium">
              <Image src="https://raw.githubusercontent.com/Azordev/AUTH-FRONT/master/docs/Logo/imagotipo-blue.png" />
              <Text size="medium">
                Bienvenido(a)! Ingresa tus datos para empezar
              </Text>
            </Header>
            <Box align="center" justify="between" direction="row-responsive" pad={{"horizontal":"medium","vertical":"xsmall"}} round="small" border={{"color":"active"}} elevation="xsmall" margin="medium">
              <MailOption  />
              <TextInput type="text" plain={true} />
            </Box>
            <Box align="center" justify="between" direction="row-responsive" pad={{"horizontal":"medium","vertical":"xsmall"}} round="small" border={{"color":"active"}} margin={{"horizontal":"medium","vertical":"medium"}} elevation="xsmall">
              <Lock  />
              <TextInput type="password" plain={true} />
            </Box>
            <Box align="center" justify="between" flex={true} direction="row" margin="medium">
              <CheckBox label="Remember Me" toggle={false} checked={false} />
              <Anchor label="Forgot Password?" color="dark-2" />
            </Box>
            <Box align="center" justify="center" flex={true} margin="medium">
              <Button label="Sign In" hoverIndicator={true} color="control" plain={false} primary={true} type="submit" active={false} onClick={() => push("/home")} />
            </Box>
          </Form>
        </Box>
        <Box align="center" justify="between" flex={true} direction="row-responsive" margin="small">
          <Text size="xsmall" color="white">
            Eres Nuevo? 
          </Text>
          <Anchor label="Registrate" color="active-text" onClick={() => push("/register")} />
        </Box>
      </Box>
    </Main>
  )
}

const Register = () => {
  const { push } = React.useContext(RouterContext)
  
  return (
    <Main overflow="auto" justify="center" align="center" background={{"color":"brand"}} direction="column">
      <Box align="center" justify="center">
        <Box align="center" justify="center" background={{"color":"background-front"}} animation={{"type":"slideUp","size":"small"}} round="small" pad="medium">
          <Form>
            <Header align="center" direction="column" flex={false} justify="center" gap="medium" pad="small" margin="medium">
              <Image src="https://raw.githubusercontent.com/Azordev/AUTH-FRONT/master/docs/Logo/imagotipo-blue.png" />
              <Text size="medium">
                Registrate y empieza la experiencia
              </Text>
            </Header>
            <Box align="center" justify="between" flex={true} direction="row-responsive" pad={{"horizontal":"medium","vertical":"xsmall"}} margin="medium" round="small" elevation="xsmall">
              <User  />
              <TextInput type="text" plain={true} />
            </Box>
            <Box align="center" justify="between" flex={true} direction="row-responsive" pad={{"horizontal":"medium","vertical":"xsmall"}} margin="medium" round="small" elevation="xsmall">
              <MailOption  />
              <TextInput type="text" plain={true} />
            </Box>
            <Box align="center" justify="between" flex={true} direction="row-responsive" pad={{"horizontal":"medium","vertical":"xsmall"}} margin="medium" round="small" elevation="xsmall">
              <Lock  />
              <TextInput type="password" plain={true} />
            </Box>
            <Box align="center" justify="start" flex={true} direction="row" margin="medium">
              <CheckBox label="I agre with " toggle={false} checked={false} />
              <Anchor label="Privacy Policy" />
            </Box>
            <Box align="center" justify="center" flex={true} margin="medium">
              <Button label="Sign Up" hoverIndicator={true} color="control" plain={false} primary={true} type="submit" active={false} onClick={() => push("/login")} />
            </Box>
          </Form>
        </Box>
        <Box align="center" justify="between" flex={true} direction="row-responsive" margin="small">
          <Text size="xsmall" color="white">
            Ya tienes una cuenta? 
          </Text>
          <Anchor label="Ingresa" color="active-text" onClick={() => push("/login")} />
        </Box>
      </Box>
    </Main>
  )
}

const HomeOpen = () => {
  const { push } = React.useContext(RouterContext)
  
  return (
    <Main fill="vertical" flex="grow" overflow="auto" background={{"color":"background-back"}}>
      <Grid columns={["small","full"]} fill="vertical">
        <Box align="center" justify="between" background={{"color":"background-front"}} fill="vertical">
          <Box align="center" justify="between" flex={true} direction="row-responsive" fill="horizontal" margin={{"horizontal":"xsmall","vertical":"medium"}}>
            <Image src="https://raw.githubusercontent.com/Azordev/AUTH-FRONT/master/docs/Logo/imagotipo-blue.png" />
            <Box align="center" justify="center" direction="row-responsive">
              <Button icon={<Close />} plain={true} onClick={() => push("/home2")} />
            </Box>
          </Box>
          <Box align="stretch" justify="start" fill={true} margin={{"horizontal":"xsmall","vertical":"medium"}}>
            <Box align="center" justify="start" direction="row" gap="small" margin="small">
              <Home color="accent-2" />
              <Text color="accent-2">
                Home
              </Text>
            </Box>
            <Box align="center" justify="start" direction="row" gap="small" margin="small" onClick={{"screen":369,"label":"Configuration"}}>
              <SettingsOption color="accent-4" />
              <Text color="accent-4">
                Settings
              </Text>
            </Box>
          </Box>
        </Box>
        <Box align="stretch" justify="start" flex={false} direction="column">
          <Grid fill="horizontal" justify="stretch" columns={["small","flex"]} rows={["xsmall","xxsmall"]}>
            <Box align="center" justify="center" pad={{"horizontal":"small","vertical":"xsmall"}} flex={true} background={{"color":"graph-1"}}>
              <Form>
                <FormField color="accent-1">
                  <Box align="center" justify="center" background={{"color":"white"}} round="large" flex={true} direction="row" pad={{"horizontal":"small"}}>
                    <Search size="medium" />
                    <TextInput placeholder="Search" size="small" type="text" plain={true} />
                  </Box>
                </FormField>
              </Form>
            </Box>
            <Box align="center" justify="center" flex={true} direction="row" background={{"color":"graph-1"}} gap="medium" pad="medium">
              <Box align="center" justify="center" />
              <Box align="center" justify="center">
                <Menu icon={<Notification />} items={[{"label":"Notification 1","link":{"screen":293,"label":"Profile"}}]} dropBackground={{"color":"active","opacity":"medium"}} />
              </Box>
              <Box align="center" justify="center">
                <Help color="white" size="medium" />
              </Box>
              <Box align="center" justify="center" round="full" border={{"color":"white"}} overflow="hidden" onClick={{"screen":293,"label":"Profile"}}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/64px-User_font_awesome.svg.png" />
              </Box>
              <Box align="center" justify="center" onClick={{"screen":293,"label":"Profile"}}>
                <Text>
                  User Name
                </Text>
              </Box>
            </Box>
            <Box align="center" justify="center" background={{"color":"graph-1"}} flex={true} direction="row" gap="xsmall">
              <Box align="center" justify="center" flex={true} direction="row" gap="xsmall">
                <Home  />
                <Text>
                  Dashboard
                </Text>
              </Box>
            </Box>
            <Box align="center" justify="center" background={{"color":"graph-1"}} />
          </Grid>
          <Box align="center" justify="center" fill="vertical" />
        </Box>
      </Grid>
    </Main>
  )
}

const ProfileEdit = () => {
  const { push } = React.useContext(RouterContext)
  
  return (
    <Box fill="vertical" overflow="auto" align="center" flex="grow">
      <Box align="center" justify="center" fill="horizontal" background={{"color":"graph-1"}} gap="xxsmall" pad="xsmall">
        <Box align="center" justify="center" round="full" border={{"color":"white"}} overflow="hidden">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/64px-User_font_awesome.svg.png" />
        </Box>
        <Text>
          User Full Name
        </Text>
        <Button label="Cambiar" hoverIndicator={true} primary={false} disabled={true} />
      </Box>
      <Box align="center" justify="center" width="large" margin={{"horizontal":"small"}} background={{"color":"white"}}>
        <Box align="center" justify="between" flex={true} direction="row" fill="horizontal" margin={{"horizontal":"medium"}}>
          <Heading>
            Editar Perfil
          </Heading>
          <Button label="Settings" onClick={() => push("/settings")} />
        </Box>
        <Form>
          <Box align="center" justify="between" flex={true} direction="row">
            <FormField label="Contraseña">
              <Box align="center" justify="center" round="small" elevation="xsmall" margin="small">
                <TextInput type="text" plain={true} />
              </Box>
            </FormField>
            <FormField label="Repite la Contraseña">
              <Box align="center" justify="center" round="small" elevation="xsmall" margin="small">
                <TextInput plain={true} />
              </Box>
            </FormField>
          </Box>
          <Box align="center" justify="between" flex={true} direction="row">
            <FormField label="Correo Electronico">
              <Box align="center" justify="center" round="small" elevation="xsmall" margin="small">
                <TextInput type="text" plain={true} />
              </Box>
            </FormField>
            <FormField label="Nombre de la Empresa">
              <Box align="center" justify="center" round="small" elevation="xsmall" margin="small">
                <TextInput plain={true} />
              </Box>
            </FormField>
          </Box>
          <FormField label="Direccion">
            <Box align="center" justify="center" round="small" elevation="xsmall" margin="small">
              <TextInput plain={true} />
            </Box>
          </FormField>
          <Box align="center" justify="center" flex={true} direction="row">
            <FormField label="Pais">
              <Box align="center" justify="center" round="small" elevation="xsmall" margin="small">
                <TextInput plain={true} />
              </Box>
            </FormField>
            <FormField label="Ciudad">
              <Box align="center" justify="center" round="small" elevation="xsmall" margin="small">
                <TextInput plain={true} />
              </Box>
            </FormField>
            <FormField label="Codigo Postal">
              <Box align="center" justify="center" round="small" elevation="xsmall" margin="small">
                <TextInput plain={true} />
              </Box>
            </FormField>
          </Box>
          <FormField label="About me">
            <Box align="center" justify="center" round="small" elevation="xsmall" margin="small">
              <TextArea />
            </Box>
          </FormField>
          <Box align="center" justify="center">
            <Button label="Guardar" primary={true} onClick={() => push("/profile")} />
          </Box>
        </Form>
      </Box>
    </Box>
  )
}

const HomeClose = () => {
  const { push } = React.useContext(RouterContext)
  
  return (
    <Main fill="vertical" flex="grow" overflow="auto" background={{"color":"background-back"}}>
      <Grid columns={["xxsmall","full"]} fill="vertical">
        <Box align="center" justify="between" background={{"color":"background-front"}} fill="vertical">
          <Box align="center" justify="between" flex={false} direction="column" fill="horizontal" margin={{"horizontal":"xsmall","vertical":"medium"}} gap="xsmall">
            <Box align="center" justify="center" direction="row-responsive">
              <Button icon={<MenuIcon />} plain={true} onClick={() => push("/home")} />
            </Box>
          </Box>
          <Box align="stretch" justify="start" fill={true} margin={{"horizontal":"xsmall","vertical":"medium"}}>
            <Box align="center" justify="center" direction="row" gap="small" margin="small">
              <Home color="accent-2" />
            </Box>
            <Box align="center" justify="center" direction="row" gap="small" margin="small" onClick={{"screen":369,"label":"Configuration"}}>
              <SettingsOption color="accent-4" />
            </Box>
          </Box>
        </Box>
        <Box align="stretch" justify="start" flex={false} direction="column">
          <Grid fill="horizontal" justify="stretch" columns={["small","flex"]} rows={["xsmall","xxsmall"]}>
            <Box align="center" justify="center" pad={{"horizontal":"small","vertical":"xsmall"}} flex={true} background={{"color":"graph-1"}}>
              <Form>
                <FormField color="accent-1">
                  <Box align="center" justify="center" background={{"color":"white"}} round="large" flex={true} direction="row" pad={{"horizontal":"small"}}>
                    <Search size="medium" />
                    <TextInput placeholder="Search" size="small" type="text" plain={true} />
                  </Box>
                </FormField>
              </Form>
            </Box>
            <Box align="center" justify="center" flex={true} direction="row" background={{"color":"graph-1"}} gap="medium" pad="medium">
              <Box align="center" justify="center" />
              <Box align="center" justify="center">
                <Menu icon={<Notification />} items={[{"label":"Notification 1","link":{"screen":293,"label":"Profile"}}]} dropBackground={{"color":"active","opacity":"medium"}} />
              </Box>
              <Box align="center" justify="center">
                <Help color="white" size="medium" />
              </Box>
              <Box align="center" justify="center" direction="row" gap="small" onClick={{"screen":293,"label":"Profile"}}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/64px-User_font_awesome.svg.png" />
              </Box>
              <Box align="center" justify="center" onClick={{"screen":293,"label":"Profile"}}>
                <Text>
                  User Name
                </Text>
              </Box>
            </Box>
            <Box align="center" justify="center" background={{"color":"graph-1"}} flex={true} direction="row" gap="xsmall">
              <Box align="center" justify="center" flex={true} direction="row" gap="xsmall">
                <HomeIcon  />
                <Text>
                  Dashboard
                </Text>
              </Box>
            </Box>
            <Box align="center" justify="center" background={{"color":"graph-1"}} />
          </Grid>
          <Box align="center" justify="center" fill="vertical" />
        </Box>
      </Grid>
    </Main>
  )
}

const Profile = () => {
  const { push } = React.useContext(RouterContext)
  
  return (
    <Box fill="vertical" overflow="auto" align="center" flex="grow">
      <Box align="center" justify="center" fill="horizontal" background={{"color":"graph-1"}} gap="xxsmall" pad="xsmall">
        <Box align="center" justify="center" round="full" border={{"color":"white"}} overflow="hidden">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/64px-User_font_awesome.svg.png" />
        </Box>
        <Text>
          User Full Name
        </Text>
        <Button label="Cambiar" hoverIndicator={true} reverse={false} primary={true} icon={<Edit />} onClick={() => push("/profile")} />
      </Box>
      <Box align="center" justify="center" width="large" margin={{"horizontal":"small"}} background={{"color":"white"}}>
        <Box align="center" justify="between" flex={true} direction="row" fill="horizontal" margin={{"horizontal":"medium"}}>
          <Heading>
            Perfil
          </Heading>
          <Button label="Settings" onClick={() => push("/settings")} />
        </Box>
        <Box align="center" justify="center" margin={{"horizontal":"small"}} fill="horizontal" gap="medium">
          <Box align="center" justify="start" flex={true} direction="row-responsive" gap="xsmall" fill="horizontal">
            <Text weight="bold">
              User Id: 
            </Text>
            <Text>
              3416346431
            </Text>
          </Box>
          <Box align="center" justify="start" flex={true} direction="row-responsive" gap="xsmall" fill="horizontal">
            <Text weight="bold">
              Name: 
            </Text>
            <Text>
              User Full Name
            </Text>
          </Box>
          <Box align="center" justify="start" flex={true} direction="row-responsive" gap="xsmall" fill="horizontal">
            <Text weight="bold">
              Correo Electronico: 
            </Text>
            <Text>
              example@email.com
            </Text>
          </Box>
          <Box align="center" justify="start" flex={true} direction="row-responsive" gap="xsmall" fill="horizontal">
            <Text weight="bold">
              Empresa: 
            </Text>
            <Text>
              Mi Empresa
            </Text>
          </Box>
          <Box align="center" justify="start" flex={true} direction="row-responsive" gap="xsmall" fill="horizontal">
            <Text weight="bold">
              Dirección:  
            </Text>
            <Text>
              Calle 1 #2 Barrio Centro
            </Text>
          </Box>
          <Box align="center" justify="start" flex={true} direction="row-responsive" gap="xsmall" fill="horizontal">
            <Text weight="bold">
              Ciudad:  
            </Text>
            <Text>
              Distrito Capital
            </Text>
          </Box>
          <Box align="center" justify="start" flex={true} direction="row-responsive" gap="xsmall" fill="horizontal">
            <Text weight="bold">
              Pais:  
            </Text>
            <Text>
              Liberia
            </Text>
          </Box>
          <Box align="center" justify="start" flex={true} direction="row-responsive" gap="xsmall" fill="horizontal">
            <Text weight="bold">
              Codigo Postal:  
            </Text>
            <Text>
              100001
            </Text>
          </Box>
          <Box align="center" justify="start" flex={true} direction="row-responsive" gap="xsmall" fill="horizontal">
            <Text weight="bold">
              Sobre Mi:  
            </Text>
            <Text>
              Lorem Ipsum
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Configuration = () => {
  const { push } = React.useContext(RouterContext)
  
  return (
    <Box fill="vertical" overflow="auto" align="center" flex="grow">
      <Box align="center" justify="center" fill="horizontal" background={{"color":"graph-1"}} gap="xxsmall" pad="xsmall" onClick={{"screen":293,"label":"Profile"}}>
        <Box align="center" justify="center" round="full" border={{"color":"white"}} overflow="hidden">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/64px-User_font_awesome.svg.png" />
        </Box>
        <Text>
          User Full Name
        </Text>
      </Box>
      <Box align="center" justify="center">
        <Box align="center" justify="between" flex={true} direction="row" fill="horizontal" margin={{"horizontal":"medium"}}>
          <Heading>
            Configuration
          </Heading>
        </Box>
        <Form>
          <Box align="center" justify="center" width="large" margin={{"horizontal":"small"}} background={{"color":"white"}} />
          <FormField label="Theme">
            <Box align="center" justify="center" flex={true} direction="row-responsive" fill="horizontal" gap="large">
              <Box align="center" justify="center" width="small" height="small" gap="medium">
                <Box align="center" justify="center" background={{"color":"white"}} height="xsmall" width="xsmall" border={{"side":"all"}} elevation="xsmall" round="xsmall" />
                <CheckBox label="Light" checked={true} />
              </Box>
              <Box align="center" justify="center" width="small" height="small" gap="medium">
                <Box align="center" justify="center" background={{"color":"black"}} height="xsmall" width="xsmall" border={{"side":"all"}} elevation="xsmall" round="xsmall" />
                <CheckBox label="Dark" />
              </Box>
            </Box>
          </FormField>
          <FormField label="Modulos">
            <Grid columns={{"size":"xsmall","count":"fit"}} gap="large">
              <Box align="center" justify="center">
                <Box align="center" justify="center" margin="medium" background={{"color":"light-6"}} height="small" width="medium" round="xsmall" elevation="xsmall">
                  <Add color="dark-6" />
                  <Text color="dark-6" weight="bold">
                    Agregar Modulo
                  </Text>
                </Box>
              </Box>
              <Box align="center" justify="center" gap="xxsmall">
                <Heading level="3">
                  Modulo Básico
                </Heading>
                <Paragraph>
                  Quedan 10 dias
                </Paragraph>
                <Stack>
                  <Meter background="border" thickness="xsmall" />
                  <Meter background="control" thickness="xsmall" round={true} type="bar" values={[{"color":"control","highlight":true,"label":"Le quedan 10 Dias","value":50}]} size="small" />
                </Stack>
                <Box align="center" justify="center">
                  <Button label="Cancelar" />
                </Box>
              </Box>
            </Grid>
          </FormField>
          <FormField>
            <Box align="center" justify="between" flex={true} fill="horizontal" direction="row">
              <Text weight="bold" textAlign="start">
                Notificaciones al Correo
              </Text>
              <CheckBox toggle={true} checked={true} />
            </Box>
          </FormField>
          <FormField label="Idiomas">
            <Box align="center" justify="center" flex={true} direction="row-responsive" fill="horizontal" gap="large">
              <Box align="center" justify="center" width="small" height="small" gap="medium">
                <Box align="center" justify="center" background={{"color":"white","image":"url('https://raw.githubusercontent.com/Azordev/AUTH-FRONT/master/docs/Images/es.png')"}} height="xsmall" width="xsmall" border={{"side":"all"}} elevation="xsmall" round="full" overflow="hidden" />
                <CheckBox label="Espanol" checked={true} />
              </Box>
              <Box align="center" justify="center" width="small" height="small" gap="medium">
                <Box align="center" justify="center" background={{"color":"border","image":"url('https://raw.githubusercontent.com/Azordev/AUTH-FRONT/master/docs/Images/en.png')"}} height="xsmall" width="xsmall" border={{"side":"all"}} elevation="xsmall" round="full" overflow="hidden" />
                <CheckBox label="Ingles" />
              </Box>
            </Box>
          </FormField>
          <Box align="center" justify="center">
            <Button label="Guardar" primary={true} type="submit" onClick={() => push("/home2")} />
          </Box>
        </Form>
      </Box>
    </Box>
  )
}

export default () => (
  <Grommet full theme={theme}>
    <Router>
      <Routes>
        <Route path="/" Component={Splash} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/home" Component={HomeOpen} />
        <Route path="/profile" Component={ProfileEdit} />
        <Route path="/home2" Component={HomeClose} />
        <Route path="/profile" Component={Profile} />
        <Route path="/settings" Component={Configuration} />
      </Routes>
    </Router>
  </Grommet>
)
