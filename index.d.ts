declare module ImageMSE {
    type Data = number[] | any[] | Uint8Array;
    /**
     * Grey = 1, GreyAlpha = 2, RGB = 3, RGBAlpha = 4
     */
    type Channels = number;
    interface IImage {
        data: Data;
        width: number;
        height: number;
        channels: Channels;
    }
    interface IResult {
        mse: number;
        psnr: number;
    }
    function compare(image1: IImage, image2: IImage, luminance?: boolean): IResult;
}
export = ImageMSE;
