// Hide skeletons after page load
window.addEventListener("load", () => {
  const skeletons = document.getElementById("skeletons");
  if (skeletons) skeletons.style.display = "none";

  // Stagger animation
  document.querySelectorAll(".book-card").forEach((card, i) => {
    card.style.animationDelay = `${i * 0.1}s`;
  });
});

// Modal functions
function openModal(title, author, notes) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-author").innerText = author;
  document.getElementById("modal-notes").innerText = notes;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}