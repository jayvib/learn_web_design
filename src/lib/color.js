
const variants = [
  "primary",
  "secondary",
  "info",
  "warning",
  "success",
  "danger",
  "dark",
]

export function getRandomVariant() {
  return variants[Math.floor(Math.random()*variants.length)]
}