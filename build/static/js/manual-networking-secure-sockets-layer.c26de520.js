(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{"./manual/Networking/Secure-Sockets-Layer.md":function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return o});var n=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),r={},s="wrapper";function o(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)(s,Object.assign({},r,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"secure-sockets-layer"},"Secure Sockets Layer"),Object(a.b)("h2",{id:"cryptography"},"Cryptography"),Object(a.b)("p",null,"Cryptography is the computerized ",Object(a.b)("inlineCode",{parentName:"p"},"enciphering")," and ",Object(a.b)("inlineCode",{parentName:"p"},"deciphering")," of information."),Object(a.b)("h3",{id:"greek-roots"},"Greek Roots"),Object(a.b)("p",null,'Greek roots translate to "hidden writing".'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Kyptos (Hidden): Some words we derive from ",Object(a.b)("inlineCode",{parentName:"li"},"kryptos"),": ",Object(a.b)("inlineCode",{parentName:"li"},"crypt")," or ",Object(a.b)("inlineCode",{parentName:"li"},"cryptic")),Object(a.b)("li",{parentName:"ul"},"Graphein (Writing): Some words we derive from ",Object(a.b)("inlineCode",{parentName:"li"},"graphein"),"-graphy (photography, calligraphy), ",Object(a.b)("inlineCode",{parentName:"li"},"graphite"))),Object(a.b)("h2",{id:"why-do-we-use-cryptography"},"Why do we use cryptography?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Confidentiality"),Object(a.b)("li",{parentName:"ul"},"Integrity"),Object(a.b)("li",{parentName:"ul"},"Authenticity"),Object(a.b)("li",{parentName:"ul"},"Non-Repudiation (used in transactional exchanges to assure both the sender and receiver of the other's status in the exchange)")),Object(a.b)("h2",{id:"symmetric-encryption"},"Symmetric Encryption"),Object(a.b)("p",null,"Algorithms:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"DES"),Object(a.b)("li",{parentName:"ol"},"3DES"),Object(a.b)("li",{parentName:"ol"},"AES (Rinjdael)"),Object(a.b)("li",{parentName:"ol"},"Blowfish")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Uses same key for both encryption and decryption"),Object(a.b)("li",{parentName:"ul"},"The main issue with symmetric encryption is that keys have to be shared between parties, usually across a public medium")),Object(a.b)("h2",{id:"asymmetric-encryption"},"Asymmetric Encryption"),Object(a.b)("p",null,"Algorithms:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Diffie-Hellman"),Object(a.b)("li",{parentName:"ol"},"RSA"),Object(a.b)("li",{parentName:"ol"},"ECC")),Object(a.b)("p",null,"Employs two keys - one is used for encryption, and the other is used for decryption."),Object(a.b)("p",null,"It was developed to counteract the major issue with symmetric encryption: key distribution."),Object(a.b)("h2",{id:"diffie-hellman"},"Diffie-Hellman"),Object(a.b)("p",null,"Attempt at solving symmetric key issues by Dr. Diffie and Dr. Hellman."),Object(a.b)("p",null,"First asymmetric key exchange."),Object(a.b)("p",null,"Both users in an exchange agree on a shared private key. There's a complex algorithm associated with it, but the basis is that if you know your key, you can then decrypt the message."),Object(a.b)("p",null,"For instance, if my key is 367 and yours is 235, we end up wwith ",Object(a.b)("inlineCode",{parentName:"p"},"367 x 235 = 86245"),"."),Object(a.b)("h2",{id:"rsa"},"RSA"),Object(a.b)("p",null,"Created by Ron Rivest, Adi Shamir, Leonard Adleman (hence the RSA from last names)."),Object(a.b)("p",null,"Widely used today for ",Object(a.b)("strong",{parentName:"p"},"secure data transmissions"),"."),Object(a.b)("p",null,"In RSA, each user has a widely available public key as well as a secret private key."),Object(a.b)("p",null,"When sending a message, the sender uses the receiver's public key to encrypt that message."),Object(a.b)("p",null,"The only key that can be used to decrypt that message is the receiver's private key."),Object(a.b)("h2",{id:"public-key-infrastructure-pki"},"Public Key Infrastructure (PKI)"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Assymetric Encryption: Used for transactional exchanges. Not any specific technology but rather a framework based on asymmetric technologies."),Object(a.b)("li",{parentName:"ol"},"Certificates: Issued by a certificate authority (CA)"),Object(a.b)("li",{parentName:"ol"},"Provides: Confidentiality, authenticity, integrity and nonreudiation.")),Object(a.b)("h2",{id:"certificate-authority-ca"},"Certificate Authority (CA)"),Object(a.b)("p",null,"Job is to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Issue keys"),Object(a.b)("li",{parentName:"ol"},"Distribute keys"),Object(a.b)("li",{parentName:"ol"},"Manage keys"),Object(a.b)("li",{parentName:"ol"},"Revoke keys")),Object(a.b)("h2",{id:"real-world-scenario-sending-encrypted-mail"},"Real World Scenario: Sending Encrypted Mail"),Object(a.b)("p",null,"Order of operations:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Exchange public keys"),Object(a.b)("li",{parentName:"ol"},"Sender encrypts with receiver's public key"),Object(a.b)("li",{parentName:"ol"},"Receiver decrypts with their private key"),Object(a.b)("li",{parentName:"ol"},"If the encrypted message is intercepted, it cannot be opened without receiver's private key")),Object(a.b)("h2",{id:"web-ssl-requests"},"Web SSL Requests"),Object(a.b)("p",null,"Request order goes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"User"),Object(a.b)("li",{parentName:"ol"},"Web Server"),Object(a.b)("li",{parentName:"ol"},"Registration Authority (RA)"),Object(a.b)("li",{parentName:"ol"},"Certificate Authority (CA)")),Object(a.b)("h2",{id:"ssl-defined"},"SSL Defined"),Object(a.b)("p",null,"SSL is the standard protocol by which we keep an internet connection secure and safeguards sensitive data as it is communicated between two systems. SSL has been superseded and replace by ",Object(a.b)("inlineCode",{parentName:"p"},"Transport Layer Security")," (TLS), but it is still commonly referred to as SSL."),Object(a.b)("p",null,"This is accomplished through the use of ",Object(a.b)("inlineCode",{parentName:"p"},"encryption to scramble data in transit"),", preventing others (such as attackers) from being able to read it. This is done from the client's browser to the web server (ie it relies on the application itself)."),Object(a.b)("p",null,"SSL/TLS operates at the ",Object(a.b)("inlineCode",{parentName:"p"},"Transport layer")," of the OSI model to create a wrapper of sorts around the communications."),Object(a.b)("h2",{id:"communication-via-ssl"},"Communication via SSL"),Object(a.b)("p",null,"FTP, SMTP and HTTP operate at the ",Object(a.b)("inlineCode",{parentName:"p"},"Application layer")," of the OSI model."),Object(a.b)("p",null,"When we're securing these with ",Object(a.b)("inlineCode",{parentName:"p"},"SSL/TLS"),", we put a ",Object(a.b)("inlineCode",{parentName:"p"},"cryptographic wrapper")," around the communication at the ",Object(a.b)("inlineCode",{parentName:"p"},"Transport layer"),"."),Object(a.b)("h2",{id:"hybrid-encryption"},"Hybrid Encryption"),Object(a.b)("p",null,"Came about for several reasons due to issues with the encryption types."),Object(a.b)("p",null,"The issue with ",Object(a.b)("inlineCode",{parentName:"p"},"Symmetric encryption")," requires both parties having to share a key, usually across an untrusted, secure medium."),Object(a.b)("p",null,"The issue with ",Object(a.b)("inlineCode",{parentName:"p"},"Asymmetric encryption")," comes with its own drawbacks. Extremely slow, taking lots of processing power and thus impractical when encrypting large chunks of data."),Object(a.b)("h2",{id:"client---server-ssl-verification-process"},"Client - Server SSL Verification Process"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Client sends hello request to server"),Object(a.b)("li",{parentName:"ol"},"Server response includes its public key"),Object(a.b)("li",{parentName:"ol"},"Client verifies SSL certificate received from the server"),Object(a.b)("li",{parentName:"ol"},"Client creates symmetric session key, encrypts it with server's public key"),Object(a.b)("li",{parentName:"ol"},"Server decrypts session key with its own private key"),Object(a.b)("li",{parentName:"ol"},"The session key is now in place, and all communications sent during session will be encrypted")),Object(a.b)("p",null,"This is also known as the ",Object(a.b)("inlineCode",{parentName:"p"},"TLS handshake"),"."),Object(a.b)("h2",{id:"history"},"History"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"SSL 1.0: Developed by Netscape but never released due to security flaws"),Object(a.b)("li",{parentName:"ul"},"SSL 2.0: Released in 1995, but still had major security flaws"),Object(a.b)("li",{parentName:"ul"},"SSL 3.0: 1996 major redesign. Netscape brought in external help for development"),Object(a.b)("li",{parentName:"ul"},"TLS 1.x: Developed and released in 1999. 1.2 was released in 2008 and is still used today")),Object(a.b)("p",null,"Although there were only minor differences between SSL 3.0 and TLS 1.0, they are not interoperable."),Object(a.b)("p",null,"With that being the case, there was a ",Object(a.b)("inlineCode",{parentName:"p"},"fallback option")," built into TLS 1.0 that allowed the use of SSL 3.0."),Object(a.b)("h2",{id:"ssl-vs-tls-differences"},"SSL vs TLS differences"),Object(a.b)("h3",{id:"port-number"},"Port Number"),Object(a.b)("p",null,"When we select to use SSL, we are telling our systems to communicate via a ",Object(a.b)("inlineCode",{parentName:"p"},"specific port number"),". This is sometimes referred to as ",Object(a.b)("inlineCode",{parentName:"p"},"explicit port selection"),"."),Object(a.b)("p",null,"There particular ports (such as 443 for HTTPS) that handle secure traffic. These ports are configured on the server to initialize a connected by negotiating that secure connection first. This is the basis of SSL."),Object(a.b)("h3",{id:"protocol"},"Protocol"),Object(a.b)("p",null,'When we use TLS, the client and server negotiate the protocol that will be used. These sessions begin with an insecure "hello" message, and only after the handshake has been completed successfully do we switch to a secure connection.'),Object(a.b)("p",null,"The entire handshake is conducted prior to allowing the session to continue. This is sometimes referred to as implicit port selection."))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Networking/Secure-Sockets-Layer.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-networking-secure-sockets-layer.101a1afd2417ec7a4a77.js.map