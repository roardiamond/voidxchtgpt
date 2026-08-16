/**
 * VOID X HUB – Auth helper
 * Uses the existing Render backend.
 * Never store passwords or secrets here.
 */

const VXH_API = "https://voidxhub-backend.onrender.com";

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("vxh_user") || "null");
  } catch {
    return null;
  }
}

function setUser(user) {
  if (user) {
    localStorage.setItem("vxh_user", JSON.stringify(user));
  }
}

function clearUser() {
  localStorage.removeItem("vxh_user");
}

async function refreshUser() {
  try {
    const res = await fetch(VXH_API + "/api/me", {
      credentials: "include"
    });
    const data = await res.json();
    if (data.success && data.user) {
      setUser(data.user);
      return data.user;
    }
  } catch (e) {
    // network error – keep existing local data
  }
  return getUser();
}

function updateNavAuthState() {
  const user = getUser();
  const loginEl = document.getElementById("nav-login");
  const registerEl = document.getElementById("nav-register");
  const dashboardEl = document.getElementById("nav-dashboard");

  if (user) {
    if (loginEl) loginEl.classList.add("hidden");
    if (registerEl) registerEl.classList.add("hidden");
    if (dashboardEl) dashboardEl.classList.remove("hidden");
  } else {
    if (loginEl) loginEl.classList.remove("hidden");
    if (registerEl) registerEl.classList.remove("hidden");
    if (dashboardEl) dashboardEl.classList.add("hidden");
  }
}

function vxhLogout() {
  clearUser();
  fetch(VXH_API + "/api/logout", {
    method: "POST",
    credentials: "include"
  }).catch(() => {});
  window.location.href = "login.html";
}

// Run on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", updateNavAuthState);
} else {
  updateNavAuthState();
}
