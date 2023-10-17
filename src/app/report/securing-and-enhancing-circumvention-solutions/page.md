---
title: Securing and Enhancing Circumvention Solutions
nextjs:
  metadata:
    title: Securing and Enhancing Circumvention Solutions
    description: #
---

In order to ensure that circumvention solutions do not fall behind the continuous efforts of authoritarian regimes to evolve their censorship capabilities, OTF, with FY2021 funds, invested in research that sought to better understand the implementation of censorship practices by authoritarian regimes, secure new internet protocols, and better protect and support circumvention tool users.

n collaboration with researchers at Citizen Lab, Censored Planet, and Princeton CITP, **ICFP fellow Ramakrishnan Sundara Raman** built a general purpose, robust censorship traceroute mechanism that identifies the network location of devices performing censorship. The resulting toolkit generates various types of device fingerprints to identify censorship devices, measure their deployment in different countries and enables researchers and circumvention providers to continuously monitor the deployment of such devices.

Other FY2021 research investments sought to future-proof the new QUIC internet protocol against emerging censorship techniques through the work of **ICFP fellow Kathrin Elmenhorst**. The research lays important groundwork for monitoring and overcoming QUIC censorship in the future.

The design of QUIC requires the application of new blocking methods for those aiming to censor information on the internet. Consequently, new measurement techniques are required in order to monitor QUIC censorship and better equip circumvention tools.

OTF strives to ensure that not only are Virtual Private Networks (VPNs) we support able to effectivel yevade censorship but that they are as secure as possible, given that most censoring regimes also surveil circumvention tool users. By examining the endpoints of a VPN tunnel and the low-level packet routing behaviors within the operating system kernels of the VPN client and VPN server, the **Attacking VPNs to Challenge Basic Security Assumptions** project aimed to reveal flaws in VPNs for security and privacy applications, disclose vulnerabilities to necessary parties, and examine potential fixes for VPN issues. The project further educated at-risk populations about the findings to improve their security postures.

One of the most daunting tasks for those in authoritarian contexts when it comes to adopting circumvention tools is how to navigate the murky, poorly regulated VPN market to find a tool that works and that they can trust, particularly given the preponderance of insecure tools, ranging from those within sufficient user data protections to outright imposter apps. To address this challenge, the **VPNalyzer** project has built a framework enabling systematic and automated investigation into the unregulated VPN ecosystem. The framework relies on a combination of crowdsourced investigations, in-depth reviews of VPN-provider practices, and a cross-platform desktop tool for users to test the security and privacy features of their VPN connection in order to better establish the security and trustworthiness of VPNs.

VPN-style circumvention tools are only one model for censorship circumvention that OTF supports. Particularly in countries where there are significant barriers to user adoption of circumvention tools, OTF works closely with USAGM and others to ensure that publishers can assume the circumvention burden by mirroring their websites. This allows their audiences to access content without the need to downloada circumvention tool. In order to ensure this approach to circumvention remains reliably effective even as authoritarian targeting of the technique gets more sophisticated, OTF funded **Project Icarus**, whichis pioneering new mirroring techniques built on technologies such as Tor and the InterPlanetary FileSystem (IPFS) that make mirrors more secure and more difficult to block.

While OTF’s research portfolio is focused primarily on countering the expanding array of technical means that authoritarian regimes block access to content, another common technique used to limit access to information is by flooding online spaces with coordinated disinformation to such a degree that it constitutes a form of censorship. To better understand and address this censorship tactic, the **Observatory on Social Media (OSoME)** developed an open-source suite of online disinformation and manipulation detectors. OSoME creates bot scores that allow researchers to identify technical coordination efforts to use disinformation campaigns as a form of censorship.