import { NextRequest, NextResponse } from "next/server";
import { ref, push } from "firebase/database";
import { database } from "@/firebase/client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
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
    } = body;

    // ✅ Tenta pegar IP pelo header
    let ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      null;

    // ✅ Fallback se não conseguir
    if (!ip) {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        ip = data.ip;
      } catch (error) {
        console.error("Erro ao obter IP externo:", error);
        ip = "Desconhecido";
      }
    }

    // ✅ Validação de campos
    const missingFields = [];
    for (const [key, value] of Object.entries({
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
    })) {
      if (value === undefined || value === null || value === "") {
        missingFields.push(key);
      }
    }

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          message: "Campos obrigatórios ausentes",
          missing: missingFields,
        },
        { status: 400 }
      );
    }

    // ✅ Salva no Realtime Database
    const whatsAppClickRef = ref(database, "whatsapp_clicks");
    const newWhatsAppClickRef = await push(whatsAppClickRef, {
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
      ip,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Conversão registrada com sucesso!",
      flag: "success",
      id: newWhatsAppClickRef.key,
    });
  } catch (error) {
    console.error("Erro ao criar documento:", error);
    return NextResponse.json(
      {
        message: "Erro ao criar documento",
        flag: "error",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
