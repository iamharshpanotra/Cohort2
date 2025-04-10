## 🧵 Compiled vs Interpreted Languages

| Feature                 | **Compiled Language**                  | **Interpreted Language**               |
|-------------------------|----------------------------------------|----------------------------------------|
| **Translation**         | Entire code is translated to machine code **before execution** | Code is translated and executed **line-by-line at runtime** |
| **Execution Speed**     | Generally **faster**                   | Generally **slower**                   |
| **Error Handling**      | All errors are shown **after compiling** | Stops execution **at first error**     |
| **Portability**         | May need platform-specific builds      | More portable across platforms         |
| **Examples**            | C, C++, Go, Rust                       | Python, JavaScript, Ruby               |

---

## 🧪 Key Examples:

### 🔹 **Compiled Languages**
- **C/C++**: Code is compiled into platform-specific `.exe` or `.out` files using a compiler like GCC.
- **Go**: Uses the Go compiler to build binaries.
- **Rust**: Compiles to highly optimized machine code with `rustc`.

---

### 🔸 **Interpreted Languages**
- **Python**: Uses an interpreter (`python script.py`), executing code line-by-line.
- **JavaScript**: Traditionally interpreted — but with modern engines like **V8**, it's more of a **hybrid** (just-in-time compilation).

---

## 🧠 What About **JavaScript**?

### Old Days:
- JavaScript was **fully interpreted** by browsers.
- It executed line-by-line, making it slower than compiled languages.

### Now (Modern Browsers):
- JavaScript uses **Just-In-Time (JIT) Compilation** through engines like **V8** (Chrome, Node.js).
- It **compiles parts of the code at runtime** for faster performance.
- This makes it **faster and more efficient**, though still more dynamic than traditional compiled languages.

So JavaScript is **technically interpreted**, but **modern engines blur the line** by compiling code on the fly.

---

## 🔧 Summary

| Language      | Type              | Notes                                              |
|---------------|-------------------|----------------------------------------------------|
| C, C++        | Compiled          | Fast, must compile before running                  |
| JavaScript    | Interpreted + JIT | Runs in browsers, JIT-compiled for performance     |
| Python        | Interpreted       | Slower, easier to write and debug                  |
| Java          | Compiled to bytecode | Uses JVM to interpret or JIT                      |

---