import {
  Html,
  Head,
  Preview,
  Body,
  Text,
  Section,
  Container,
  Heading,
  Hr,
  Link,
  Img,
  Button,
  Tailwind,
} from "@react-email/components";

type MessageTemplateProps = {
  logoImage?: string;
  name: string;
  email?: string | undefined;
  topic?: string | undefined;
  message: string;
};

export default function MessageTemplate({
  name,
  email,
  topic,
  message,
}: MessageTemplateProps) {
  const previewText = `Message from ${name}`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px] mb-[24px]">
              <Link href="https://tim-ng.me">
                <Img
                  src="https://images.ctfassets.net/mzyich089xy0/ifHbF8dzaGa6bmVBStpIo/c367b779d70bdc831109ea46ae009f25/icon.png"
                  width="48"
                  height="48"
                  alt="Tim Ng Design"
                  className="my-0 mx-auto rounded-md"
                />
              </Link>
              <Heading className="text-black text-[32px] font-medium text-center p-0 mx-0">
                <strong>You&apos;ve got mail!</strong>
              </Heading>
            </Section>
            <Text className="text-black text-[16px] leading-[24px]">
              Sender: {name}
            </Text>
            <Text className="text-black text-[16px] leading-[24px]">
              Contact: {email}
            </Text>
            <Text className="text-black text-[16px] leading-[24px]">
              Topic: {topic}
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-black text-[16px] leading-[24px]">
              {message}
            </Text>
            <Section className="text-center mt-[16px] mb-[32px]">
              <Button
                href={`mailto:${email}`}
                className="text-white text-[16px] font-medium bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md mx-auto my-4 py-[12px] px-[16px]"
              >
                Reply
              </Button>
            </Section>
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This email was intended for Tim Ng. If this was sent to you in
              error, please contact{" "}
              <Link
                href="mailto:hello@tim-ng.me"
                className="text-blue-600 no-underline"
              >
                hello@tim-ng.me
              </Link>
              .
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

// Inline styles for the email template
// const main = {
//   backgroundColor: "#ffffff",
// };

// const container = {
//   margin: "0 auto",
//   padding: "20px 0 48px",
//   width: "580px",
// };

// const heading = {
//   fontSize: "32px",
//   lineHeight: "1.3",
//   fontWeight: "700",
//   color: "#484848",
// };

// const paragraph = {
//   fontSize: "18px",
//   lineHeight: "1.4",
//   color: "#484848",
// };
