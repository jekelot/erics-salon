"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { site } from "@/lib/site";

const WHATSAPP_NUMBER = "256775894564";

function normalize(value: string) {
  return String(value || "").trim();
}

function createBookingMessage(booking: any) {
  const name = normalize(booking.name);
  const service = normalize(booking.service);
  const dateTime = normalize(booking.dateTime);
  const phone = normalize(booking.phone);
  const notes = normalize(booking.notes);
  const lines = [
    `Hello ${site.name} - Erix helped me prepare this booking request.`,
    "",
    `Name: ${name || "Not provided"}`,
    `Service: ${service || "Not provided"}`,
    `Preferred date/time: ${dateTime || "Not provided"}`,
    `Phone/WhatsApp: ${phone || "Not provided"}`,
    notes ? `Notes: ${notes}` : null,
    "",
    "Please confirm availability with Eric.",
  ];

  return lines.filter(Boolean).join("\n");
}

function buildWhatsAppUrl(booking: any) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    createBookingMessage(booking)
  )}`;
}

function getErixResponse(input: string) {
  const text = normalize(input).toLowerCase();

  if (!text) {
    return {
      text: "I can help with services, prices, opening hours, location, or booking an appointment with Eric.",
      action: null,
    };
  }

  if (/(book|appointment|reserve|slot|schedule)/.test(text)) {
    return {
      text: "Absolutely. Tap 'Book appointment' and I'll collect your service, preferred day/time, name, and phone, then open WhatsApp for Eric to confirm.",
      action: "book",
    };
  }

  if (/(service|offer|menu|cut|colour|color|balayage|treatment|beard|groom|nails|spa|massage)/.test(text)) {
    return {
      text: `${site.name} offers Haircuts, Colouring, Chemical treatments, Nails, Spa, and Wellness services. You can see the full menu on our Services page.`,
      action: "services",
    };
  }

  if (/(price|cost|charge|how much)/.test(text)) {
    return {
      text: "Prices vary by service and hair type. For example, a Ladies Cut is 100K, and Men's Hair Cut is 60K. Full details are on our Services page.",
      action: "prices",
    };
  }

  if (/(hour|open|close|time|saturday|sunday|monday|today)/.test(text)) {
    const hours = site.hours.map(h => `${h.day}: ${h.time}`).join("; ");
    return {
      text: `Opening hours: ${hours}.`,
      action: "hours",
    };
  }

  if (/(where|location|address|directions|find)/.test(text)) {
    return {
      text: `${site.name} is located at ${site.address.street}, ${site.address.city}, ${site.address.state}.`,
      action: "location",
    };
  }

  if (/(phone|whatsapp|call|contact)/.test(text)) {
    return {
      text: `You can reach ${site.name} on WhatsApp or phone at ${site.phoneDisplay}. I can also prepare a booking message for you here.`,
      action: "contact",
    };
  }

  if (/(hello|hi|hey|good)/.test(text)) {
    return {
      text: "Hello, I'm Erix. I can help you choose a service, check hours, find the salon, or book an appointment with Eric.",
      action: null,
    };
  }

  return {
    text: `I can help with ${site.name} services, prices, hours, location, and bookings. For anything very specific, I can prepare a WhatsApp message for Eric to confirm.`,
    action: null,
  };
}

interface Message {
  text: string;
  author: "erix" | "guest";
}

export function ErixAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: `Welcome to ${site.name}. I'm Erix. I can answer questions or help you book an appointment with Eric.`,
      author: "erix",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [bookingStep, setBookingStep] = useState<string | null>(null);
  const [booking, setBooking] = useState({
    service: "",
    dateTime: "",
    name: "",
    phone: "",
    notes: "",
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const addMessage = (text: string, author: "erix" | "guest") => {
    setMessages((prev) => [...prev, { text, author }]);
  };

  const startBooking = () => {
    setBooking({
      service: "",
      dateTime: "",
      name: "",
      phone: "",
      notes: "",
    });
    setBookingStep("service");
    addMessage(
      "Great. What service would you like to book? For example: haircut, color, treatment, nails, or massage.",
      "erix"
    );
  };

  const handleBookingAnswer = (value: string) => {
    const answer = normalize(value);
    if (!answer) return;

    addMessage(answer, "guest");

    setBooking((prev) => {
      const next = { ...prev };
      if (bookingStep === "service") {
        next.service = answer;
        setBookingStep("dateTime");
        addMessage("Which day and time would you prefer?", "erix");
      } else if (bookingStep === "dateTime") {
        next.dateTime = answer;
        setBookingStep("name");
        addMessage("What name should Eric use for the booking?", "erix");
      } else if (bookingStep === "name") {
        next.name = answer;
        setBookingStep("phone");
        addMessage("What phone or WhatsApp number should Eric contact?", "erix");
      } else if (bookingStep === "phone") {
        next.phone = answer;
        setBookingStep("notes");
        addMessage(
          "Any notes for Eric? You can mention hair length, style goal, or type 'skip'.",
          "erix"
        );
      } else if (bookingStep === "notes") {
        next.notes = /^skip$/i.test(answer) ? "" : answer;
        const url = buildWhatsAppUrl(next);
        addMessage(
          "Your booking request is ready. I am opening WhatsApp so Eric can confirm availability.",
          "erix"
        );
        window.open(url, "_blank", "noopener");
        setBookingStep(null);
      }
      return next;
    });
  };

  const handleQuestion = (value: string) => {
    const question = normalize(value);
    if (!question) return;

    if (bookingStep) {
      handleBookingAnswer(question);
      setInputValue("");
      return;
    }

    addMessage(question, "guest");
    const response = getErixResponse(question);
    addMessage(response.text, "erix");
    setInputValue("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleQuestion(inputValue);
  };

  return (
    <section
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 transition-all duration-300 ${
        isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {/* Panel */}
      <div className={`w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-10rem)] bg-surface rounded-[32px] shadow-large overflow-hidden flex flex-col border border-line backdrop-blur-xl transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        {/* Header */}
        <div className="bg-navy p-5 text-white flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
            <Image src="/logo-transparent.png" alt="Eric's Salon" width={44} height={28} style={{ width: 44, height: 'auto', objectFit: 'contain' }} />
          </div>
          <div className="flex-1">
            <p className="font-serif font-bold leading-tight">Erix</p>
            <p className="text-[0.65rem] uppercase tracking-widest text-gold/80">Salon Assistant</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 bg-background/50"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.author === "erix"
                  ? "bg-white text-navy rounded-tl-none border border-line shadow-sm"
                  : "bg-navy text-white self-end rounded-tr-none shadow-md"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="px-5 py-3 flex flex-wrap gap-2 bg-white/50 border-t border-line">
          {!bookingStep ? (
            <>
              <button
                onClick={startBooking}
                className="px-4 py-2 rounded-full bg-gold text-white text-[0.65rem] font-bold uppercase tracking-wider hover:bg-gold-soft transition-all active:scale-95"
              >
                Book appointment
              </button>
              <button
                onClick={() => handleQuestion("What services do you offer?")}
                className="px-4 py-2 rounded-full bg-navy/5 text-navy text-[0.65rem] font-bold uppercase tracking-wider hover:bg-navy hover:text-white transition-all active:scale-95"
              >
                Services
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setBookingStep(null);
                addMessage("No problem. What else can I help with?", "erix");
              }}
              className="px-4 py-2 rounded-full bg-red-500 text-white text-[0.65rem] font-bold uppercase tracking-wider active:scale-95"
            >
              Cancel booking
            </button>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="p-4 bg-white border-t border-line flex gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={bookingStep ? "Type your answer..." : "Ask Erix..."}
            className="flex-1 bg-background border border-line rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
          />
          <button
            type="submit"
            className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition-all active:scale-90"
          >
            →
          </button>
        </form>
      </div>

      {/* Launcher */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto flex items-center gap-3 bg-navy text-white pl-3 pr-7 py-3 rounded-full shadow-large hover:bg-gold transition-all duration-500 group"
        >
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md group-hover:scale-110 transition-transform">
            <Image src="/logo-transparent.png" alt="Eric's Salon" width={44} height={28} style={{ width: 44, height: 'auto', objectFit: 'contain' }} />
          </div>
          <span className="font-bold uppercase tracking-[0.2em] text-[0.7rem]">Ask Erix</span>
        </button>
      )}
    </section>
  );
}
