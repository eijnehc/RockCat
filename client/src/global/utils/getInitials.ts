export const getInitials = (value: string) => {
  const names = value.split(' ')
  return `${names[0].charAt(0).toUpperCase()}${
    names.length === 1 ? names[0].charAt(1).toUpperCase() : names[names.length - 1].charAt(0).toUpperCase()
  }`
}
