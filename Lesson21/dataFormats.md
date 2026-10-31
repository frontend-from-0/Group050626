# Formats and data types that a frontend (client) and server commonly share

## 1. JSON (JavaScript Object Notation)
**Why use it?**  
- It’s a simple text-based format that looks like JavaScript objects.
- Super common for web APIs.

**Example**  
```json
{
  "name": "Alice",
  "age": 25,
  "active": true
}
```
This JSON might be sent by a server to a web page to provide user details.

---

## 2. XML (eXtensible Markup Language)
**Why use it?**  
- Used in older or enterprise systems (e.g., SOAP services).
- Structured like HTML with matching start/end tags.

**Example**
```xml
<user>
  <name>Alice</name>
  <age>25</age>
  <active>true</active>
</user>
```
A server might respond with this XML if the client expects an XML-format response.

---

## 3. Plain Text
**Why use it?**  
- Easiest to understand: just a normal string (like “Hello World”).
- Often used for simple messages or logs.

**Example**  
```
Hello, this is a plain text response!
```
Sometimes, an API returns a simple string if no complex data is required.

---

## 4. CSV (Comma-Separated Values)
**Why use it?**  
- Great for spreadsheet-like data (tables).
- Very simple, widely used (spreadsheets, imports/exports).

**Example**  
```
name,age,active
Alice,25,true
Bob,30,false
```
A server might return CSV if you want to download a table of user records in a format you can open in Excel or Google Sheets.

---

## 5. HTML
**Why use it?**  
- The standard language of web pages.
- Often returned by servers when a browser asks for a webpage.

**Example**  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```
Your browser displays the server’s HTML response as a rendered webpage.

---

## 6. Binary Formats (Protobuf, MessagePack, Avro, etc.)
**Why use it?**  
- These formats store data in binary form, making them more compact and efficient than text.
- Common in high-performance or internal systems.

**Example**  
*(Hard to show a “beginner-friendly” example because binary data isn’t human-readable! But typically you’d define a “.proto” file for Protobuf, then generate code to serialize/deserialize.)*

**Protobuf definition snippet**  
```proto
syntax = "proto3";

message User {
  string name = 1;
  int32 age = 2;
  bool active = 3;
}
```
The client and server would use generated code to exchange this data. You won’t “see” the binary, but your program handles it behind the scenes.

---

## 7. Form Data
**Why use it?**  
- A common way to send data from a browser form to the server.  
- Two common types:
  - **application/x-www-form-urlencoded**: small form inputs (like username/password).
  - **multipart/form-data**: used when you include files (like images).

**Example** (form snippet in HTML)
```html
<form action="/submit" method="post" enctype="multipart/form-data">
  <input type="text" name="username" />
  <input type="file" name="profilePicture" />
  <button type="submit">Submit</button>
</form>
```
When submitted, the browser packages these form fields and the file, sending them to `POST /submit`.

---

## 8. GraphQL
**Why use it?**  
- A query language for APIs.  
- Typically still **sends and receives JSON**, but the client can specify exactly what data it wants.

**Example** (GraphQL query)
```graphql
query {
  user(id: 1) {
    name
    age
  }
}
```
The server responds (in JSON) only with those fields:
```json
{
  "data": {
    "user": {
      "name": "Alice",
      "age": 25
    }
  }
}
```

---

## 9. Static/Media Files (Images, Videos, Audio, Documents)
**Why use it?**  
- Most websites serve images, videos, or other files.  
- The server just sends back the file with the right content type.

**Examples**  
- **Images**: JPEG, PNG, GIF, SVG, etc.  
- **Videos**: MP4, WebM  
- **Audio**: MP3, WAV  
- **Documents**: PDF, Word (`.docx`), etc.

**Simple Example**  
```html
<img src="https://example.com/images/cat.png" alt="Cat" />
```
The browser requests `cat.png` from the server, and the server responds with binary image data.

---

## 10. Streaming Formats (Video streams, Chunked downloads, WebSockets)
**Why use it?**  
- Handle continuous data or large files in smaller parts.
- Used for live streaming (video/audio), real-time chat (WebSockets), or progressive downloads.

**Examples**  
1. **Video Streaming (HLS, DASH)**: Large video files are delivered in small segments so that the user can watch before the entire file is downloaded.  
2. **WebSockets**: A persistent connection for real-time updates (e.g., multiplayer games, chat apps).
