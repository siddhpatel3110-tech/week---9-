//==============================================================
// 04 - The trust Boundary
//==============================================================

//A "trust boundary" is the conceptual LINE between:
//  - YOUR program (which you control completely), and
//  - the OUTSIDE world (which you do NOT control, and cannot trust).

// Outsude the boundary is anything that comes from user submitting a form,
// a request over the internet, or a file you didn't write yourself.
//
// That incoming data could be:
//  - Missing entirely (null or undefined)
//  - The wrong data type (e.g., they sent a string "twenty" when you expected a number 20)
//  - Maliciously (a hacker to send to code  