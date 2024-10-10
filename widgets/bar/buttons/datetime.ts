import { datetime } from "lib/variables"

const datetimeFormat = "%a %d %b, %H:%M"

export function DateTime() {
  return Widget.Button({
    hexpand: false,
    label: datetime.bind().as((value) => value.format(datetimeFormat) || 'error')
  })
}
