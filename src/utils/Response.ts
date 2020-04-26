
export class ResponseData {
  public static success (data) {
    const res = new this()
    if (data instanceof Array) {
      res.items = data
    } else {
      res.item = data
    }
    return res
  }
  public static error (code, message) {
    return new this({ code, message })
  }
  constructor ({ code = 0, message = 'success' } = {}) {
    this.code = code
    this.message = message
  }
  private code: number
  private message: string
  private item: Record<string, any> 
  private items: Record<string, any>[]
}