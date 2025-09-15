# 🧠 LocalMind – Your Local AI Assistant

A full-stack **self-hosted AI assistant** built with **Next.js**, **Tailwind CSS**, and **Ollama** (running locally).  
Supports **multiple AI models**, **chat history**, **authentication**, and **local MongoDB storage** for maximum privacy.

---

## 💡 Why I Built This

Most AI chat platforms:

- Store your conversations in the cloud
- Require monthly payments
- Restrict which models you can use

I wanted a **private, secure, and cost-free alternative** that I control completely.

With **LocalMind**:

- 🔒 **Full Privacy** – All chats & history are stored locally on **my own device**, not on someone else’s servers.
- 🧠 **Model Freedom** – Download & switch between different local AI models (Gemma, DeepSeek, LLaMA, Mistral, etc.).
- 💸 **No Subscription Fees** – No API keys, no usage limits, no paywalls.
- ⚡ **Fast & Offline** – Works even without internet after setup.

---

## 🖥 Tested Environment

- **OS:** Arch Linux (should work on other Linux distros with Ollama installed)
- **Node.js:** v20+
- **MongoDB:** Local instance (v6+)
- **Ollama:** Latest version

---

## 🤖 Required Ollama Models

This project supports multiple models and lets you **switch between them in the UI**.  
You’ll need to have them downloaded locally before running the app.

**Install models:**

```bash
ollama pull gemma3n:e2b
ollama pull gemma3:4b
ollama pull deepseek-r1:7b
ollama pull llava:latest
```

## ✨ Features

- 🔐 User Authentication (NextAuth + Email/Password).
- 💬 Clean Chat UI (mobile-friendly, ChatGPT-like).
- 🔄 Switch between Ollama models (Gemma, DeepSeek, etc.).
- 💬 image recoganisation .
- 📜 Chat History Sidebar (rename & delete chats).
- ⏳ Streaming / Typing Effect.
- 🗄 Local MongoDB storage (no cloud required).
- 🌙 Dark mode support.
- ⚡ Runs entirely on your machine – your data stays private.

## 🚀 Tech Stack

- Frontend: Next.js (App Router) + Tailwind CSS.
- Backend: Node.js API routes.
- Database: MongoDB (local).
- Auth: NextAuth.js.
- AI Engine: Ollama (local LLM runner).

---

## 📦 Installation

1️⃣ Install Dependencies

```bash
npm install
```

2️⃣ Install & Start Ollama
Follow [Ollama install instructions] (https://ollama.com/download) for Linux.
Check models:

```bash
sudo systemctl start ollama
```

3️⃣Run

```bash
npm run dev
```
