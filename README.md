# 🧠 OllamaChat – A Self-Hosted ChatGPT Clone

A full-stack **ChatGPT-style chat application** built with **Next.js**, **Tailwind CSS**, and **Ollama** (running locally).  
Supports **multiple AI models**, **chat history**, **authentication**, and **local MongoDB storage** for maximum privacy.  

---

## 💡 Why I Built This
Most AI chat platforms store your conversations in the cloud, require monthly payments, and restrict which models you can use.  
I wanted a **private, secure, and cost-free alternative** that I control completely.  

With **OllamaChat**:
- 🔒 **Full Privacy** – All chats & history are stored locally on **my own device**, not on someone else’s servers.
- 🧠 **Model Freedom** – I can download & switch between different local AI models (Gemma, DeepSeek, LLaMA, Mistral, etc.).
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
This project uses multiple models and lets you **switch between them in the UI**.  
You’ll need to have them downloaded locally before running the app.

Run these commands to install:
```bash
ollama pull gemma3n:e2b
ollama pull gemma3:4b
ollama pull deepseek-r1:7b
```

Or check what’s already installed:
```bash
ollama list
```

Models this app is set up for:
```bash
NAME              SIZE
gemma3n:e2b       5.6 GB
gemma3:4b         3.3 GB
deepseek-r1:7b    4.7 GB
```

---

## ✨ Features
- 🔐 **User Authentication** (NextAuth + Email/Password)
- 💬 **Clean ChatGPT-like UI** (mobile-friendly)
- 🔄 **Switch between Ollama models**(Gemma, DeepSeek, etc.)
- 📜 **Chat History Sidebar** (rename & delete chats)
- ⏳ **Streaming / Typing Effect**
- 🗄 **Local MongoDB storage** (no cloud required)
- 🌙 **Dark mode** 
- ⚡ **Runs entirely on your machine – your data stays private**

---

## 🚀 Tech Stack
- **Frontend:** Next.js (App Router) + Tailwind CSS
- **Backend:** Node.js API routes
- **Database:** MongoDB (local)
- **Auth:** NextAuth.js
- **AI Engine:** Ollama (local LLM runner)

📦 Installation
1️⃣ Install Dependencies
bash
Copy
Edit
npm install
2️⃣ Install & Start Ollama
Follow Ollama install instructions for Linux.

Check models:

bash
Copy
Edit
ollama list
Start Ollama service:

bash
Copy
Edit
sudo systemctl start ollama
3️⃣ Set up MongoDB
If using local MongoDB:

bash
Copy
Edit
sudo systemctl start mongod
4️⃣ Configure Environment Variables
Create .env.local:

env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/ollamachat
NEXTAUTH_SECRET=supersecretvalue
NEXTAUTH_URL=http://localhost:3000
