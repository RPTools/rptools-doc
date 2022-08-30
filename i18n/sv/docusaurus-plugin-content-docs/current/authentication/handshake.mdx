
# Handshake and Authentication
Last Updated: MapTool 1.11

The handshake and authentication occurs via protocol buffers messages before any Hessian serialization occurs. Once the handshake and authentication is successful only then will Hessian serialization be used for passing messages between server and client. (This is likely to change in MapTool 1.11 or MapTool 1.12 where Hessian will be completely replaced by protocol buffers)

## Blocked Player
If a player is blocked then the Server will inform the client of this before trying perform any password or public key authentication.

```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'signalColor': '#e0081a', 'textColor': '#e0081a' }}}%%
  sequenceDiagram
    Client->>Server: ClientInitMsg
    Server->>Server: Lookup Player from ClientInitMsg<br/>
    Server->>Client: Send PlayerBlockedMsg
    Client->>Client: Inform Player<br/>and disconnect.
```

## Player using public key authentication
If the player is not blocked and is authenticating with a public key then the following authentication/handshake sequence occurs. The public key has to be known to the Server before a player can attempt to authenticate this way.

if Not using MapTool easy connect the public key is not sent from client to server via MapTool so the server must know of the public key before hand. The server then encrypts the handshake challenge using the public key which the client will only be able to decrypt if it has access to the matching private key, once decrypted the client sends back the handshake challenge in plaintext as it needs to do no more to show it has the correct private key.

```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'signalColor': '#e0081a', 'textColor': '#e0081a' }}}%%
  sequenceDiagram
    Client->>Server: ClientInitMsg
    Server->>Server: Lookup Player from ClientInitMsg<br/>and retrieve the public key
    Server->>Server: Create HandshakeChallenge
    Server->>Server: Encrypt Challenge with public key
    Server->>Client: Send UseAuthTypeMsg
    Note right of Server: auth_type = ASYMMETRIC_KEY<br/> challenge[0] = HandshakeChallenge.challenge
    Client->>Client: Decrypt Handshake Challeng and reverse random string
    Client->>Server: Send ClientAuthMsg
    Note left of Client:(not encrypted)<br/>challenge_response = HandshakeChallenge.response (reversed string)
    Server->>Client: Send ConnectionSuccessfulMsg
```

## Connecting with MapTool Easy Connect (uses public key)
If the player is already defined in the player database (and having the same public key that they are trying to connect with) the authentication process follows the above flow of connecting with a public key. Otherwise the following flow is followed.

```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'signalColor': '#e0081a', 'textColor': '#e0081a' }}}%%
  sequenceDiagram
    Client->>Server: ClientInitMsg
    Server->>Server: Lookup Player + Public Key from ClientInitMsg<br/>fails.
    Server->>Client: RequestPublicKeyMsg (with PIN code expected).
    Client->>Server: PublicKeyUploadMsg
    Server->>Client: PublicKeyAddedMsg
    Note right of Server: From here on the flow is the same as the public key<br/>flow above.
    Client->>Server: ClientInitMsg
    Server->>Server: Lookup Player from ClientInitMsg<br/>and retrieve the public key
    Server->>Server: Create HandshakeChallenge
    Server->>Server: Encrypt Challenge with public key
    Server->>Client: Send UseAuthTypeMsg
    Note right of Server: auth_type = ASYMMETRIC_KEY<br/> challenge[0] = HandshakeChallenge.challenge
    Client->>Client: Decrypt Handshake Challenge and reverse the random string
    Client->>Server: Send ClientAuthMsg
    Note left of Client:(not encrypted)<br/>challenge_response = HandshakeChallenge.response (reversed string)
    Server->>Client: Send ConnectionSuccessfulMsg
```

## Player using shared password authentication
If the player is not blocked and is authenticating with a shared password the following authentication/handshake sequence occurs. As a shared password could be per player or role based (i.e. a single password for players and another single password for GMs) the server creates a challenge for both GM and Player and which ever the client can respond to determines the role. If a password database is used where the role is recorded and the Server knows if the player is a GM or not then a new random password will be used to encrypt the non pertinent handshake challenge ensuring it should never match.

Password information is never sent between the client and the server instead it is used on both sides to encrypt/decrypt the handshake challenge.

```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'signalColor': '#e0081a', 'textColor': '#e0081a' }}}%%
  sequenceDiagram
  Client->>Server: ClientInitMsg
Server->>Server: Lookup Player from ClientInitMsg and<br/>retrieve password salt
Server->>Server: Create HandshakeChallenge<br/>Player Password
note right of Server: If using player database<br/> with known players and player<br/>is GM then a new random<br/>password is used so this<br/> would never match.
Server->>Server: Create HandshakeChallenge<br/>GM Password
note right of Server: If using player database<br/> with known players and player<br/>is not a GM then a new random<br/>password is used so this<br/> would never match.
Server->>Client: Send UseAuthTypeMsg
note right of Client: auth_type = SHARED_PASSWORD<br/> salt = retrieved password salt<br/> challenge[0] = HandshakeChallenge.challenge (gm)<br/> challenge[1] = HandshakeChallenge.challenge (player)<br/>
Client->>Client: Hash password with<br/>PBKDF2WithHmacSHA1<br/>using salt sent by Server
Client->>Client: Try decrypt both challenges and reverse random string
Client->>Client: Encrypt HandshakeChallenge.response
Client->>Server: Send ClientAuthMsg
note right of Server: challenge_response = Encrypted HandshakeChallenge.response (reversed string)
Server->>Server: Compare client challenge response to<br/>pre-encrypted challenge response on server<br/>side to determine which password was used this will be reversed string
Server->>Client: Send ConnectionSuccessfulMsg
```


## Protocol Buffers
```protobuf reference title="Handshake Protocol Buffers"
https://github.com/RPTools/maptool/blob/develop/src/main/proto/handshake.proto
``` 