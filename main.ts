import { forMonitors } from "lib/utils"
import { Bar } from 'widgets/bar/Bar'

App.config({
  windows: () => [
    ...forMonitors(Bar)
  ]
})
