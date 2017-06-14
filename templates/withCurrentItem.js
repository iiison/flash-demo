export default function withCurrentItem(context, options) {
  const contextWithCurrentItem = context

  contextWithCurrentItem.currentItem = options.hash.currentItem

  return options.fn(contextWithCurrentItem)
}
