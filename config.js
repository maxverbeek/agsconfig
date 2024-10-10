const main = "/tmp/asztal/main.js"
const entry = `${App.configDir}/main.ts`

try {
    await Utils.execAsync([
        "bun", "build", entry,
        "--outfile", main,
        "--external", "resource://*",
        "--external", "gi://*",
        "--external", "file://*",
    ]);
} catch (error) {
    console.error(error)
    App.quit()
}

await import(`file://${main}`)

export { }
