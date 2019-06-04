export const reset = state => {
  let data = JSON.parse(JSON.stringify(state.init))
  data.init = JSON.parse(JSON.stringify(state.init))
  return JSON.parse(JSON.stringify(data))
}
