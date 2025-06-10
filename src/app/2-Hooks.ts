import { toUpperCase } from './Utils'

export class StringUtils {
  public toUpperCase(arg: string) {
    if(!arg){
      throw new Error("Invalid arguments!")
    }
    return toUpperCase(arg)
  }
}
