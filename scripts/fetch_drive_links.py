#!/usr/bin/env python3
"""Fetch filename -> Google Drive link mapping from the shared folder."""

from __future__ import annotations

import json
import sys
from pathlib import Path

try:
    import gdown
except ImportError:
    print("Install gdown: pip install gdown", file=sys.stderr)
    sys.exit(1)

FOLDER_ID = "1DUOOxBuyYkrQI8owQe8RurP-jxTTpO7C"
OUT = Path(__file__).resolve().parent / "drive_pdf_mapping.json"


def main() -> None:
    url = f"https://drive.google.com/drive/folders/{FOLDER_ID}"
    files = gdown.download_folder(url=url, skip_download=True, quiet=True, use_cookies=False)
    mapping = {}
    for f in files:
        if f.path.endswith(".pdf"):
            fname = f.path.split("/")[-1]
            mapping[fname] = f"https://drive.google.com/file/d/{f.id}/view?usp=sharing"
    OUT.write_text(json.dumps(mapping, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Saved {len(mapping)} PDF links -> {OUT}")


if __name__ == "__main__":
    main()
