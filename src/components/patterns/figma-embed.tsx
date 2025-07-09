type FigmaEmbedProps = {
  figmaUrl: string;
  title?: string;// optional to make the title more specific to the content
};

export function FigmaEmbed({ figmaUrl, title = "Figma Design preview" }: FigmaEmbedProps) {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
        src={figmaUrl}
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
}
