"""Format C++ code blocks in Markdown files using clang-format.

This script searches for C++ code blocks in Markdown files and formats them
using clang-format with the specified style.
"""

import argparse
import re
import subprocess


def format_code_blocks(file_path: str, style: str = "Google") -> None:
    """Format C++ code blocks in a Markdown file using clang-format.

    Args:
        file_path: Path to the Markdown file to process
        style: The style option to pass to clang-format (default: "Google")
    """
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = re.compile(r"```(cpp|c\+\+)\n(.*?)```", re.DOTALL)
    matches = pattern.finditer(content)

    for match in matches:
        lang, code = match.groups()
        formatted = subprocess.run(
            ["clang-format", f"--style={style}"],
            input=code.encode(),
            stdout=subprocess.PIPE,
            check=True,
        ).stdout.decode()
        content = content.replace(match.group(0), f"```{lang}\n{formatted}```")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("files", nargs="+", help="Files to format")
    parser.add_argument("--style", default="Google", help="Clang-format style")
    args = parser.parse_args()
    for file in args.files:
        format_code_blocks(file, args.style)
