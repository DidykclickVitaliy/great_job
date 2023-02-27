declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const className: IClassNames;
  export = className;
}

declare module "*.svg" {
  import { SVGProps, VFC } from "react";
  const SVG: VFC<SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare const __IS__DEV: boolean;
