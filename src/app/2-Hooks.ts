export class StringUtils {
  /* istanbul ignore next */
  public toUpperCase(arg: string) {
    if (!arg) {
      throw new Error('Invalid arguments!')
    }
    return arg.toUpperCase()
  }
}
