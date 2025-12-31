import Typography from "@/components/ui-kit/typography";

export default function Home() {
  return (
    <div
      style={{ padding: 40, display: "flex", flexDirection: "column", gap: 20 }}
    >
      {/* HERO */}
      <Typography variant="hero-display">Hero Display Text</Typography>

      {/* DISPLAYS */}
      <Typography variant="display-1">Display 1 Text</Typography>

      <Typography variant="display-2">Display 2 Text</Typography>

      <Typography variant="display-3">Display 3 Text</Typography>

      {/* HEADERS */}
      <Typography variant="header-1">Header 1 Text</Typography>

      <Typography variant="header-2">Header 2 Text</Typography>

      <Typography variant="header-3">Header 3 Text</Typography>

      {/* PARAGRAPHS */}
      <Typography variant="para-1">
        This is paragraph 1 text. New line supported using pre-line.
      </Typography>

      <Typography variant="para-2">
        This is paragraph 2 with gray color.
      </Typography>

      <Typography variant="para-3">
        This is paragraph 3 with secondary color.
      </Typography>

      {/* BUTTON TEXT */}
      <Typography variant="buttonText">Button Label Text</Typography>

      {/* LINK TEXT */}
      <Typography variant="linkText" as="a" href="#">
        Link Text Example
      </Typography>

      {/* CUSTOM TAG OVERRIDE */}
      <Typography variant="header-2" >
        Header 2 styling but rendered as H1
      </Typography>
      <Typography variant="header-hero" >
        Header Hero Large Complex
      </Typography>
    </div>
  );
}
