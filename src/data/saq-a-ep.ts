import type { ChecklistSection } from "@/components/Checklist";

export const saqAEp: ChecklistSection[] = [
  {
    id: "scope",
    title: "Scope &amp; eligibility",
    controls: [
      {
        id: "scope.1",
        requirement: "E-commerce only with partial outsourcing",
        plain:
          "SAQ A-EP is for online merchants who use a third-party payment page (iframe or redirect) but where your own webpage is what loads the iframe. Your server is in scope because a compromised page could redirect the customer somewhere malicious.",
      },
      {
        id: "scope.2",
        requirement: "No card data ever touches your environment",
        plain:
          "Your server never sees the PAN. If it does, you're on SAQ D, not A-EP.",
      },
    ],
  },
  {
    id: "build-secure",
    title: "Build and maintain a secure network",
    controls: [
      {
        id: "1.2",
        requirement: "Restrict inbound and outbound traffic",
        plain:
          "Firewall rules between your web server and the rest of the world should block everything except what's explicitly allowed. Document each rule with a business reason.",
        evidence: "Firewall rule list + last review date",
      },
      {
        id: "1.4",
        requirement: "Personal firewalls on portable computing devices",
        plain:
          "Any laptop that connects to your environment from outside the office needs a host firewall (Windows Defender Firewall is fine, just configured properly).",
        evidence: "Endpoint config baseline document",
      },
      {
        id: "2.1",
        requirement: "Change vendor-supplied defaults",
        plain:
          "Default passwords on routers, admin accounts, database installs — change all of them before going live. The 'admin/admin' router behind your office network counts.",
        evidence: "Hardening checklist for each system",
      },
      {
        id: "2.3",
        requirement: "Encrypt non-console admin access",
        plain:
          "SSH, RDP, web admin panels — all over TLS or stronger. Telnet is dead.",
      },
    ],
  },
  {
    id: "protect-data",
    title: "Protect cardholder data",
    controls: [
      {
        id: "4.1",
        requirement: "Encrypt cardholder data in transit",
        plain:
          "Even though card data shouldn't touch your server, the redirect/iframe must use TLS 1.2 or above. Disable older protocols.",
        evidence: "SSL Labs scan showing A or A+",
      },
    ],
  },
  {
    id: "vuln-mgmt",
    title: "Vulnerability management",
    controls: [
      {
        id: "5.1",
        requirement: "Anti-malware on all systems",
        plain:
          "Every server and workstation that's commonly affected by malware needs anti-malware software, kept up to date.",
      },
      {
        id: "6.1",
        requirement: "Process for identifying vulnerabilities",
        plain:
          "Subscribe to security mailing lists (US-CERT, your OS vendor, your CMS vendor). Someone reads them weekly.",
      },
      {
        id: "6.2",
        requirement: "Patch within one month of release",
        plain:
          "Critical security patches go on within a month. Track them in a ticket system so you can show the auditor.",
        evidence: "Patch log with dates",
      },
      {
        id: "6.4",
        requirement: "Separate dev/test/prod environments",
        plain:
          "Production runs on different infrastructure from staging. Live card data never appears in test environments.",
      },
      {
        id: "6.6",
        requirement: "Web application firewall OR code review",
        plain:
          "Either run a WAF in front of the web server, or get the code reviewed by someone qualified before each release.",
      },
    ],
  },
  {
    id: "access-control",
    title: "Access control",
    controls: [
      {
        id: "7.1",
        requirement: "Restrict access to data by job role",
        plain:
          "Define which job roles can access which systems. Default to 'no access' and grant explicitly.",
        evidence: "Access matrix per role",
      },
      {
        id: "8.2",
        requirement: "Strong authentication for all users",
        plain:
          "Passwords meet a minimum length (12+ characters is sensible). MFA for any admin access and any remote access.",
      },
      {
        id: "8.3",
        requirement: "Multi-factor authentication for non-console admin",
        plain:
          "Anyone administering the environment from outside the office network — MFA is non-negotiable.",
      },
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring &amp; testing",
    controls: [
      {
        id: "10.2",
        requirement: "Audit logs for all in-scope systems",
        plain:
          "Log every admin action, every login attempt, every change to user accounts. Keep logs for at least a year, with at least 90 days immediately available.",
      },
      {
        id: "11.2",
        requirement: "Quarterly external vulnerability scans",
        plain:
          "Use an Approved Scanning Vendor (ASV). Scan your external IPs every three months and after any major change.",
        evidence: "ASV scan reports for last 4 quarters",
      },
      {
        id: "11.3",
        requirement: "Annual penetration test",
        plain:
          "Once a year, get a CREST or equivalent pen test against your in-scope environment. Plus after any significant change.",
        evidence: "Annual pen test report",
      },
    ],
  },
];
