# 📘 NataBase — Production Management System for Professional Kitchens

![NataBase Banner](docs/images/banner.png)

> **NataBase** is an Android mobile application developed in **Kotlin**, focused on **production tracking, inventory control, and automated reporting** for restaurants, cafés, bakeries, and small-to-medium professional kitchens.

This repository contains the **source code, documentation, and assets** for the NataBase project.

## 📖 Overview

NataBase was created to **digitalize and automate food production records**, reducing human error and simplifying compliance and reporting.

The application allows users to:

* Register daily production quantities
* Automatically apply dates and expiration rules
* Generate structured **Excel reports**
* Send reports via **email**

All of this is achieved with a strong focus on **security, performance, and usability**.

---

## ❌ The Problem

Many professional kitchens still rely on:

* Paper-based records
* Manual Excel spreadsheets
* Inconsistent data entry
* Lack of traceability
* No real-time visibility

These practices increase errors, waste time, and reduce operational efficiency.

---

## ✅ The Solution

NataBase provides a **mobile, offline-first solution** that enables:

* Fast and intuitive production logging
* Automated report generation
* Secure data handling
* Simple integration into existing workflows

---

## ⚙️ Features

### 🔐 Authentication

* OAuth 2.0 (Google Sign-In)
* Prepared for OpenID Connect
* Future role support:

  * Admin
  * Manager
  * Staff

### 📦 Production Management

* Product and category management
* Daily production entries
* Waste and leftovers tracking

### 📊 Reporting

* Automatic Excel (.xlsx) generation
* Daily production summaries
* Email delivery via SMTP

### 📡 Offline-First Design

* Fully usable without internet
* Synchronization only when required

---

## 👥 Target Audience

* Restaurants
* Cafés
* Bakeries
* Industrial kitchens
* Production managers
* Chefs and supervisors

---

## 🧱 Technical Architecture

* **Language:** Kotlin
* **Platform:** Android
* **Architecture:** Modular & layered
* **Design principles:** Clean Architecture & SOLID

![UML Diagram](docs/images/uml.png)

---

## 🔒 Security

Security is a core pillar of NataBase.

### 🔐 Authentication & Authorization

* OAuth 2.0
* Principle of least privilege
* Role-ready architecture

### 🔑 Data Protection

* AES-256 encryption for sensitive data
* Secure storage at rest
* Protected data transmission

### 🛡️ Anti-Tampering

* Integrity checks on startup
* Automatic shutdown if manipulation is detected
* Protection against reverse engineering

### 🧩 Code Obfuscation

* R8 / ProGuard
* Reduced attack surface
* Increased resistance to static analysis

---

## 🧠 Design Patterns

### 🎯 Facade Pattern — Report Delivery

The **Facade Pattern** was applied to simplify complex operations such as email report delivery.

Before:

* High complexity
* Multiple responsibilities
* Hard to maintain

After:

* `EmailReportFacade`
* Single entry point
* Clean, testable code

```kotlin
emailReportFacade.sendReport(file)
```

Other patterns applied:

* Facade
* Template Method
* Factory Method
* SOLID principles

---

## 📱 Application Screens

### Login

![Login Screen](docs/images/login.png)

### Main Menu

![Main Menu](docs/images/menu.png)

### Production Entry

![Production Screen](docs/images/production.png)

### Report Email

![Report Screen](docs/images/report.png)

---

## 📈 Success Criteria

* ✔️ Runs on 90%+ Android devices
* ✔️ Operations under 1 second
* ✔️ Human error reduction ≥ 25%
* ✔️ User satisfaction ≥ 4.5/5
* ✔️ No critical security failures

---

## 💼 Business Model

* 💰 One-time license: **150€ per location**
* 🔧 Optional maintenance: **22€/month**

Includes:

* Updates
* Technical support
* Minor customizations

---

## 🧪 Technologies Used

* Kotlin
* Android SDK
* OAuth 2.0
* SMTP
* Excel (.xlsx)
* AES-256
* R8 / ProGuard
* Kotlin Coroutines

---

## 🏁 Conclusion

NataBase is a **secure, scalable, and production-ready** application.

It demonstrates:

* Strong mobile architecture
* Effective use of design patterns
* Applied cybersecurity principles
* Real-world applicability

> ⚠️ **Disclaimer:** This project is for educational and professional purposes only.
