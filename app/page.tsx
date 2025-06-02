'use client'

import { useState } from 'react';

const urlData: Record<string, { name: string; url: string; description: string }[]> = {
  Security: [
    { name: 'Shodan', url: 'https://www.shodan.io/', description: 'Search engine for Internet-connected devices and open ports.' },
    { name: 'Censys', url: 'https://censys.io/', description: 'Internet-wide scanning and analysis platform for attack surface management.' },
    { name: 'ZoomEye', url: 'https://www.zoomeye.org/', description: 'Cyberspace search engine for identifying devices and services exposed online.' },
    { name: 'BinaryEdge', url: 'https://www.binaryedge.io/', description: 'Cybersecurity data platform collecting and analyzing internet-exposed assets.' },
    { name: 'GreyNoise', url: 'https://viz.greynoise.io/', description: 'Distinguishes benign internet background noise from real threats.' },
    { name: 'VirusTotal', url: 'https://www.virustotal.com/', description: 'Aggregates antivirus engines and scan results for file and URL analysis.' },
    { name: 'Hybrid Analysis', url: 'https://www.hybrid-analysis.com/', description: 'Malware analysis platform offering in-depth behavioral reports.' },
    { name: 'Any.Run', url: 'https://any.run/', description: 'Interactive malware analysis sandbox in real time.' },
    { name: 'AbuseIPDB', url: 'https://www.abuseipdb.com/', description: 'Database of reported malicious IP addresses.' },
    { name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', description: 'Check if your email or password has been exposed in a data breach.' },
    { name: 'MalwareBazaar', url: 'https://bazaar.abuse.ch/', description: 'Free repository for malware samples and threat intel.' },
    { name: 'URLScan.io', url: 'https://urlscan.io/', description: 'Scans and analyzes websites for security threats and embedded assets.' },
    { name: 'Hunter.io', url: 'https://hunter.io/', description: 'Find email addresses connected to domains and verify them.' },
    { name: 'SecurityTrails', url: 'https://securitytrails.com/', description: 'Comprehensive domain and IP history, DNS, and WHOIS data.' },
    { name: 'Spyse (now part of SecurityTrails)', url: 'https://spyse.com/', description: 'Former internet asset search engine, now merged with SecurityTrails.' },
    { name: 'ThreatFox', url: 'https://threatfox.abuse.ch/', description: 'Platform for sharing indicators of compromise (IOCs) for malware.' },
    { name: 'AlienVault OTX', url: 'https://otx.alienvault.com/', description: 'Community threat intelligence platform with real-time data sharing.' },
    { name: 'IntelX', url: 'https://intelx.io/', description: 'Data breach search engine and darknet monitoring tool.' },
    { name: 'PeeringDB', url: 'https://www.peeringdb.com/', description: 'Public database of networks for internet interconnection information.' },
    { name: 'CertDB', url: 'https://certdb.com/', description: 'Search engine for TLS/SSL certificates and their metadata.' },
    { name: 'LeakIX', url: 'https://leakix.net/', description: 'Scans the internet for leaked and exposed services and files.' },
    { name: 'Pulsedive', url: 'https://pulsedive.com/', description: 'Threat intelligence feed aggregator and IOC search engine.' },
    { name: 'Talos Intelligence', url: 'https://talosintelligence.com/', description: 'Cisco Talos security research center with IP/domain threat data.' },
    { name: 'Cisco Umbrella Investigate', url: 'https://investigate.umbrella.com/', description: 'DNS-based threat intelligence and domain investigation platform.' },
    { name: 'FortiGuard Labs', url: 'https://www.fortiguard.com/', description: 'Threat intelligence from Fortinet’s research labs.' },
    { name: 'ThreatMiner', url: 'https://www.threatminer.org/', description: 'Open-source threat intelligence portal for malware and IOC research.' },
    { name: 'CheckPhish', url: 'https://checkphish.ai/', description: 'AI-powered phishing URL scanner and threat detection.' },
    { name: 'PhishTool', url: 'https://www.phishtool.com/', description: 'Phishing email analysis and SOC workflow tool.' },
    { name: 'Triage', url: 'https://tria.ge/', description: 'Automated malware analysis and threat intelligence reports.' },
    { name: 'CIRCL Passive DNS', url: 'https://www.circl.lu/services/passive-dns/', description: 'Passive DNS replication service for historical domain-to-IP data.' },
    { name: 'BuiltWith', url: 'https://builtwith.com/', description: 'Analyzes websites to identify technologies used.' },
    { name: 'Detectify Labs', url: 'https://labs.detectify.com/', description: 'Security research and web vulnerability disclosures.' },
    { name: 'Project Discovery', url: 'https://projectdiscovery.io/', description: 'Open-source security tools for reconnaissance and vulnerability testing.' },
    { name: 'Recon.dev', url: 'https://recon.dev/', description: 'Domain and subdomain reconnaissance tool for security researchers.' },
    { name: 'Subdomain Center', url: 'https://subdomain.center/', description: 'Passive subdomain enumeration and asset discovery service.' }
  ],

  Privacy: [
    { name: 'DuckDuckGo', url: 'https://duckduckgo.com/', description: 'A privacy-focused search engine that doesn’t track user searches or behavior.' },
    { name: 'Startpage', url: 'https://www.startpage.com/', description: 'Search engine that provides Google results without tracking or storing personal information.' },
    { name: 'Qwant', url: 'https://www.qwant.com/', description: 'European search engine that emphasizes user privacy and neutrality in search results.' },
    { name: 'Brave Search', url: 'https://search.brave.com/', description: 'Private, independent search engine from the makers of Brave browser, with no tracking.' },
    { name: 'Ecosia', url: 'https://www.ecosia.org/', description: 'Privacy-friendly search engine that uses ad revenue to plant trees worldwide.' },
    { name: 'ProtonMail', url: 'https://protonmail.com/', description: 'End-to-end encrypted email service based in Switzerland, focused on user privacy.' },
    { name: 'Tutanota', url: 'https://tutanota.com/', description: 'Secure, encrypted email service offering open-source apps and strong privacy policies.' },
    { name: 'Mailfence', url: 'https://mailfence.com/', description: 'Encrypted email suite based in Belgium, with OpenPGP support and digital signature features.' },
    { name: 'Signal', url: 'https://signal.org/', description: 'Open-source, end-to-end encrypted messaging and calling app with strong privacy guarantees.' },
    { name: 'Telegram', url: 'https://telegram.org/', description: 'Messaging platform with optional end-to-end encryption and support for private groups and channels.' },
    { name: 'Wire', url: 'https://wire.com/', description: 'Secure collaboration platform offering encrypted messaging, calling, and file sharing for teams.' },
    { name: 'Element (Matrix)', url: 'https://element.io/', description: 'Decentralized messaging platform using the Matrix protocol for secure and federated communication.' },
    { name: 'Jitsi Meet', url: 'https://jitsi.org/jitsi-meet/', description: 'Free and open-source encrypted video conferencing tool with no account needed.' },
    { name: 'ProtonVPN', url: 'https://protonvpn.com/', description: 'No-logs VPN from the creators of ProtonMail, focused on security and freedom of access.' },
    { name: 'Mullvad VPN', url: 'https://mullvad.net/', description: 'Highly private VPN that doesn’t require an email or account to use, based in Sweden.' },
    { name: 'Windscribe VPN', url: 'https://windscribe.com/', description: 'VPN service offering both free and paid plans with ad-blocking and no-logs policy.' },
    { name: 'Tor Project', url: 'https://www.torproject.org/', description: 'Free software and open network that helps defend against traffic analysis and surveillance.' },
    { name: 'PrivacyTools.io', url: 'https://www.privacytools.io/', description: 'Resource hub offering tools, guides, and services to enhance personal privacy and security online.' },
    { name: 'EFF Surveillance Self-Defense', url: 'https://ssd.eff.org/', description: 'Guide by the Electronic Frontier Foundation offering practical advice to protect yourself from digital surveillance.' }
  ],

  Development: [
    { name: 'GitHub', url: 'https://github.com/', description: 'Code hosting platform for version control and collaboration using Git.' },
    { name: 'GitLab', url: 'https://gitlab.com/', description: 'DevOps platform with Git repository management, CI/CD, and project planning tools.' },
    { name: 'Bitbucket', url: 'https://bitbucket.org/', description: 'Git-based source code repository hosting service by Atlassian, integrated with Jira.' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com/', description: 'Popular Q&A site for developers to ask and answer programming-related questions.' },
    { name: 'DevDocs', url: 'https://devdocs.io/', description: 'A fast, offline-accessible API documentation browser for many programming languages and tools.' },
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', description: 'Comprehensive web standards documentation maintained by Mozilla for developers.' },
    { name: 'W3Schools', url: 'https://www.w3schools.com/', description: 'Educational site offering beginner-friendly tutorials for web development technologies.' },
    { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', description: 'Nonprofit organization providing free coding courses and certification programs.' },
    { name: 'CodePen', url: 'https://codepen.io/', description: 'Social development environment for front-end developers to build, test, and share code.' },
    { name: 'JSFiddle', url: 'https://jsfiddle.net/', description: 'Online IDE for testing and sharing HTML, CSS, and JavaScript snippets.' },
    { name: 'CodeSandbox', url: 'https://codesandbox.io/', description: 'Online code editor and prototyping tool for rapid web application development.' },
    { name: 'Replit', url: 'https://replit.com/', description: 'Collaborative, in-browser IDE supporting many languages and real-time multiplayer coding.' },
    { name: 'Glitch', url: 'https://glitch.com/', description: 'Friendly cloud-based platform to build and remix full-stack web apps instantly.' },
    { name: 'Visual Studio Code Online', url: 'https://vscode.dev/', description: 'Browser-based version of VS Code for editing files and GitHub repositories.' },
    { name: 'npm', url: 'https://www.npmjs.com/', description: 'JavaScript package manager for Node.js, hosting thousands of reusable packages.' },
    { name: 'Yarn', url: 'https://yarnpkg.com/', description: 'Fast, secure, and reliable JavaScript package manager alternative to npm.' },
    { name: 'PyPI (Python)', url: 'https://pypi.org/', description: 'The Python Package Index, a repository of software for the Python programming language.' },
    { name: 'Go.dev', url: 'https://pkg.go.dev/', description: 'Official Go module documentation and discovery site by Google.' },
    { name: 'Crates.io (Rust)', url: 'https://crates.io/', description: 'The Rust community’s crate registry for sharing open source Rust libraries.' },
    { name: 'Docker Hub', url: 'https://hub.docker.com/', description: 'Public repository of container images for Docker-based software distribution.' },
    { name: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/', description: 'Official documentation for Kubernetes, the container orchestration platform.' },
    { name: 'Postman API Network', url: 'https://www.postman.com/explore/', description: 'Explore APIs and collaborate using Postman’s vast API directory.' },
    { name: 'Swagger (OpenAPI)', url: 'https://swagger.io/', description: 'Tools and documentation for designing, building, and documenting REST APIs using OpenAPI.' },
    { name: 'RapidAPI', url: 'https://rapidapi.com/', description: 'API marketplace that enables developers to find, connect to, and manage APIs.' },
    { name: 'Can I use', url: 'https://caniuse.com/', description: 'Provides browser support tables for modern web technologies like CSS and HTML5.' },
    { name: 'Regex101', url: 'https://regex101.com/', description: 'Regex editor and debugger for testing regular expressions with explanation support.' },
    { name: 'JSONLint', url: 'https://jsonlint.com/', description: 'Validator and formatter for JSON data to ensure syntax correctness.' },
    { name: 'Beautifier.io', url: 'https://beautifier.io/', description: 'Tool for formatting and beautifying HTML, CSS, and JavaScript code.' },
    { name: 'UptimeRobot', url: 'https://uptimerobot.com/', description: 'Service that monitors website uptime and alerts you to downtime events.' },
    { name: 'Netlify', url: 'https://www.netlify.com/', description: 'Platform for automating modern web project deployments with Git integration.' },
    { name: 'Vercel', url: 'https://vercel.com/', description: 'Cloud platform for front-end frameworks and static sites, with seamless Git integration.' },
    { name: 'Render', url: 'https://render.com/', description: 'Full-stack cloud platform to host web apps, static sites, APIs, and databases.' },
    { name: 'Heroku', url: 'https://www.heroku.com/', description: 'Platform as a service (PaaS) supporting deployment of apps in several programming languages.' },
    { name: 'PlanetScale', url: 'https://planetscale.com/', description: 'Serverless MySQL database built on Vitess, designed for scale and high availability.' },
    { name: 'Supabase', url: 'https://supabase.com/', description: 'Open-source Firebase alternative providing backend services like auth, DB, and storage.' },
    { name: 'Firebase', url: 'https://firebase.google.com/', description: 'Google’s platform offering backend-as-a-service (BaaS) for building and scaling apps.' }
  ],

  Design: [
    { name: 'Figma', url: 'https://www.figma.com/', description: 'Collaborative interface design tool for UI/UX designers.' },
    { name: 'Adobe XD', url: 'https://www.adobe.com/products/xd.html', description: 'Vector-based design tool for wireframing, prototyping, and collaboration.' },
    { name: 'Sketch', url: 'https://www.sketch.com/', description: 'Popular design toolkit for digital products, focused on UI/UX design.' },
    { name: 'Canva', url: 'https://www.canva.com/', description: 'User-friendly graphic design platform with templates for non-designers.' },
    { name: 'InVision', url: 'https://www.invisionapp.com/', description: 'Prototyping and collaboration platform for designers to create interactive mockups.' },
    { name: 'Adobe Illustrator', url: 'https://www.adobe.com/products/illustrator.html', description: 'Industry-standard vector graphics editor for creating illustrations and designs.' },
    { name: 'Adobe Photoshop', url: 'https://www.adobe.com/products/photoshop.html', description: 'Powerful raster graphics editor for photo editing and digital art.' },
    { name: 'Affinity Designer', url: 'https://affinity.serif.com/en-us/designer/', description: 'Professional vector graphics software with a one-time purchase model.' },
    { name: 'Gravit Designer', url: 'https://www.designer.io/en/', description: 'Free vector design app with cross-platform support and cloud storage.' },
    { name: 'Vectr', url: 'https://vectr.com/', description: 'Free, web-based vector graphics editor with real-time collaboration features.' },
    { name: 'Lunacy', url: 'https://icons8.com/lunacy', description: 'Free Windows app for UI/UX design, compatible with Sketch files.' },
    { name: 'Zeplin', url: 'https://zeplin.io/', description: 'Collaboration tool that bridges the gap between designers and developers.' },
    { name: 'Marvel App', url: 'https://marvelapp.com/', description: 'Design, prototype, and collaborate on web and mobile apps easily.' },
  ],

  News: [
    { name: 'Hacker News', url: 'https://news.ycombinator.com/', description: 'Community-driven tech and startup news aggregator with discussions.' },
    { name: 'TechCrunch', url: 'https://techcrunch.com/', description: 'News on startups, venture capital, gadgets, and Silicon Valley.' },
    { name: 'The Verge', url: 'https://www.theverge.com/', description: 'Technology, science, art, and culture news with in-depth reporting.' },
    { name: 'Wired', url: 'https://www.wired.com/', description: 'Coverage of technology, science, business, and culture trends.' },
    { name: 'Ars Technica', url: 'https://arstechnica.com/', description: 'Detailed tech news and analysis focused on IT, hardware, and science.' },
    { name: 'Engadget', url: 'https://www.engadget.com/', description: 'Consumer electronics news, reviews, and analysis.' },
    { name: 'BleepingComputer', url: 'https://www.bleepingcomputer.com/', description: 'News and tutorials on computer security and malware removal.' },
    { name: 'Dark Reading', url: 'https://www.darkreading.com/', description: 'Cybersecurity news, threat intelligence, and analysis for professionals.' },
    { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/', description: 'In-depth investigative journalism focused on cybersecurity and cybercrime.' },
    { name: 'SecurityWeek', url: 'https://www.securityweek.com/', description: 'Cybersecurity news, insights, and expert commentary.' },
    { name: 'CyberScoop', url: 'https://www.cyberscoop.com/', description: 'News on cybersecurity, government policy, and digital threats.' },
    { name: 'ZDNet', url: 'https://www.zdnet.com/', description: 'Business technology news, analysis, and product reviews.' },
    { name: 'The Register', url: 'https://www.theregister.com/', description: 'Tech news with a focus on enterprise IT, security, and data centers.' },
    { name: 'TechRadar', url: 'https://www.techradar.com/', description: 'Technology news and reviews for consumers and enthusiasts.' },
    { name: 'Slashdot', url: 'https://slashdot.org/', description: 'News for nerds, covering technology, science, and related topics.' },
    { name: 'Dev.to', url: 'https://dev.to/', description: 'Community of software developers sharing articles, tutorials, and discussions.' },
    { name: 'Lobsters', url: 'https://lobste.rs/', description: 'Technology-focused community-curated link aggregation site.' },
    { name: 'Reddit r/netsec', url: 'https://www.reddit.com/r/netsec/', description: 'Subreddit for cybersecurity news, research, and discussion.' },
    { name: 'Reddit r/technology', url: 'https://www.reddit.com/r/technology/', description: 'Subreddit for general technology news and discussions.' },
    { name: 'Reddit r/programming', url: 'https://www.reddit.com/r/programming/', description: 'Subreddit focusing on programming news, articles, and questions.' },
    { name: 'InfoQ', url: 'https://www.infoq.com/', description: 'News and articles for software developers and architects.' },
    { name: 'Threatpost', url: 'https://threatpost.com/', description: 'Independent cybersecurity news site focused on threat analysis.' },
    { name: 'Packet Storm', url: 'https://packetstormsecurity.com/', description: 'Security news, advisories, exploits, and tools repository.' },
    { name: 'SC Media', url: 'https://www.scmagazine.com/', description: 'Cybersecurity news, product reviews, and industry analysis.' },
    { name: 'Motherboard (by Vice)', url: 'https://www.vice.com/en/topic/motherboard', description: 'Tech news and investigative reporting on hacking, security, and digital culture.' },
  ],

};

export default function UrlCategoryApp() {
  const categories = Object.keys(urlData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          🌐 URL Link Explorer
        </h1>

        <div className="mb-6">
          <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-2">
            Choose a Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <ul className="space-y-4">
          {urlData[selectedCategory].map((item) => (
            <li
              key={item.url}
              className="bg-gray-100 hover:bg-gray-200 transition rounded-xl p-4 shadow-md"
            >
              <a
                href={item.url}
                className="text-xl text-blue-600 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>{item.name}</div>
                <div className="text-base font-normal">{item.description}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
