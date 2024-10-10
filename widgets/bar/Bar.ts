import { Audio } from "./buttons/audio";
import { Bluetooth, connectedList } from "./buttons/bluetooth";
import { DateTime } from "./buttons/datetime";
import { NetworkIndicator } from "./buttons/network";
import { Tray } from "./buttons/tray";

export function Bar(monitor: number) {
  return Widget.Window({
    monitor,
    class_name: 'bar',
    name: `bar${monitor}`,
    exclusivity: 'exclusive',
    anchor: ['top', 'left', 'right'],
    child: Widget.CenterBox({
      start_widget: Widget.Label({
        label: 'hello 3',
        hpack: "start"
      }),
      center_widget: Widget.Box({
        hpack: "center",
        children: []
      }),
      end_widget: Widget.Box({
        hpack: "end",
        hexpand: true,
        children: [connectedList(), Bluetooth(), NetworkIndicator(), Audio(), Tray(), DateTime()]
      })
    })
  })
}

