---
title: Information Controls Fellowship Program
nextjs:
  metadata:
    title: Information Controls Fellowship Program
    description: #
---

The Information Controls Fellowship Program (ICFP) supports research efforts to examine how authoritarian governments are restricting the free flow of information and to explore solutions to overcome these evolving tactics. Fellows receive a monthly stipend and a small travel budget that varies based on the length of their fellowship.

---

OTF supported eight ICFP fellows with FY2021 funds. The group will focus on advancing research, analysis, and tool development on topics related to internet censorship. This includes research on potential or existing circumvention techniques, the use of circumvention tools during censorship events, mitigating security vulnerabilities in access and privacy tools, identifying the specific tools used in individual countries for information controls, and more.

## Benjamin Mixon-Baca

**Host Organization**: Censored Planet, University of Michigan\
**Duration**: Twelve months

Lack of transport security where an attacker can spy on personal identifiable information (PII) and inject malware into a machine is an immense and underestimated threat to at-risk users because they operate in environments where the attacker controls the network infrastructure. While there have been efforts to analyze this lack of transport security, they typically do so either on a per-app basis, are not automated, or require some pre-existing knowledge of the apps being analyzed.

To fill this gap, Mixon-Baca developed CryptoSluice, a tool to automatically analyze potentially insecure applications that use poor or no encryption in the transport layer, in an ethical way — that is, without also extracting PII that would normally violate user privacy — and without the need for preexisting knowledge from the part of the analyst.

## Ramakrishnan Sunday Raman

**Host Organization**: Citizen Lab\
**Duration**: Seven months

While censorship technologies have advanced, techniques to identify and monitor them are still limited, and are developed on a case-by-case basis. To address this, Raman developed a set of network measurement methods to locate and examine devices performing censorship, and to measure their deployment in different countries. This measurement toolkit identifies devices scalably through passive and active measurement techniques.

Running case studies in Azerbaijan, Belarus, Kazakhstan, and Russia, Raman’s work identified that censorship policies are often deployed in networks that are upstream to the user — sometimes even in a different country — and that many devices manufactured by commercial vendors such as Cisco and Fortinet are used for censorship. In addition, the project identified similarities and differences in the behaviors of these devices.

The tools developed through this project are fully open source and can be used to monitor the proliferation of censorship devices in different countries.

## Michael Collyer

**Host Organization**: Oxford Internet Institute\
**Duration**: Twelve months

The language surrounding internet shutdowns and how they fit into the broader field of information control warrants further research. In order to better understand the types of internet shutdowns and the existing resources and data, Collyer proposed a framework for types of internet shutdowns, and one for grouping existing taxonomies surrounding shutdowns. The goal was to simplify the language and classification of this phenomenon. He also created an interactive shutdown database to centralize shutdown data to highlight the value of data triangulation and make it easier for future researchers to carry out analysis.

## Gurshabad Grover

**Host Organization**: Open Observatory of Network Interference\
**Duration**: Twelve months

Grover’s research examined jurisdictions with decentralized information controls. In these jurisdictions, internet service providers (ISPs) and other infrastructure providers are responsible for implementing government orders for censorship. ISPs’ technical and policy decisions can exacerbate or minimize the effect of state-directed censorship. Historically, much of the literature on internet censorship and measurement has tended to focus on jurisdictions with centralized information controls, such as China. Grover’s research shed more light on how internet censorship plays out in South Asian countries with a decentralized approach.

The project uncovered how ISPs in India are engaging in arbitrary blocking of websites, and using opaque techniques of blocking that hide critical information from internet users. Grover also studied the efforts of authorities in Pakistan to centralize infrastructure for censorship, and the effects of Indonesian regulations that allow ISPs to block websites at their own discretion.

## Kathrin Elmenhorst

**Host Organization**: Open Observatory of Network Interference\
**Duration**: Three months

QUIC is a fast growing, new internet protocol which uses encryption by design and is the transport forHTTP/3. Elmenhorst’s fellowship focused on measuring the level and type of QUIC censorship in various countries, and exploring approaches for circumventing this method of censorship — the protocol has promising potential for circumvention since it’s implemented on the application layer. Investigating networks in China, India, Iran, Kazakhstan, Russia, Uganda and Venezuela, Elmenhorst found impairment of HTTP/3 traffic in most of these countries, while the censorship techniques varied between networks.

She created a repository documenting known QUIC censorship methods and observed cases of HTTP/3 censorship, an analysis of QUIC features that can be used for censorship evasion, and building blocks for (automated) QUIC censorship evasion.

## Ain Ghazal

**Host Organization**: Open Observatory of Network Interference\
**Duration**: Twelve months

While many users rely on VPNs for improving their privacy online, reducing their personal exposure, and bypassing censorship, interference with VPN traffic is a growing trend. More, better data and accurate models of censor behavior will help to improve circumvention. To this end, Ghazal contributed to ongoing research to quantify censor interference over VPN connections, improving existing metrics and performing novel experiments.

The fellow collaborated with the Open Observatory of Network Interference (OONI) on a proposal for a new data format enabling OONI to receive external reports about VPN failure rates, intended for VPN providers to aggregate and submit reports from their client apps. This cross-actor gathering of real-time intelligence about censor capabilities can help circumvention tools prepare for future blocks in a genuinely resilient way.

## Mona Wang

**Host Organization**: Citizen Lab\
**Duration**: Nine months

With over 1.2 billion monthly active users, WeChat is the most popular messaging and social media platform in China and the third most popular messaging app in the world.

For vulnerable populations that must use WeChat (for instance, domestic journalists and foreign correspondents, grassroots and diaspora activists), precise threat modeling is of utmost importance. This kind of risk assessment requires a more granular security and privacy analysis to understand the shape and nature of the risks. During her fellowship, Mona will reverse-engineer WeChat’s custom transport-layer encryption protocol and provide tooling for other researchers to intercept and decrypt network traffic. She will use this tooling to perform an in-depth security and privacy review of the application, including an analysis of popular MiniPrograms on the WeChat application ecosystem.

## Hamas Bin Tanveer

**Host Organization**: Censored Planet\
**Duration**: Six months

During the course of this fellowship, Hammas aims to understand the censorship mechanisms around Tor bridges over IPv6. His previous work has revealed that there are censorship implementation gaps between DNS over IPv4 and IPv6, resulting in lesser DNS censorship over IPv6. This fellowship aims to find similar censorship gaps between Tor bridges over IPv4 and IPv6 and explore the possibility of creating censorship-resistant Tor bridges using the vast address space of IPv6.