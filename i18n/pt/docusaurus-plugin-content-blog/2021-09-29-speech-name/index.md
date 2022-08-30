---
slug: token-speech-bubbles
title: Speech and Thought Bubbles
authors:
  - craigw
tags:
  - MapTool
  - speech-bubble
  - MapTool 1.10
---


## Callouts

One of the new additions in MapTool 1.10 is the ability to override the name that appears in the speech or thought bubble callouts in MapTool.

For those that are not already familiar with the functionality MapTool provides the ability to display the following callouts on all clients
* Pointer - Spacebar<br/> ![Pointer](./pointer.png)

* Speech Bubble - Control + Spacebar<br/> ![Speech Bubble](./speech.png)

* Thought Bubble - Shift + Spacebar<br/> ![Thought Bubble](./thought.png)

* Pointing Finger - Control + Shift +  Spacebar<br/> ![Pointing Finger](./finger-point.png)



## Setting the Speech/Thought Callout Name

Previously these callouts always render the name of the player regardless of where the callout is or impersonation status. In MapTool 1.10 tokens can have a speech name, this can affect the name displayed for both thought and speech bubbles when the mouse pointer is over the token, or the token is impersonated.

This can be set when dragging a new token on to the map<br/> ![New Token Dialog](./new-token-dialog.png)

Or by editing existing tokens. ![Edit Token Dialog](./edit-token-dialog.png)

Or via macro.<br/> `setSpeechName("Speech bubble name", tokenId)`

## Related Macros
There are two related macros `getSpeechName()` which returns the speech name for the current token. There is also a trusted variant `getSpeechName(tokenId)` which will return the speech name for the token with the specified id.

`setSpeechName(SpeechBubbleName)` sets the speech name for the current token. There is also a trusted variant `setSpeechName(SpeechBubbleName, tokenId)` which will set the speech name for the token with the specified id.


## Examples
In the following examples the speech and thought bubbles look different to previous versions as another fix in MapTool 1.10 is to size them dynamically so large names wont be rendered outside of the bubbles.

No impersonated token or token under mouse ![No Token](./anon.png)

Token with Speech Name ![Token With Speech Name](./red-dragon.png)

Token with really long speech name ![Really Long Name](./captain-spalding.png)

Both the eagle and the Dragon have a speech name ![Impersonated](./eagle.png)

Mage and Familiar with Speech Name, mouse over Mage ![Mage](./mage-thought.png)

Mage and Familiar with Speech Name, mouse over Familiar ![Mage](./mage-familiar-thought.png)



## Determining which name is displayed
 In general when deciding which name to use in speech and thought bubbles MapTool will attempt to show the name associated with the following precedence

 1. Token under the mouse with speech name(if player owns it or is GM)
 2. Impersonated Token with speech name
 3. The players name


Below is a more detailed overview of the logic if you really want to know what it is.

```mermaid
flowchart TD;
 Start([Start]) --> mouseOver{Mouse Over<br/>Token} --> |Yes| isOwner{Player Owns}
 mouseOver --> |No| impersonated
 isOwner --> |No| impersonated{Token<br/> Impersonated?}
 isOwner --> |Yes| hasSpeechName{Has Speech<br/> Name}
 hasSpeechName --> |Yes| speechName[Use Token<br/>Speech Bubble Name]
 hasSpeechName --> |No| impersonated
 impersonated --> |No| playerName[Use Player Name]
 impersonated --> |Yes| impersonatedHasSpeech{Token Has<br/>Speech Name?}
 impersonatedHasSpeech --> |Yes| impersonatedSpeech[Use Impersonated<br/>Token Speech Name]
 impersonatedHasSpeech --> |No| playerName
```

If there are multiple tokens under the mouse (e.g. a Token Stack) and at least one has a speech name then the following logic will be used to determine which is used.

```mermaid
flowchart TD;
  Start([Start]) --> hasImpersonated{Token<br/> Impersonated?}
  hasImpersonated --> |Yes| impersonatedUnder{Impersonated Token<br/>in Stack?}
  impersonatedUnder --> |Yes| useImpersonated[Use Impersonated<br/>Token Speech Name]
  impersonatedUnder --> |No| topHasSpeech
  hasImpersonated --> |No| topHasSpeech{Top Token<br/>Has Speech Name?}
  topHasSpeech --> |Yes| useTop[Use Top Token<br/>Speech Name]
  topHasSpeech --> |No| useOther[Use Any Token<br/>in Stack<br/>Speech Name]
```