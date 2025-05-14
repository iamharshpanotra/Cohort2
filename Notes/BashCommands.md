# Bash vs Windows CMD Command

| Purpose                   | Bash Command           | Windows CMD           | Explanation                                          | Example (Bash)          | Example (Windows)        |
|---------------------------|------------------------|-----------------------|------------------------------------------------------|-------------------------|--------------------------|
| Print working directory   | `pwd`                  | `cd`                  | Shows current directory path                         | `pwd`                   | `cd`                     |
| List files/directories    | `ls`                   | `dir`                 | Lists files and folders                              | `ls`                    | `dir`                    |
| Change directory          | `cd folder`            | `cd folder`           | Moves into a folder                                  | `cd Documents`          | `cd Documents`           |
| Go up one directory       | `cd ..`                | `cd ..`               | Moves up one level                                   | `cd ..`                 | `cd ..`                  |
| Go to root directory      | `cd /`                 | `cd \`                | Goes to root of drive                                | `cd /`                  | `cd \`                   |
| Create a folder           | `mkdir name`           | `mkdir name`          | Creates a folder                                     | `mkdir test`            | `mkdir test`             |
| Remove a file             | `rm file.txt`          | `del file.txt`        | Deletes a file                                       | `rm notes.txt`          | `del notes.txt`          |
| Remove a folder           | `rm -r folder`         | `rmdir /s folder`     | Deletes folder and contents                          | `rm -r logs`            | `rmdir /s logs`          |
| Copy file                 | `cp src dest`          | `copy src dest`       | Copies file from source to destination               | `cp a.txt b.txt`        | `copy a.txt b.txt`       |
| Move or rename file       | `mv src dest`          | `move src dest`       | Moves/renames file or folder                         | `mv file.txt folder/`   | `move file.txt folder\`  |
| Clear screen              | `clear`                | `cls`                 | Clears the terminal screen                           | `clear`                 | `cls`                    |
| View file contents        | `cat file.txt`         | `type file.txt`       | Shows content of a file                              | `cat todo.txt`          | `type todo.txt`          |
| Edit file (CLI or GUI)    | `nano file.txt`        | `notepad file.txt`    | Opens file in editor                                 | `nano readme.md`        | `notepad readme.md`      |
| Show running processes    | `ps`                   | `tasklist`            | Displays active processes                            | `ps`                    | `tasklist`               |
| Kill a process            | `kill 1234`            | `taskkill /PID 1234`  | Ends a process by PID                                | `kill 1234`             | `taskkill /PID 1234`     |
| Show IP address           | `ifconfig` / `ip a`    | `ipconfig`            | Displays network config                              | `ip a`                  | `ipconfig`               |
| Ping a server             | `ping google.com`      | `ping google.com`     | Pings a server to test connectivity                  | `ping google.com`       | `ping google.com`        |
| Show env variables        | `printenv`             | `set`                 | Shows environment variables                          | `printenv`              | `set`                    |
| Set env variable          | `export VAR=val`       | `set VAR=val`         | Sets an environment variable temporarily             | `export MODE=dev`       | `set MODE=dev`           |
