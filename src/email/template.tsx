import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type MessageTemplateProps = {
  name: string;
  email: string | undefined;
  topic: string | undefined;
  message: string;
}

export default function MessageTemplate({ name, email, topic, message }: MessageTemplateProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>You&apos;ve got mail!</Text>
          <Text style={paragraph}>Sender: {name}</Text>
          <Text style={paragraph}>Contact: {email}</Text>
          <Text style={paragraph}>Topic: {topic}</Text>
          <Text style={paragraph}>Message: {message}</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};