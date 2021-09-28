export const ImageWithCaption = () => (
  <>
    <Image
      src="/placeholder-3x2.png"
      loadingAspectRatio="3:2"
      alt="Example Image"
    />
    <Caption creditText="Credit text">
      Image with Caption
    </Caption>
  </>
);

export const ImageWithCaptionInset = () => (
  <>
    <Image
      src="/placeholder-3x2.png"
      loadingAspectRatio="3:2"
      alt="Example Image"
    />
    <CaptionInset creditText="Credit text">
      Image with CaptionInset
    </CaptionInset>
  </>
);