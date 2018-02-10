interface IOptionsType {
  baseFontSize: string;
  baseLineHeight: number;
  headerLineHeight: number;
  scaleRatio: number;
  googleFonts: string[];
  headerFontFamily: string[];
  bodyFontFamily: string[];
  headerColor: string;
  bodyColor: string;
  headerWeight: string;
  bodyWeight: string;
  boldWeight: string;
  includeNormalize: boolean;
  blockMarginBottom: number;
}

declare module "typography" {
  class Typography {
    public rhythm: any;
    constructor(options: IOptionsType);
  }
  export default Typography;
}
