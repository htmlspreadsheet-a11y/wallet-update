function submitPhone() {
    const phone = document.getElementById("phone").value.trim();

    if (!phone) {
        alert("Please enter a phone number ❗");
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbx82Dn_fLTw_FhOsPLQdmOf7XAYnlTsdMBGJwB_-CVWk4_ebie-DiDjx5pSazDRrEW4cQ/exec", {   // ⬅️ Replace with your Google Apps Script web URL
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone })
    });

    alert("Submitted successfully ✔️");
    document.getElementById("phone").value = "";
}
