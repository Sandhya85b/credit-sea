document
  .getElementById("loanForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const loanDetails = {
      fullName: document.getElementById("fullName").value,
      loanAmount: document.getElementById("loanAmount").value,
      loanTenure: document.getElementById("loanTenure").value,
      employmentStatus: document.getElementById("employmentStatus").value,
      reason: document.getElementById("reason").value,
      employmentAddress: document.getElementById("employmentAddress").value,
    };
    try {
      const res = await fetch("http://localhost:8081/api/loan/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loanDetails),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Submission failed");

      alert("Loan application submitted successfully!");
    } catch (error) {
      alert("Error: " + error.message);
    }

    alert("Loan application submitted");
  });
