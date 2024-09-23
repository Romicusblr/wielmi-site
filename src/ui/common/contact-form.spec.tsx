import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "./contact-form"; // Adjust path to your form
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "./contact-form.schema";

// Mock useWeb3Forms to prevent actual email sending
jest.mock("@web3forms/react", () => ({
  __esModule: true,
  default: () => ({
    submit: jest.fn((data, onSuccess, onError) => {
      onSuccess("Email sent successfully", data);
    }),
  }),
}));

const ContactFormWrapper = () => {
  const methods = useForm({
    resolver: yupResolver(contactFormSchema),
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <ContactForm />
    </FormProvider>
  );
};

describe("ContactForm Tests", () => {
  test("displays validation errors when inputs are empty", async () => {
    render(<ContactFormWrapper />);

    const submitButton = screen.getByRole("button", { name: /wysłać/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText("Imię jest wymagane")).toBeInTheDocument();
    expect(await screen.findByText("Email jest wymagany")).toBeInTheDocument();
    expect(await screen.findByText("Numer telefonu jest wymagany")).toBeInTheDocument();
    expect(await screen.findByText("Wiadomość musi mieć co najmniej 4 znaków")).toBeInTheDocument();
  });

  test.skip("submits the form successfully without sending email", async () => {
    render(<ContactFormWrapper />);

    fireEvent.change(screen.getByPlaceholderText("Podaj imię..."), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Podaj email..."), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Podaj numer telefonu..."), {
      target: { value: "123456789" },
    });
    fireEvent.change(screen.getByPlaceholderText("Informacje dla nas..."), {
      target: { value: "This is a test message." },
    });

    const submitButton = screen.getByRole("button", { name: /wysłać/i });
    fireEvent.click(submitButton);

    // Expect success message after form submission
    await waitFor(() =>
      expect(screen.getByText("Dziękujemy! Formularz został wysłany pomyślnie.")).toBeInTheDocument()
    );
  });
});
