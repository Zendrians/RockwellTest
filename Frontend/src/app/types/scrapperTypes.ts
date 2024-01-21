export interface IHeadersScrap {
  tag: string;
  text: string;
}

export interface IScrappedData {
  type: string;
  data: Array<IHeadersScrap> | string;
}
