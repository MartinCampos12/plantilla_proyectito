document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-fecha");
  const input = document.getElementById("input-fecha");
  const msg = document.getElementById("msg");

  const TARGET_ISO = "2025-01-01"; // Fecha correcta

  function normalizeToISO(val) {
    if (!val) return "";
    if (val.includes("-")) return val;
    if (val.includes("/")) {
      const [dd, mm, yyyy] = val.split("/").map(s => s.trim());
      if (!dd || !mm || !yyyy) return "";
      return `${yyyy}-${String(mm).padStart(2,"0")}-${String(dd).padStart(2,"0")}`;
    }
    return "";
  }

  form.addEventListener("submit", e => {
    e.preventDefault();

    let val = input.value;

    // fallback por si el value viene vacío pero hay valueAsDate
    if (!val && input.valueAsDate instanceof Date) {
      const d = input.valueAsDate;
      val = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
    }

    const iso = normalizeToISO(val);

    if (iso === TARGET_ISO) {
      // Redirigir si es correcto
      window.location.href = "home.html";
    } else {
      msg.textContent = "❌ Incorrecto";
      msg.className = "mt-3 fw-semibold text-danger";
    }
  });
});
