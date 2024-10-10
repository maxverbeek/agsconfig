const network = await Service.import('network')

const WifiIndicator = () => Widget.Icon({
  icon: network.wifi.bind('icon_name'),
  // only show tooltip if there is text
  has_tooltip: network.wifi.bind('ssid').as(t => !!t),
  tooltip_text: network.wifi.bind('ssid').as(t => t || '')
})

const WiredIndicator = () => Widget.Icon({
  icon: network.wired.bind('icon_name'),
})

export const NetworkIndicator = () => Widget.Button({
  child: Widget.Stack({
    children: {
      wifi: WifiIndicator(),
      wired: WiredIndicator(),
    },
    shown: network.bind('primary').as(p => p || 'wifi'),
  })
})
