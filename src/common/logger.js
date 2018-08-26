const format = str => str

export const log = str => console.log(format(str)) // eslint-disable-line
export const error = str => console.error(format(str)) // eslint-disable-line
export const warn = str => console.warn(format(str)) // eslint-disable-line
