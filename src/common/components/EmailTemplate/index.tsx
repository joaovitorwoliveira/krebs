import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>
        Mensagem de contato do website
      </h1>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ color: "#555", fontSize: "18px", marginBottom: "15px" }}>
          Detalhes do contato:
        </h2>
        <p style={{ margin: "8px 0", color: "#666" }}>
          <strong>Nome:</strong> {name}
        </p>
        <p style={{ margin: "8px 0", color: "#666" }}>
          <strong>Email:</strong> {email}
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "#555", fontSize: "18px", marginBottom: "15px" }}>
          Mensagem:
        </h2>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            whiteSpace: "pre-wrap",
            color: "#333",
          }}
        >
          {message}
        </div>
      </div>

      <div
        style={{
          borderTop: "2px solid #007bff",
          paddingTop: "20px",
          marginTop: "30px",
          textAlign: "center",
          color: "#666",
          fontSize: "14px",
        }}
      >
        <p>
          Esta mensagem foi enviada através do formulário de contato do
          portfólio.
        </p>
        <p>
          Responda diretamente para: <strong>{email}</strong>
        </p>
      </div>
    </div>
  );
}
