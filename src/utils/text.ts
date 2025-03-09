export const camelToKebabCase = (str: string | undefined) => {
  if (!str) return ""

  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
}
