import type { ChecklistSection } from "@/components/Checklist";

// SAQ D has 330+ controls in the official spec. This file lists the
// high-impact subset that catches most merchants out — not a complete
// transcription. For the full text, refer to the PCI SSC document.
export const saqD: ChecklistSection[] = [
  {
    id: "scope-warning",
    title: "Scope warning — read first",
    controls: [
      {
        id: "scope.1",
        requirement: "You're on SAQ D because nothing simpler fits",
        plain:
          "SAQ D is the catch-all. If you store, process, or transmit cardholder data in a way that doesn't fit A, A-EP, B, B-IP, C-VT, C, or P2PE — you're on D. The scope is your full Cardholder Data Environment plus everything connected to it.",
      },
      {
        id: "scope.2",
        requirement: "Phone payments? Read this carefully.",
        plain:
          "Agents typing card numbers into a CRM during a phone call brings the entire call recording, the agent's PC, the network, and often most of the office into PCI scope. A descope solution like Paytia removes the cardholder data from the agent and the call recording entirely — typically reducing SAQ D scope to SAQ A.",
      },
    ],
  },
  {
    id: "network",
    title: "Network & firewalls (Req 1)",
    controls: [
      {
        id: "1.1.4",
        requirement: "Firewall between any wireless network and the CDE",
        plain:
          "If your office WiFi can reach the systems handling card data, you have a problem. Either segment WiFi off entirely or treat it as in-scope (you don't want the latter).",
      },
      {
        id: "1.2.1",
        requirement: "Restrict inbound and outbound traffic to that necessary",
        plain:
          "Default deny. Each allow rule needs a documented business justification and an owner.",
      },
      {
        id: "1.3.6",
        requirement: "Database servers in an internal network zone, not the DMZ",
        plain:
          "Card-data databases are not directly accessible from the internet. Web servers in DMZ talk to DB in internal zone via tightly restricted rules.",
      },
    ],
  },
  {
    id: "config",
    title: "Configuration management (Req 2)",
    controls: [
      {
        id: "2.1",
        requirement: "Change vendor defaults",
        plain:
          "Default passwords, default community strings, default service accounts — change all before deploying.",
      },
      {
        id: "2.2",
        requirement: "Hardening standards for each system type",
        plain:
          "One hardening standard per OS / service type, based on a recognised baseline (CIS, NIST). Every new system built to that standard.",
      },
      {
        id: "2.6",
        requirement: "One primary function per server",
        plain:
          "Don't run the database, web server, and mail server on the same host. Either separate hosts or strong virtualisation isolation.",
      },
    ],
  },
  {
    id: "data-protection",
    title: "Cardholder data protection (Req 3 + 4)",
    controls: [
      {
        id: "3.2",
        requirement: "Don't store sensitive authentication data after authorisation",
        plain:
          "Full magstripe, CVV, PIN — never stored, even encrypted. The moment after authorisation, it's gone.",
      },
      {
        id: "3.3",
        requirement: "Mask PAN when displayed",
        plain:
          "Show first 6 + last 4 at most, by default. Full PAN visible only to those with a documented business need.",
      },
      {
        id: "3.4",
        requirement: "Render stored PAN unreadable",
        plain:
          "Strong encryption with proper key management, or one-way hashing, or truncation, or tokenisation. Don't roll your own crypto.",
      },
      {
        id: "3.5",
        requirement: "Document and protect cryptographic keys",
        plain:
          "Keys are stored in HSMs or equivalently protected. Key custodians have signed responsibility statements.",
      },
      {
        id: "4.1",
        requirement: "Encrypt cardholder data in transit over public networks",
        plain:
          "TLS 1.2 or above. Disable weak ciphers. Annual SSL Labs scan should be A or A+.",
      },
    ],
  },
  {
    id: "vuln",
    title: "Vulnerability management (Req 5 + 6)",
    controls: [
      {
        id: "5.1",
        requirement: "Anti-malware on commonly-affected systems",
        plain:
          "Endpoint protection on workstations and servers. Updates automatic. Logs sent to central monitoring.",
      },
      {
        id: "6.2",
        requirement: "Patch within one month of release",
        plain:
          "Critical patches go on within a month. Tracked in a ticketing system with deployment dates.",
      },
      {
        id: "6.5",
        requirement: "Address common coding vulnerabilities",
        plain:
          "Developers trained in secure coding (OWASP Top 10 minimum). Code reviews check for the common stuff. SAST/DAST tooling helps but isn't sufficient alone.",
      },
      {
        id: "6.6",
        requirement: "WAF or code review for public-facing web apps",
        plain:
          "Either a WAF in front of every public-facing web app, or every code change reviewed by qualified personnel.",
      },
    ],
  },
  {
    id: "access",
    title: "Access control (Req 7 + 8 + 9)",
    controls: [
      {
        id: "7.1",
        requirement: "Need-to-know access",
        plain:
          "Default deny. Access granted by job role. Reviewed at least every 6 months.",
      },
      {
        id: "8.3",
        requirement: "Multi-factor authentication for all admin and remote access",
        plain:
          "MFA for every admin login. MFA for every remote access into the network. Push notifications or hardware tokens, not SMS.",
      },
      {
        id: "8.5.1",
        requirement: "No shared accounts",
        plain:
          "Every person has their own login. No 'admin' account that three people use.",
      },
      {
        id: "9.1",
        requirement: "Physical access controls to systems",
        plain:
          "Server rooms locked. Access logged. Visitors escorted.",
      },
    ],
  },
  {
    id: "logging",
    title: "Logging & monitoring (Req 10)",
    controls: [
      {
        id: "10.2",
        requirement: "Log security-relevant events on every in-scope system",
        plain:
          "Logins, admin actions, access to cardholder data, changes to user accounts, system clock changes, log access, all critical errors.",
      },
      {
        id: "10.5.5",
        requirement: "File integrity monitoring on critical files",
        plain:
          "FIM on system binaries, configuration files, and audit logs themselves. Alerts on unauthorised change.",
      },
      {
        id: "10.6",
        requirement: "Daily log review for security events",
        plain:
          "Either a SIEM with alerting or a person who genuinely reviews the daily summary. Document who did the review and what they found.",
      },
      {
        id: "10.7",
        requirement: "Retain audit logs for at least one year",
        plain:
          "Three months immediately available, the rest in colder storage.",
      },
    ],
  },
  {
    id: "testing",
    title: "Testing & pen testing (Req 11)",
    controls: [
      {
        id: "11.2",
        requirement: "Quarterly external ASV scans",
        plain:
          "Approved Scanning Vendor scans every quarter and after significant change. Address findings.",
      },
      {
        id: "11.2.1",
        requirement: "Quarterly internal vulnerability scans",
        plain:
          "Internal scans by qualified personnel. Same cadence as external.",
      },
      {
        id: "11.3",
        requirement: "Annual external + internal pen tests",
        plain:
          "Full pen test once a year and after significant change. Methodology documented. Findings tracked to closure.",
      },
      {
        id: "11.5",
        requirement: "Change-detection mechanism",
        plain:
          "Detect unauthorised modification of system files, config files, content files. Alert on change. Investigate.",
      },
    ],
  },
  {
    id: "policy-d",
    title: "Policy & programme (Req 12)",
    controls: [
      {
        id: "12.1",
        requirement: "Maintain an information security policy",
        plain:
          "Comprehensive policy covering all 12 PCI requirements. Reviewed annually. Distributed to staff.",
      },
      {
        id: "12.3",
        requirement: "Acceptable use policies for technologies",
        plain:
          "Policies for laptops, tablets, removable media, internet, email — covering authorised use, owners, accepted use, network locations.",
      },
      {
        id: "12.6",
        requirement: "Security awareness programme",
        plain:
          "Training at hire and annually. Multiple methods (email, posters, training modules). Sign-off after each training.",
      },
      {
        id: "12.8",
        requirement: "Manage service providers",
        plain:
          "List all third parties with access to cardholder data. Written agreements. Annual AOC review. Document who's responsible for what (you vs them).",
      },
      {
        id: "12.10",
        requirement: "Incident response plan",
        plain:
          "Documented, tested annually, includes notification of card brands and acquirer, roles assigned, communication procedures.",
      },
    ],
  },
];
