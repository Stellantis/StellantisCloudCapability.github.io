# Authentication B2B

In this tutorial you will find an explanation about **getting your B2B authentication** in Stellantis network. This authentication is required in order to consume Stellantis API.

This page is dedicated to Stellantis's commercial partners. End-user authentication procedure is different, check this [page]({{site.baseurl}}/webapi/b2c/quickstart/connect).

Our API let you access sensible data about your fleet of vehicles, that's why we have to perform mutual authentication between our networks. In order to sign your certificate we need you to produce a **Certificate Signing Request (CSR)**. 

At the end of this process you will have everything you need to consume our B2B API for connected vehicles!

**Login info**:
- `MZP`: partner login in Stellantis network.
- `Password`: partner password in Stellantis network.
- `Client ID`: Client credentials to generate OAuth.
- `Client Certificate`: trusted SSL certificate signed by the dedicated Stellantis authority.
- `Private Key`: Your Private Key file.

<img src="/mph05/ApiSpec/assets/images/B2B-authentication.png" alt="client-authentication" style="width: 580px">

## 1. Partner Login

First step is to get a Stellantis login (ex: MZP123456). Information required to get this is already available with Stellantis as all the call centers are already integrated with legacy platforms. Stellantis team will create accounts and share it.
## 2. Encryption Keys & CSR

Once you have received MZP login, next step is to produce SSL keys and CSR. These keys will allow encrypted communication between you and Stellantis:
- **Public key** will be used by Stellantis to encrypt messages.
- **Private key** will be used by you to decrypt Stellantis's messages. Be careful, your private key is secret you need to keep it safe on your network.

In order to ensure your identity we have to perform signing process of your public key and general info about your company. That is why you need to create a **Certificate Signing Request (CSR)**. We will sign your CSR and send you back a proper SSL certificate. Here is info we need in your CSR:

|Information|Value|
|-|-|
| COUNTRY NAME (C) | Country code, two letters (ex: FR) |
| STATE OR PROVINCE (S) | ex: 'Kansas' or 'Ile de France' |
| LOCALITY NAME (L) | ex: 'Paris' |
| ORGANIZATION NAME (O) | ex: 'Free2Move' |
| ORGANIZATIONAL UNIT (OU) | You must type: 'Programs Partners' |
| COMMON NAME (CN) | ex: 'MZP128745' |
| EMAIL ADDRESS | Email address, will be used in order to download and renew your certificate |


Producing encryption keys and CSR have to be done with a dedicated software. Here is **examples with two of them**:

### 2.1 With OpenSSL
**OpenSSL** is an open-source software library for encryption purpose. It is widely used in internet security. You can download and install Open SSL using this [link](https://slproweb.com/products/Win32OpenSSL.html) (Windows).

With OpenSLL producing key and creating CSR can be performed in one step. Create a directory with text configuration file named like 'CSRConfig.conf' and copy/past this text into it:

```conf
[ req ]
default_bits = 2048
distinguished_name = req_distinguished_name

[ req_distinguished_name ]
countryName = COUNTRY NAME (C) two letters ex: FR
stateOrProvinceName = STATE OR PROVINCE (S) ex: Kansas or Ile de France
localityName = LOCALITY NAME (L) ex: Paris
organizationName = ORGANIZATION NAME (O) ex: Free2Move
organizationalUnitName = ORGANIZATIONAL UNIT (OU) Press enter or Programs Partners
organizationalUnitName_default = Programs Partners
commonName = COMMON NAME (CN) ex: MZP128745
emailAddress = EMAIL ADDRESS will be used in order to download and renew your certificate
```

Browse this place with your terminal and execute this command:

```shell
$ openssl req \
  -new \
  -keyout KeyName.pem \
  -out CSRName.csr \
  -config CSRConfig.conf
```

- `KeyName.pem` will be your keyfile name
- `CSRName.csr` will be your CSR name
- `CSRConfig.conf` is configuration file's name

You will be requested for info incorporated in your CSR. Once you fill it you will get your CSR and Keyfile in your directory.

### 2.2 With Keytool
Keytool comes with Java Devlopment Kit. Like OpenSSL, it can be used to produce keys (in a file name keystore) and CSR.

Produce your keys using this command:

```shell
$ keytool \
  -genkey \
  -alias KeyName \
  -keyalg RSA \
  -keysize 2048 \
  -dname "CN=MZPXXXX,OU=Programs Partner,O=PatrnerName,L=<Paris,C=FR,email=it@partner.com" \
  -keystore KeyStoreName.jks
```

- `CN` Common Name (ex MZP128745)
- `OU` Do not replace Programs Partners is right
- `O` Organization Name (ex Free2Move)
- `L` Locality Name (ex Paris)
- `C` Country Name two letters (ex: FR)
- `email` will be used in order to download and renew your certificate
- `Keyname` will be the name of the keys in the keystore
- `KeyStoreName.jks` will be the name of your keystore

Generate your CSR:

```shell
$ keytool \
  -certreq \
  -alias Keyname \
  -keystore KeyStoreName.jks \
  -file CSRName.csr
```

- `Keyname` is the name of the keys in the keystore
- `KeyStoreName.jks` is the name of your keystore
- `CSRName.csr` will be the name of the CSR

## 3. Submit CSR
Once you have created your brand-new CSR file, send it to your contact in Stellantis.
At this point we will begin our internal process to sign your certificate.

## 4. Certificate & Client ID
If everything is ok, our certification authority will accept your Certificate Signing Request. Then you'll receive an email at the adress you specified. This email contains: **link to download your certificate & Stellantis CA certificate** + **Client ID** (= application id).
Download your signed certificate and keep carefully your client ID.