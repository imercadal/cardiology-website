"use client";

import { useState } from "react";

const Address =
  "Calle 30 Oriente #1420, Talca Edificio Plaza Oriente, Local 1";

export function CopyLinkButton() {
  const [copiado, setCopiado] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(Address);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (error) {
        console.error("No se pudo copiar el enlace", error);
        alert("❌ No se pudo copiar el enlace. Inténtalo nuevamente.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
    >
        <span>{copiado ? "Enlace copiado ✅" : "Copiar dirección"}</span>
    </button>
  );
}
