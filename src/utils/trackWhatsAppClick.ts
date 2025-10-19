"use client";

export async function trackWhatsAppClick(section: string) {
  try {
    // ✅ Detecta device
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const deviceType = isMobile ? "Mobile" : "Desktop";

    // ✅ Detecta sistema operacional
    let os = "Desconhecido";
    if (navigator.userAgent.includes("Win")) os = "Windows";
    else if (navigator.userAgent.includes("Mac")) os = "macOS";
    else if (navigator.userAgent.includes("Android")) os = "Android";
    else if (
      navigator.userAgent.includes("iPhone") ||
      navigator.userAgent.includes("iPad")
    )
      os = "iOS";

    // ✅ Detecta navegador
    let browser = "Desconhecido";
    if (
      navigator.userAgent.includes("Chrome") &&
      !navigator.userAgent.includes("Edg")
    )
      browser = "Chrome";
    else if (navigator.userAgent.includes("Firefox")) browser = "Firefox";
    else if (
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    )
      browser = "Safari";
    else if (navigator.userAgent.includes("Edg")) browser = "Edge";

    // ✅ Coleta dados do cliente
    const userLanguage = navigator.language || "Desconhecido";
    const screenWidth = window.innerWidth || 0;
    const screenHeight = window.innerHeight || 0;
    const timezone =
      Intl.DateTimeFormat().resolvedOptions().timeZone || "Desconhecido";

    // ✅ UTM e referrer
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "N/A";
    const utmMedium = urlParams.get("utm_medium") || "N/A";
    const utmCampaign = urlParams.get("utm_campaign") || "N/A";
    const referrer = document.referrer || "Direct Traffic";

    // ✅ Data e hora do clique
    const date = new Date().toISOString();

    // ✅ Monta payload
    const clickData = {
      section,
      date,
      browser,
      deviceType,
      os,
      referrer,
      screenHeight,
      screenWidth,
      timezone,
      userLanguage,
      utmCampaign,
      utmMedium,
      utmSource,
    };

    // ✅ Envia para backend
    fetch("/api/metrics/conversion/whatsapp/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clickData),
    }).catch((e) => console.error("Erro ao enviar tracking:", e));
  } catch (e) {
    console.error("Erro ao coletar dados do clique:", e);
  }
}
