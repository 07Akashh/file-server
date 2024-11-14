Sure! Below is a full `README.md` for your project that includes explanations, setup instructions, and commands to run the project.

```markdown
# Square Root Calculation Project

This is a simple C++ project that calculates the square root of a number entered by the user. The project demonstrates the use of CMake for project setup, library linking, and basic input/output operations in C++.

## Project Structure

- `CMakeLists.txt`: The CMake configuration file that defines how the project is built.
- `src/MathFunctions.cpp`: Contains the math function to calculate the square root.
- `include/MathFunctions.h`: Header file that declares the `sqrt` function.
- `app/main.cpp`: Main application that interacts with the user and calls the math library.
- `build/`: Directory where the compiled files are generated.

## Features

- Calculates the square root of a number provided by the user.
- Handles invalid or negative inputs gracefully.
- CMake is used to build and link the application with the math library.

## Prerequisites

Before you begin, ensure that you have the following installed:

- **C++ Compiler**: Ensure you have a C++ compiler such as `g++` or `clang++`.
- **CMake**: A build tool to configure and generate build files for the project.

## Setup Instructions

Follow these steps to set up and run the project:

1. **Clone the repository** (or create a directory structure similar to this):

    ```sh
    git clone https://github.com/your-username/square-root-project.git
    cd square-root-project
    ```

2. **Create the build directory**:

    ```sh
    mkdir build
    cd build
    ```

3. **Generate the build files using CMake**:

    ```sh
    cmake ..
    ```

4. **Build the project**:

    ```sh
    cmake --build .
    ```

5. After building, you will find the executable in the `build/app` directory.

## Running the Program

To run the program:

1. Navigate to the `build` directory (if not already there):

    ```sh
    cd build/app
    ```

2. Run the application:

    ```sh
    ./App
    ```

3. The program will prompt you to enter a number:

    ```sh
    Enter a number to calculate its square root:
    ```

4. Enter a valid number (e.g., `16`) and press Enter.

    The program will display:

    ```sh
    The square root of 16 is 4
    ```

### Example:

```sh
$ ./App
Enter a number to calculate its square root: 25
The square root of 25 is 5
```

## Error Handling

The program includes error handling for the following scenarios:

- If you enter a negative number, the program will display an error message:

    ```sh
    Error: Cannot calculate the square root of a negative number.
    ```

- If you enter invalid input (e.g., letters or non-numeric values), the program will print:

    ```sh
    Error: Invalid number format.
    ```

## Project Details

This project uses a basic structure where the `main.cpp` file interacts with the user and calls the square root function from the `mathlib` library. CMake is used for building the project, making it portable and easy to configure.

### Key Components:
- **Math Library**: A simple library (`mathlib`) that implements the square root function.
- **Main Application**: The executable (`App`) that prompts the user for input and calculates the square root.

## Cleaning Up

To clean the build files (e.g., object files, executables):

```sh
cd build
rm -rf *
```

This will remove all generated build files, including the `App` executable.

## Conclusion

This project demonstrates a simple approach to user interaction, function modularity with libraries, and how to use CMake for organizing and building C++ projects. You can modify and extend this project for other mathematical calculations or include additional features as needed.

---

**Author**: Rahul  
**License**: MIT
```

### How This Works:

- **Installation & Setup**: The `README.md` includes all necessary steps to set up the project, from creating directories to building with CMake.
- **Running the Program**: It explains how to compile, build, and execute the program, with an example input and output.
- **Error Handling**: It describes how the program deals with invalid input, ensuring clarity on user interactions.

You can now copy-paste this `README.md` file into your project’s root directory for better understanding and usage by others (or future you).