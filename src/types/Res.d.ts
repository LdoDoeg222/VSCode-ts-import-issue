export interface Res<T = any>{
  code: number,
  msg: string,
  data: T
}