export default function EmailTemplate({ name, email, message }: { name: string; email: string; message: string }) {
  return (
    <div>
      <h3>New message from {name}</h3>
      <h4>Email: {email}</h4>
      <p>
        <strong>Message: </strong>
        {message}
      </p>
    </div>
  );
}
