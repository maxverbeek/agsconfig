import { TrayItem } from "types/service/systemtray";

const systemtray = await Service.import('systemtray')

function trayItem(item: TrayItem) {
  return Widget.Button({
    child: Widget.Icon().bind('icon', item, 'icon'),
    tooltipMarkup: item.bind('tooltip_markup'),
    onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: (_, event) => item.openMenu(event),
  })
}
export function Tray() {
  return Widget.Box({
    children: systemtray.bind('items').as(items => items.map(trayItem))
  })
}
